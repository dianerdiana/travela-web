"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type RedirectProps = {
  to: string;
};

export default function Redirect({ to }: RedirectProps) {
  const router = useRouter();

  useEffect(() => {
    if (to) {
      router.replace(to);
    }
  }, [router, to]);

  return <p>Redirecting...</p>;
}
