import {
  author,
  github,
  imageLocation,
  linkedin,
  twitter,
} from "@/utils/Content";
import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from "astro-boilerplate-components";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          <GradientText>Welcome !</GradientText> 👋
        </>
      }
      description={
        <div className="text-xl leading-8">
          Doobia is a skilled Delaware-based
          <a className="text-cyan-400 hover:underline" href="/">
            {" "}
            Frontend Developer
          </a>{" "}
          specializing in
          <a className="text-cyan-400 hover:underline" href="/">
            {" "}
            React, NextJS, Redux, Typescript and JavaScript.{" "}
          </a>
          With a strong eye for design and attention to detail, he creates
          visually stunning and intuitive user interfaces. Committed to
          excellence, Doobia delivers exceptional web experiences that surpass
          expectations.
        </div>
      }
      avatar={
        <img
          className="h-[400px] w-full object-cover object-top"
          style={{
            borderRadius: "10px",
          }}
          src={imageLocation}
          alt={`${author} Profile Picture`}
          loading="lazy"
        />
      }
      socialButtons={
        <div className="mb-3 flex w-full justify-center gap-4 md:justify-start">
          <a href={github} className="w-[32px]" target="_blank">
            <HeroSocial src="/assets/icons/github.svg" alt="Github icon" />
          </a>
          <a href={linkedin} className="w-[32px]" target="_blank">
            <HeroSocial src="/assets/icons/linkedin.svg" alt="Linkedin icon" />
          </a>
          <a href={twitter} className="w-[32px]" target="_blank">
            <HeroSocial src="/assets/icons/twitter.svg" alt="Twitter icon" />
          </a>
        </div>
      }
    />
  </Section>
);

export { Hero };
