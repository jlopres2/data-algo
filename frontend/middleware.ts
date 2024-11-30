export { auth as middleware } from "@/auth/authSetup"


// fixes the css
export const config = {
    // regex: this route is free from middleware
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|default-avatar.jpg|github.png|google_logo.png).*)"],
  }

// import { auth } from "@/auth/authSetup"
 
// export default auth((req) => {
//     // if the user's not authorized and they are trying to visit a page that's not /login
//   if (!req.auth && req.nextUrl.pathname !== "/login") {
//     // redirect them to the login page
//     const newUrl = new URL("/login", req.nextUrl.origin)
//     return Response.redirect(newUrl)
//   }
// })