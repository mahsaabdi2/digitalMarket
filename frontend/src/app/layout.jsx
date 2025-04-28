import { Geist } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartProvider from "./context/CartContext";
import SearchProvider from "./context/SearchContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
      <SearchProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
       </SearchProvider>
      </body>
    </html>
  );
}