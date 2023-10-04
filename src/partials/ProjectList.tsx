import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from "astro-boilerplate-components";

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="SAAS Diet App"
        description="SAAS Diet is a powerful app that tracks cloud storage spendings and suggests cost-effective alternatives, empowering users to save money and optimize resource allocation."
        link="https://www.saasdiet.com/Compare"
        img={{
          src: "/assets/project/saas-diet.png",
          alt: "SAAS Diet Project",
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>NextJS</Tags>
            <Tags color={ColorTags.SLATE}>TypeScript</Tags>
            <Tags color={ColorTags.LIME}>Redux</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
          </>
        }
      />
      <Project
        name="Shopping Cart Project"
        description="A Vanilla Javascript Shopping Cart Project where users can view products, add them to cart, and checkout. The main priority of the project was data structure and DOM manipulation."
        link="https://shopping-cart-js-alpha.vercel.app/"
        img={{
          src: "/assets/project/cart-check.svg",
          alt: "Shopping Cart Project",
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>HTML</Tags>
            <Tags color={ColorTags.EMERALD}>BootStrap</Tags>
            <Tags color={ColorTags.LIME}>CSS</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Rick and Morty Project"
        description="Rick & morty Characters website where you can search, filter and view characters from the show."
        link="https://rick-morty-wiki-tan.vercel.app/Characters"
        img={{
          src: "/assets/project/rick-svgrepo-com.svg",
          alt: "Rick and Morty Project",
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React</Tags>
            <Tags color={ColorTags.LIME}>Typescript</Tags>
            <Tags color={ColorTags.INDIGO}>Material UI</Tags>
            <Tags color={ColorTags.ROSE}>Redux</Tags>
          </>
        }
      />
      <Project
        name="Spacex Rocket Wiki"
        description="Spacex Rocket Wiki page is a project built on nextjs and typescript where you can search, and learn more about rockets, ships, and much more"
        link="https://nextjs-rocket-wiki.vercel.app/"
        img={{
          src: "/assets/project/Rocket.svg",
          alt: "Spacex Rocket Wiki",
        }}
        category={
          <>
            <Tags color={ColorTags.CYAN}>NextJS</Tags>
            <Tags color={ColorTags.LIME}>Typescript</Tags>
            <Tags color={ColorTags.BLUE}>Tailwind CSS</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
