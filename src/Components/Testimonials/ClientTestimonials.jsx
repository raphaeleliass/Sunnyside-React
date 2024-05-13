function ClientTestimonials(props) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:p-16 md:p-6 p-12">
      <img src={props.clientImg} alt="" className="size-28 rounded-full" />
      <p className="text-center text-neutralVeryDarkGrayish_blue">
        {props.paragraph}
      </p>
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="font-Fraunces text-xl font-fraunces700">
          {props.clientName}
        </h2>
        <p className="text-neutralVeryDarkGrayish_blue text-sm">{props.clientOcupation}</p>
      </div>
    </div>
  );
}

export default ClientTestimonials;
