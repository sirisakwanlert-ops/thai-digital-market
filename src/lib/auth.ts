export type AppRole = "USER" | "ADMIN";

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  username: string;
  role: AppRole;
};

export const AUTH_CONFIG = {
  appName: "ThaiDigital Market",
  defaultRole: "USER" as AppRole,
};

export function createDemoSessionUser(): SessionUser {
  return {
    id: "demo-user-1",
    name: "อรัญญา พิทักษ์",
    email: "aranya@example.com",
    username: "aranya.design",
    role: "USER",
  };
}
