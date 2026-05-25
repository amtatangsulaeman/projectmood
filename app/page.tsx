import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Pillars from "@/components/Pillars";
import Membership from "@/components/Membership";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Intro />
      <Pillars />
      <Membership />
      <Location />
      <Footer />
    </main>
  );
}
