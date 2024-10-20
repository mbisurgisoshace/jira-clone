import { redirect } from "next/navigation";

import { getCurrentUser } from "@/features/auth/queries";
import { SignUpCard } from "@/features/auth/components/SignUpCard";

const SignUpPage = async () => {
  const user = await getCurrentUser();

  if (user) redirect("/");

  return <SignUpCard />;
};

export default SignUpPage;
