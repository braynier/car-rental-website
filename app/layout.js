import { Inter } from "next/font/google";
import "./globals.css";
import { SearchProvider } from "./context/searchContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Voyage Rentals - Experience Freedom",
  description:
    "Find your ideal ride for any trip with our diverse range of affordable and dependable car rentals",
};

export default function RootLayout({ children }) {
  return (
    <SearchProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SearchProvider>
  );
}
