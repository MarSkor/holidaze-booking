import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "../styles/main.scss";
import { MantineProvider } from "@mantine/core";
import { Navigation, Footer } from "@/components/layout";

export const metadata = {
  title: "Holidaze Booking",
  description: "Discover Hotels, B&B and guesthouses in Bergen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
