import "dotenv/config";
import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import localStrategy from "./localStrategy";

const JWT_STRATEGY_OPTIONS = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.SECRET,
};

passport.use(localStrategy);

export default passport;
