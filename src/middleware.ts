import { defineMiddleware} from "astro:middleware";
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

    } else {
      // Si el token no sirve, limpiar cookies
      context.cookies.delete("sb-access-token", { path: "/" });
      context.cookies.delete("sb-refresh-token", { path: "/" });
    }
  }

  return next();
});
