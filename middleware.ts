import {auth} from '@/lib/auth';

// export { auth } from '@/lib/auth';

export default auth((req) => {
    if(req.auth && req.url.startsWith(`${process.env.API_PREFIX}/sign-in`)){
        return Response.redirect(`${process.env.API_PREFIX}/dashboard/repositories/next-components`);
    }
})

export const config = {
    matcher:["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}
