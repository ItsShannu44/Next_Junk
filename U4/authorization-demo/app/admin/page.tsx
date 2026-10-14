import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  if (session.user.role !== "admin") {
    redirect("/student");
  }

  return (
    <main>
      <h1>Admin Dashboard</h1>
      <p>Welcome Administrator!</p>
      <p>You are authorized to access this page.</p>
    </main>
  );
}
