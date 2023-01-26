import { HomeIcon } from "@heroicons/react/24/solid";
import { GetStaticProps } from "next";
import Link from "next/dist/client/link";
import Head from "next/head";
import About from "../components/About";
import Contacts from "../components/Contacts";
import ExperienceSection from "../components/Experience";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "../typing.d";
import Hero from "./../components/Hero";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
// import { imageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { sanityClientTemp } from "../sanity";

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
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
      <Header socials={socials} />

      {/* hero  */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* about */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* experience  */}
      <section id="experience" className="snap-center">
        <ExperienceSection experiences={experiences} />
      </section>

      {/* skills  */}

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next js will attempt to re-generate this page
    // when the requested comes in.
    //  At most once per 200 seconds.
    revalidate: 200,
  };
};
