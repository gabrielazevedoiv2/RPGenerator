import * as JWT from "jsonwebtoken";

export default class JWTManager {
    static SignIn(credentials: Object) {
        const token = JWT.sign({...credentials}, "secret", { expiresIn: 7200 });
        return token;
    }

    static Verify(req, res, next) {
        var token = req.headers['x-access-token'];
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
        JWT.verify(token, "secret", function(err, decoded) {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            // se tudo estiver ok, salva no request para uso posterior
            req.userId = decoded.id;
            next();
        });
    }
}