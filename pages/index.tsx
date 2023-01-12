import { Inter } from "@next/font/google";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "./../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
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
      <section id="hero">
        <Hero />
      </section>

      {/* about */}

      {/* experience  */}

      {/* skills  */}

      {/* projects  */}

      {/* contact me  */}
    </div>
  );
}
