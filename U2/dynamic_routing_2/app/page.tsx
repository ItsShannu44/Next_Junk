// import Link from "next/link";
// import Num from "./Client_Error/number/page";
// import UsersPage from "./SSR/page";
import ProductsPage from "./ISR/page";

export default function Home() {
  return (
    <div>
      {/* <h1>Home Page</h1>
4
      <Link href="/nested/electronics/123">
        View Product
      </Link> */}
      {/* <Num/> */}

      {/* <UsersPage/> */}
      <ProductsPage/>
    </div>
  );
}