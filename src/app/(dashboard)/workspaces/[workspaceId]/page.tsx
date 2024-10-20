import { redirect } from "next/navigation";

import { getCurrentUser } from "@/features/auth/actions";

const WorkspaceIdPage = async () => {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  return <div>Workspace ID Page</div>;
};

export default WorkspaceIdPage;
