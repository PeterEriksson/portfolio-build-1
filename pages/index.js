import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Stack from "../components/Stack";
import Work from "../components/Work";
import Contact from "../components/Contact";
import { useContext } from "react";
import { Context } from "../Context";

export default function Home() {
  const { isMenuComponentVisible } = useContext(Context);

  return (
    <div>
      <Head>
        <title>Peter resume portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      {/* lower opacity(on rest of the site) when hamburgermenu is active */}
      <div
        className={`${
          isMenuComponentVisible ? "opacity-80" : "opacity-100"
        } transform transition duration-500 ease-in   `}
      >
        <Header />
        <Stack />
        <Work />
        <Contact />
      </div>
    </div>
  );
}
