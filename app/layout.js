import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { Navigation, Footer } from "@/components/layout";
import "../styles/main.scss";

const theme = createTheme({
  //if any theme overrides, add them here then to the provider
});

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
