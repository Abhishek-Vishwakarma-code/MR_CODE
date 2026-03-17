import { ToastContainer } from "react-toastify";
import "./globals.css";
import { Providers } from "./providers";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Mr. Code - The Art Of Problem Solving",
  description: "Web application that contains curated coding problems and solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning is crucial here so React doesn't throw an error 
    // when our ThemeToggle script modifies the HTML data-theme attribute on load.
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <Providers>
          {children}
        </Providers>

        {/* Global Toast Configuration */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastClassName="bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-color)] shadow-xl rounded-xl"
        />
      </body>
    </html>
  );
}