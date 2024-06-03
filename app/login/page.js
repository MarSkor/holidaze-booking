import React from "react";
import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { Container } from "@mantine/core";
import SubmitButton from "./SubmitButton";

const Login = ({ searchParams }) => {
  const signIn = async () => {
    "use server";
  };
  const signUp = async () => {
    "use server";
  };

  return (
    <Container>
      <Link href="/" className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton formAction={signIn} pendingText={"Signing Ip..."}>
          Sign in
        </SubmitButton>
        <SubmitButton formAction={signUp} pendingText={"Signing Up..."}>
          Sign Up
        </SubmitButton>
        {searchParams?.message && <p>{searchParams.message}</p>}
      </form>
    </Container>
  );
};

export default Login;
