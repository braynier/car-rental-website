import Brands from "./Brands";
import CarSlider from "./CarSlider";

function Cars() {
  return (
    <section className="flex h-screen items-center" id="cars">
      <div className="container mx-auto">
        <Brands />
        <CarSlider />
      </div>
    </section>
  );
}

export default Cars;
