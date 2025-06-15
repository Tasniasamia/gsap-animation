import Navbar from "@/components/layout/navbar";

// app/layout.js
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
            <Navbar/>
            {children}</body>
      </html>
    );
  }
  