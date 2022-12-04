import jwt_decode from "jwt-decode";
import { getCookieToken } from "../storage/Cookie";

let token = getCookieToken();

export let decoded = jwt_decode(token);

// decode header by passing in options (useful for when you need `kid` to verify a JWT):
export let decodedHeader = jwt_decode(token, { header: true });


