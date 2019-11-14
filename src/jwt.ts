import * as JWT from "jsonwebtoken";

export default class JWTManager {
    static SignIn(credentials: Object) {
        const token = JWT.sign({...credentials}, "shhhhhh", { algorithm: 'RS256' });
        return token;
    }
}