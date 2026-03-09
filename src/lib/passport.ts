import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import "dotenv/config";
import { prisma } from "./prisma";

const OPTIONS = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: String(process.env.SECRET),
};

passport.use(
	new JwtStrategy(OPTIONS, async (jwtPayload, done) => {
		try {
			const user = await prisma.user.findUnique({
				where: { email: jwtPayload.email },
			});
			if (!user) return done(null, false, { message: "Email not found" });
			return done(null, user);
		} catch (error) {
			return done(error, false);
		}
	}),
);
