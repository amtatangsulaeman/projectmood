import Nav from "./Nav";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
