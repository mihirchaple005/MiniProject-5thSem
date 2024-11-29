// import { authMiddleware, clerkClient } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// const publicRoutes = [
//     "/sign-in",
//     "/sign-up",
//     "/sign-in/[[...sign-in]]",
//     "/sign-up/[[...sign-up]]",
//     "/",
//     "/api/webhook/register",
//     "/sign-in"
// ]


// export default authMiddleware({
//     publicRoutes,
//     async afterAuth(auth, req) {
//         // handle unauthenticated users trying to access a protected route
//         if (!auth.userId && !publicRoutes.includes(req.nextUrl.pathname)) {
//             // redirect to sign-in page
//             return NextResponse.redirect(new URL("/sign-in", req.url));
//         }

//         if (auth.userId) {
//             try {
//                 const user = await clerkClient.users.getUser(auth.userId);
//                 const role =user.publicMetadata.role as string | undefined;
    
    
//             if(role == "student") {
//                 return NextResponse.redirect(new URL("/dashboard", req.url));
//             }
    
//             if(role == "company") {
//                 return NextResponse.redirect(new URL("/company", req.url));
//             }
    
//             if(role !== "company" && req.nextUrl.startsWith("/company")) {
//                 return NextResponse.redirect(new URL("/dashboard", req.url)); 
//             }
    
//             // redirect auth user trying to access public routes
//             if (publicRoutes.includes(req.nextUrl.pathname)) {
//                 return NextResponse.redirect(
//                     new URL(
//                         role == "company" ? "/conpany" : "/dashboard",
//                         req.url
//                     )
//                 )
    
    
//         }
//     } catch (error) {
//                 console.error(error)
//                 return NextResponse.redirect(new URL("/sign-in", req.url));
//     }
// }
            

//     }
// });


// export const config = {
//     matcher: [
//         // skip Next.js internals and all static files, unless found in search params
//         "/((?!_next/static|_next/data|favicon.ico).*)",
//         // always run for api routes
//         "/api/:path*",
//     ],
// };