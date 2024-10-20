import { redirect } from "next/navigation";

import { getCurrentUser } from "@/features/auth/queries";
import { EditWorkspaceForm } from "@/features/workspaces/components/EditWorkspaceForm";
import { getWorkspace } from "@/features/workspaces/queries";

interface WorkspaceIdSettingsPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdSettingsPage = async ({
  params,
}: WorkspaceIdSettingsPageProps) => {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  const initialValues = await getWorkspace(params.workspaceId);

  if (!initialValues) redirect(`/workspaces/${params.workspaceId}`);

  return (
    <div className="w-full lg:max-w-xl">
      <EditWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdSettingsPage;
