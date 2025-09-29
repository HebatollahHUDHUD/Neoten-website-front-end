const COOKIE_NAME = "NEXT_LOCALE";
const SESSION_NAME = "NEXT_SESSION";
const EMAIL_ADDRESS = "EMAIL_ADDRESS";
const PASSWORD_RESET = "PASSWORD_RESET";
const USER_SESSION = "USER_SESSION";

const DEF_LNG = "ar";

const AUTH_ROUTES = [
  "/otp",
  "/login",
  "/register",
  "/reset-password",
  "/forgot-password",
];

const PUBLIC_ROUTES = [
  "/",
  "/about-us",
  "/contact-us",
  "/privacy-policy",
  "/terms-conditions",
  "/terms-use",
];

const DEFAULT_LOGIN_REDIRECT = "/";
const DEFAULT_LOGOUT_REDIRECT = "/login";
const BASE_URL = "https://newton.hudhud.it.com";
const API_URL = "https://apis-newton.hudhud.it.com";

export {
  COOKIE_NAME,
  SESSION_NAME,
  EMAIL_ADDRESS,
  PASSWORD_RESET,
  AUTH_ROUTES,
  PUBLIC_ROUTES,
  DEFAULT_LOGIN_REDIRECT,
  DEFAULT_LOGOUT_REDIRECT,
  BASE_URL,
  API_URL,
  USER_SESSION,
  DEF_LNG,
};
