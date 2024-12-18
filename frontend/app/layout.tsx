import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { auth, signOut } from "@/auth/authSetup";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <html lang="en" data-theme="">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Homepage</a></li>
              <li><a>Your Stats</a></li>
              <li><a>Start Practicing</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">DataAlgo</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={session?.user?.image || '/default-avatar.jpg'}
                  alt={session?.user?.name || ""}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Profile</a></li>
              <li>
                {session?.user ? (
                  <form action={async () => {
                    'use server';
                    await signOut();
                  }}>
                    <button className="hover:underline" type="submit">Logout</button>
                  </form>
                ): (
                  <div className="hover:underline">
                    <Link
                      href="/stats">
                      Login
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
        {children}
      </body>
    </html>
  );
}
