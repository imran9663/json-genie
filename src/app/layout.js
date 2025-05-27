import Navbar from "@/components/Navbar";
import { CustomThemeProvider } from "@/CustomThemeProvider";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: "JSON Genie | Effortless JSON Generator & Viewer",
  description:
    "Effortlessly generate, view, and manage JSON data with JSON Genie. Modern UI, live JSON viewer, dark mode, and more!",
  keywords: [
    "JSON generator",
    "JSON viewer",
    "online JSON tool",
    "JSON formatter",
    "JSON editor",
    "JSON Genie",
  ],
  authors: [
    { name: "Imran Pasha", url: "https://imranpashai.netlify.app/" },
  ],
  openGraph: {
    title: "JSON Genie | Effortless JSON Generator & Viewer",
    description:
      "Effortlessly generate, view, and manage JSON data with JSON Genie. Modern UI, live JSON viewer, dark mode, and more!",
    url: "https://json-genie.example.com/",
    siteName: "JSON Genie",
    images: [
      {
        url: "/json-genie_ui.jpg",
        width: 1200,
        height: 630,
        alt: "JSON Genie UI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Genie | Effortless JSON Generator & Viewer",
    description:
      "Effortlessly generate, view, and manage JSON data with JSON Genie. Modern UI, live JSON viewer, dark mode, and more!",
    images: ["/json-genie_ui.jpg"],
  },
  metadataBase: new URL("https://json-genie.example.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://json-genie.example.com/" />
        <meta
          name="keywords"
          content="JSON generator, JSON viewer, online JSON tool, JSON formatter, JSON editor, JSON Genie"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="JSON Genie | Effortless JSON Generator & Viewer"
        />
        <meta
          property="og:description"
          content="Effortlessly generate, view, and manage JSON data with JSON Genie. Modern UI, live JSON viewer, dark mode, and more!"
        />
        <meta property="og:image" content="/json-genie_ui.jpg" />
        <meta property="og:url" content="https://json-genie.example.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="JSON Genie | Effortless JSON Generator & Viewer"
        />
        <meta
          name="twitter:description"
          content="Effortlessly generate, view, and manage JSON data with JSON Genie. Modern UI, live JSON viewer, dark mode, and more!"
        />
        <meta name="twitter:image" content="/json-genie_ui.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/web-app-manifest-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/web-app-manifest-512x512.png"
        />
        <link rel="icon" type="image/png" sizes="64x64" href="/icon1.png" />
        <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
      </head>
      <body className={` antialiased dark:bg-slate-900`}>
        <CustomThemeProvider>
          <Navbar />
          {children}
          <Toaster />
        </CustomThemeProvider>
      </body>
    </html>
  );
}
