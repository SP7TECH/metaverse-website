import {
  Hero,
  About,
  Explore,
  GetStarted,
  WhatsNew,
  World,
  Insights,
  Feedback,
} from "@/sections";
import { Navbar, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Explore />
        <GetStarted />
        <WhatsNew />
        <World />
        <Insights />
        <Feedback />
      </main>
      <Footer />
    </>
  );
}
