// src/utils/auth.ts

export const isTokenValid = (jwt: string): boolean => {
  try {
    const payloadBase64 = jwt.split(".")[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    const exp = decodedPayload.exp * 1000;
    return Date.now() < exp;
  } catch {
    return false;
  }
};

export interface UserFromToken {
  email: string;
  roles: string[];
}

export const getUserFromToken = (jwt: string): UserFromToken | null => {
  try {
    const payloadBase64 = jwt.split(".")[1];
    const decoded = JSON.parse(atob(payloadBase64));
    return {
      email: decoded.sub,
      roles: decoded.roles,
    };
  } catch {
    return null;
  }
};
