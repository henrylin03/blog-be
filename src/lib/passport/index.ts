import passport from "passport";
import jwtStrategy from "./strategies/jwtStrategy";
import localStrategy from "./strategies/localStrategy";

passport.use(localStrategy);
passport.use(jwtStrategy);

export default passport;
