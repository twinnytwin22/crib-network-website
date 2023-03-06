import Nav from "ui/Navigation/Nav";
import Foot from "ui/Navigation/Foot";
import { ToastContainer } from "react-toastify";
import Providers from "styles/Theme";
import { Suspense } from "react";
import PageLoaderIcon from "./loading";
export const metadata = {
  title: "Crib Network",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="">
        <Providers>
          <div className="grid grid-cols-1 h-screen bg-slate-900 content-center mx-auto overflow-hidden">
            <div className="mt-20">
              <Nav />
          
            </div>
          <Suspense fallback={<PageLoaderIcon/>}>
            {children}
            </Suspense>
            <div className="">
              <Foot />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
