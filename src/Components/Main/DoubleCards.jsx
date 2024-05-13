function DoubleCards(props) {
  return (
    <div className={props.bg}>
      <div className="flex flex-col items-center justify-end gap-4 text-center md:min-h-[500px] md:px-12 md:pb-12 lg:py-8 lg:px-40 min-h-[400px] px-12 py-8">
        <h2 className="text-neutralVeryDarkDesaturated_blue font-Fraunces font-fraunces700 text-4xl ">
          {props.title}
        </h2>
        <p className="text-neutralVeryDarkGrayish_blue text-sm">
          {props.paragraph}
        </p>
      </div>
    </div>
  );
}

export default DoubleCards;
