import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { UnauthorizedException } from "../utility/app-error";
import { ENV } from "./env.config";
import { findByIdUserService } from "../services/user.service";


passport.use(

    //this part creates the mechanism to extrat the cookie
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromExtractors([
            (req)=> {
                const token = req.cookies.accessToken;
                if(!token) throw new UnauthorizedException("Unauthorised access");
                return token;

            }
        ]),
        secretOrKey: ENV.JWT_SECRET,
        audience:["User"],
        algorithms:["HS256"],
    },


    //this part is the one that validates its  and userId is passsed to it by default but it is the payload of the request

    async({userId}, done)=>{
        try {
             const user = userId && (await findByIdUserService(userId));
             return done(null, user || false );
        } catch (error) {
            return done(null, false);
        }
    }

)
    
);


export const passportAuthenticateJwt = passport.authenticate('jwt',{
    session: false,
} )