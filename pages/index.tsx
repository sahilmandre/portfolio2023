import { HomeIcon } from "@heroicons/react/24/solid";
import { Inter } from "@next/font/google";
import Link from "next/dist/client/link";
import Head from "next/head";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Hero from "./../components/Hero";

// const inter = Inter({
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
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
      <section id="contact" className="snap-start">
        <Contacts />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <HomeIcon className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
          </div>
        </footer>
      </Link>
    </div>
  );
}
