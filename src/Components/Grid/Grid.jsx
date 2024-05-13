import GridImages from "./GridImages";

function Grid() {
  return (
    <section className="grid h-[500px] w-full grid-cols-2 md:h-[800px] lg:h-[400px] lg:grid-cols-4">
      <GridImages className="bg-milk_Desktop bg-cover bg-center" />
      <GridImages className="bg-cone_Desktop bg-cover bg-center" />
      <GridImages className="bg-orange_Desktop bg-cover bg-center" />
      <GridImages className="bg-sugar_Desktop bg-cover bg-center" />
    </section>
  );
}

export default Grid;
