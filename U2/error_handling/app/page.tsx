import Image from "next/image";
import NotFound from "./about/not-found";
import Error from "./about/error";

export default function Home() {
  return (
    <div>
      <NotFound/>
      <Error/>
    </div>
  );
}
