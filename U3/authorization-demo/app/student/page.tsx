import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function StudentPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  if (session.user.role === "admin") {
    redirect("/admin");
  }

  if (session.user.role !== "student") {
    redirect("/");
  }

  return (
    <main>
      <h1>Student Dashboard</h1>
      <p>Welcome Student!</p>
      <p>You have student access.</p>
    </main>
  );
}
