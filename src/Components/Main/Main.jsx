import Cards from "./Cards";
import DoubleCards from "./DoubleCards";

function Main() {
  return (
    <main>
      <Cards
        button="border-b-4 border-b-primaryYellow font-Fraunces font-fraunces700 transition-all hover:border-b-8"
        flex="flex flex-col md:flex-row"
        img="bg-transform_Desktop bg-cover bg-center md:w-1/2 w-full md:h-none min-h-[350px]"
        title="Transform your brand"
        paragraph="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
      />
      <Cards
        button="border-b-4 border-b-primarySoft_red font-Fraunces font-fraunces700 transition-all hover:border-b-8"
        flex="flex flex-col md:flex-row-reverse"
        img="bg-stand_Desktop md:w-1/2 bg-center bg-cover md:w-1/2 w-full md:h-none min-h-[350px]"
        title="Stand out to the right
        audience"
        paragraph="Using a collaborative formula of designers, researchers,
        photographers, videographers, and copywriters, we'll
        build and extend your brand in digital places."
      />

      <div className="flex flex-col md:flex-row">
        <DoubleCards
          bg="bg-graphic_Desktop bg-cover bg-center md:w-1/2"
          title="Graphic Design"
          paragraph="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention."
        />
        <DoubleCards
          bg="bg-photography_Desktop bg-cover bg-center md:w-1/2"
          title="Photography"
          paragraph="Increase your credibility by getting the most stunning, high-quality photos that improve your
          business image."
        />
      </div>
    </main>
  );
}

export default Main;
