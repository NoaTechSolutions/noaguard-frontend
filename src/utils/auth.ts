export interface UserFromToken {
  email: string;
  roles: string[];
  exp?: number; // opcional: por si quieres mostrar cuándo expira
}

/**
 * Verifica si el token JWT aún es válido usando su fecha de expiración.
 */
export const isTokenValid = (jwt: string): boolean => {
  try {
    const parts = jwt.split(".");
    if (parts.length !== 3) throw new Error("Token malformado");

    const payloadBase64 = parts[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    const exp = decodedPayload.exp;

    if (!exp) throw new Error("No hay campo exp en el token");

    return Date.now() < exp * 1000;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error("[Auth] Token inválido:", error);
    }
    return false;
  }
};

/**
 * Extrae información del usuario desde un token JWT.
 */
export const getUserFromToken = (jwt: string): UserFromToken | null => {
  try {
    const parts = jwt.split(".");
    if (parts.length !== 3) throw new Error("Token malformado");

    const payloadBase64 = parts[1];
    const decoded = JSON.parse(atob(payloadBase64));

    return {
      email: decoded.sub,
      roles: decoded.roles,
      exp: decoded.exp,
    };
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error("[Auth] Error al decodificar el token:", error);
    }
    return null;
  }
};
