import ClientTestimonials from "./ClientTestimonials";

function Testimonials() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-32 bg-neutralWhite py-20 md:py-12">
      <h2 className="font-Fraunces text-3xl font-fraunces900 text-neutralVeryDarkDesaturated_blue">
        Client Testmonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <ClientTestimonials
          clientImg="./image-emily.jpg"
          paragraph="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          clientName="Emily R."
          clientOcupation="Marketing Director"
        />
        <ClientTestimonials
          clientImg="./image-thomas.jpg"
          paragraph="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
          clientName="Thomas S."
          clientOcupation="Chief Operating Officer"
        />
        <ClientTestimonials
          clientImg="./image-jennie.jpg"
          paragraph="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          clientName="Jennie F."
          clientOcupation="Business Owner"
        />
      </div>
    </section>
  );
}

export default Testimonials;
