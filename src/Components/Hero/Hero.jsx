function Hero() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-32 bg-hero_Mobile bg-cover bg-center md:gap-14 md:bg-hero_Desktop lg:gap-12">
      <h1 className=" text-center font-Fraunces text-6xl font-fraunces900 text-white md:text-6xl lg:text-7xl">
        WE ARE CREATIVES
      </h1>
      <img
        src="./icon-arrow-down.svg"
        alt="arrow down icon"
        className="w-6 animate-bounce md:w-8"
      />
    </div>
  );
}

export default Hero;
