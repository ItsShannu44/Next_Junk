// import Image from "next/image";

import About from "./about/about";
import Contact from "./contact/contact";
import Loading from "./loading";
import "./globals.css";
export default function Home() {
  return (
    <div>
      <h1>Hello Everyone</h1>
      <p>This is home page of file based routing app.</p>
      <About /><br></br>
      <Contact/>
      <Loading/>
    </div>
  );
}
