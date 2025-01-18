import type { Metadata } from "next";
import "../globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";


export const metadata = {
    title: "Threads",
    description: "Next js meta threads application",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
    <html lang="en">
      <body
      >
      <Topbar/>
        <main className={"flex flex-row"}>
            <LeftSidebar/>
            <section className={"main-container"}>
                <div className={"w-full max-w-4xl"}>
                    {children}
                </div>
            </section>
            <RightSidebar/>
        </main>
      <Bottombar/>

      </body>
    </html>
      </ClerkProvider>

  );
}
