import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi! I'm Peter Carl M. Pardo, an aspiring Full Stack Developer. This
        website is to showcase and document all of my personal projects, what
        skills and lessons that I have learned throughout my web development
        journey.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/peterpardo")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
