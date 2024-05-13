function Cards(props) {
  return (
    <section className="w-screen">
      <div className={props.flex}>
        <div className={props.img}></div>
        <div className="flex flex-col gap-12 bg-white p-12 text-center md:w-1/2 md:gap-12 md:p-20 md:text-left lg:p-32">
          <h2 className="font-Fraunces text-4xl font-fraunces900 text-neutralVeryDarkDesaturated_blue">
            {props.title}
          </h2>
          <p className="text-neutralVeryDarkGrayish_blue md:text-sm">
            {props.paragraph}
          </p>
          <div className="flex">
            <button>
              <a className={props.button} href="#">
                Learn More
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
