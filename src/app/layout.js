import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Navlinks from "@/components/Navlinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flash community",
  description: "Flash community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" h-full relative bgImg bg-{hero-pattern} ">
        <div className="drawer ">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />

          <div className="drawer-content bgImg  h-full  flex flex-col">
            <div className=" flex h-full flex-col ">
                <Navbar />
                <main className="h-full bg-base-200  ">{children}</main>
                <Footer />
            </div>
          </div>

          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100">
              <Navlinks />
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
