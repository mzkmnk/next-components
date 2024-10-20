import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { NextRequest, NextResponse } from "next/server";

export const {handlers,auth,signIn,signOut} = NextAuth({
    providers:[GitHub],
    callbacks:{
        authorized : async ({auth}) => {
            return !!auth;
        }
    }
})