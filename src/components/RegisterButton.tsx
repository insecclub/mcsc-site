import Link from "next/link";
import { useState } from "react";


// const handleClick = signIn("github");

const RegisterButton = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Link
      href="/"
      onClick={() => setLoading(true)}
      className="shrink-0 mt-4 relative px-10 py-3 rounded-lg ring-2 ring-[#00ff41] border-[#00ff41] border-2 bg-transparent flex items-center justify-center font-medium hover:scale-105 transition-all"
    >
        <p className='text-xl text-center'>
            <code>{loading ? "Redirecting ...." : "Register Now"}</code>
        </p>
    </Link>
  );
}
export default RegisterButton;
