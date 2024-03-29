import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      Landing page
      <Link href={"/sign-in"}>
        <Button>Sign in</Button>
      </Link>
      <Link href={"/sign-up"}>
        <Button>Sign Up</Button>
      </Link>
      <SignOutButton />
    </div>
  );
};

export default LandingPage;
