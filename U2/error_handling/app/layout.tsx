// export default function RootLayout({
//     children:  
// }) {throw new Error("Root layout failed");
//     return(
//         <html>
//         <body>
//             {children}
//         </body>
//         </html>
//     );
// }


// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ 
children,
} : {
    children: React. ReactNode;
}) {
    throw new Error("Root layout failed");
    return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}