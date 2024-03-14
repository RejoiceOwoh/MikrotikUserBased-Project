
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Your layout content (header, navigation bar, etc.) */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;


// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";



// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body 
//       className={inter.className}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
