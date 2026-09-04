import Counter from "./client-comp/page";
import UsersPage from "./server-comp/page";

export default function Home() {
  return (
    <div>
      <Counter />
      <UsersPage />
    </div>
  );
}