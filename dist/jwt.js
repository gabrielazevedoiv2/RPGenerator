"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JWT = require("jsonwebtoken");
class JWTManager {
    static SignIn(credentials) {
        const token = JWT.sign(Object.assign({}, credentials), "secret", { expiresIn: 7200 });
        return token;
    }
    static Verify(req, res, next) {
        var token = req.headers['x-access-token'];
        if (!token)
            return res.status(401).send({ auth: false, message: 'No token provided.' });
        JWT.verify(token, "secret", function (err, decoded) {
            if (err)
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            // se tudo estiver ok, salva no request para uso posterior
            req.userId = decoded.id;
            next();
        });
    }
}
exports.default = JWTManager;
//# sourceMappingURL=jwt.js.map