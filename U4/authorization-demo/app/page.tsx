import { signIn } from "@/auth";

export default function Home() {
  return (
    <main>
      <h1>Next.js Authorization Demo</h1>

      <h2>Login</h2>

      <form
        action={async (formData) => {
          "use server";

          await signIn("credentials", {
            username: formData.get("username"),
            password: formData.get("password"),
            redirectTo: "/student",
          });
        }}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>
    </main>
  );
}
