import * as JWT from "jsonwebtoken";

export default class JWTManager {
    static SignIn(credentials: Object) {
        const token = JWT.sign({...credentials}, "shhhhhh", { expiresIn: 60 * 60 });
        return token;
    }
}