import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <Link
      href={"/auth"}
      className="bg-primary-color px-2 py-1 rounded-md
       text-white duration-300 transition text-[12px]
        hover:translate-y-0.5 hover:bg-white
         hover:text-primary-color hover:border
         hover:border-primary-color
        hover:shadow-[0_0_15px_rgba(177_54_135/0.7)]"
    >
      Get Started
    </Link>
  );
};

export default SignIn;
