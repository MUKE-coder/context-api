import Navbar from "@/components/Navbar";
import "../styles/main.scss";

import { CartProvider } from "@/components/CartContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "My shop Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="bottom right" toastOptions={{ duration: 3000 }} />
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
