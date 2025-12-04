import { defineMiddleware } from "astro:middleware";
import { supabase } from "./lib/supabase";

export const onRequest = defineMiddleware(async (context, next) => {
    const accessToken = context.cookies.get("sb-access-token");
    const refreshToken = context.cookies.get("sb-refresh-token");

    // Definir valores por defecto
    context.locals.isLoggedIn = false;
    context.locals.isAdmin = false;

    if (accessToken && refreshToken) {
        // Supabase valida los tokens
        const { data, error } = await supabase.auth.setSession({
            access_token: accessToken.value,
            refresh_token: refreshToken.value,
        });

        if (!error && data?.session) {
            context.locals.isLoggedIn = true;
            context.locals.isAdmin = true;

            // --- NUEVO: SINCRONIZACIÓN DE COOKIE UI ---
            // Si la sesión es válida, aseguramos que la cookie visible para JS exista.
            // Esto arregla sesiones antiguas o perdidas.
            context.cookies.set("is-logged-in", "true", {
                path: "/",
                httpOnly: false, // Fundamental: JS debe poder leerla
                secure: true,
                maxAge: 60 * 60 * 24 * 7 // 1 semana (o lo que prefieras)
            });

        } else {
            // Si el token no sirve, limpiar cookies
            context.cookies.delete("sb-access-token", { path: "/" });
            context.cookies.delete("sb-refresh-token", { path: "/" });
            context.cookies.delete("is-logged-in", { path: "/" }); // Limpiamos también la de UI
        }
    } else {
        // Si no hay tokens de supabase, asegurarnos que no quede la bandera "logueado" pegada
        // Esto previene inconsistencias si el usuario borró cookies manualmente
        const uiCookie = context.cookies.get("is-logged-in");
        if (uiCookie) {
            context.cookies.delete("is-logged-in", { path: "/" });
        }
    }

    return next();
});
