import { redirect } from "next/navigation";
import { getCurrentUser } from "@/features/auth/actions";

const SettingsPage = async () => {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  return <div>Settings</div>;
};

export default SettingsPage;
