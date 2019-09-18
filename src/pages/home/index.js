import React from "react";
import HeroSection from "./../../components/HeroSection";
import FaqSection from "./../../components/FaqSection";
import ClientsSection from "./../../components/ClientsSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="white"
        size="large"
        title="CAROLINA GONZALEZ"
        subtitle="JUNIOR FULLSTACK DEVELOPER"
        buttonText="Proyectos"
        buttonOnClick={() => {
          router.push("/#projects");
        }}
      />
      <FaqSection color="dark" size="medium" title="FAQ" subtitle="" />
      <ClientsSection
        color="light"
        size="medium"
        title="Proyectos? GitHub!"
        subtitle=""
      />
    </>
  );
}

export default HomePage;
