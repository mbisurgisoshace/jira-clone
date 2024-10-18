"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useLogout } from "@/features/auth/api/useLogout";
import { useCurrentUser } from "@/features/auth/api/useCurrentUser";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  const { mutate: logout } = useLogout();
  const { data, isLoading } = useCurrentUser();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data]);

  return (
    <div className="p-3 flex flex-col gap-4 items-center justify-center">
      Only visible to authenticated users
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
}
