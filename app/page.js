import About from "./components/About";
import BackToTopButton from "./components/BackToTopButton";
import Cars from "./components/Cars";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Why from "./components/Why";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-[1920px] bg-white">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonials />
      <Cta />
      <Footer />
      <BackToTopButton />
    </main>
  );
}
