import { ToastContainer } from "react-toastify";
import "./globals.css";
import { Providers } from "./providers";
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: "Mr. Code - The Art Of Problem Solving",
  description: "Web application that contains LeetCode problems and solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <ToastContainer />
      </body>
    </html>
  );
}