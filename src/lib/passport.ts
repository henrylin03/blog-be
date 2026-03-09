import passport from "passport";
import JwtStrategy, { ExtractJwt } from "passport-jwt";
import "dotenv/config";

const OPTIONS = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: String(process.env.SECRET),
};

passport.use(
	new JwtStrategy.Strategy(OPTIONS, (jwtPayload, done) => {
		if (jwtPayload.email === "correct@email.com") return done(null, true);
		return done(null, false);
	}),
);
