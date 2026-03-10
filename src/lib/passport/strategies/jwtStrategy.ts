import "dotenv/config";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";

const OPTIONS = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: String(process.env.SECRET),
};

const jwtStrategy = new JwtStrategy(OPTIONS, (payload, done) => {});

export default jwtStrategy;
