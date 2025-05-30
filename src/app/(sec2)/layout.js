import { Inter } from "next/font/google";
import Header from "@/components/appComponents/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AccountSidebar } from "@/components/appComponents/AccountSidebar";
import { Toaster } from "@/components/ui/sonner";
import "../globals.css";
import ReduxStateProvider from "@/lib/redux/ReduxStateProvider";
import WalletContextProvider from "@/components/appComponents/WalletContextProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "SolPost",
  description: "Learn, build, share and earn with SolPost",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};


export default function Section2Layout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <WalletContextProvider>
          <ReduxStateProvider>
            <Header/>
            <SidebarProvider>
              <AccountSidebar className="mt-18"/>
              <Toaster />
                <main className="font-[var(--font-inter)] w-full">
                  <SidebarTrigger />
                  {children}
                </main>

            </SidebarProvider>          
          </ReduxStateProvider>          
        </WalletContextProvider>


      </body>
    </html>
  );
}
