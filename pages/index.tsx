import { Inter } from "@next/font/google";
import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Hero from "./../components/Hero";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-mandatory overflow-scroll z-0"
    >
      <Head>
        <title>Sahil Mandre </title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="globals.css" />
      </Head>

      {/* Header  */}
      <Header />

      {/* hero  */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* about */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* experience  */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* skills  */}

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* projects  */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* contact me  */}
    </div>
  );
}
