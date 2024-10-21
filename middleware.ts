import { auth, auth as middleware } from '@/lib/auth';

// export { auth } from '@/lib/auth';

export default auth((req) => {
    if(req.auth && req.url.startsWith('http://localhost:3000/sign-in')){
        return Response.redirect('http://localhost:3000/dashboard');
    }
})

export const config = {
    matcher:["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}