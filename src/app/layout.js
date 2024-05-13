import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from './components/BootstrapClient.js';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Siera Meaux",
  description: "The complete works of Siera Meaux",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
