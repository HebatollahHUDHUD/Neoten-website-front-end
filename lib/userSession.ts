import cookieClient from "js-cookie";

import { USER_SESSION } from "@/constant";

export function getUserSession() {
  const userSession = cookieClient.get(USER_SESSION) || "";

  if (!userSession) return null;

  try {
    return JSON.parse(userSession);
  } catch (error) {
    console.error("Invalid JSON:", error, userSession);
    // Return a fallback value or handle the error
  }
}

export function addUserSession(userSession: string) {
  cookieClient.set(USER_SESSION, userSession);
}
