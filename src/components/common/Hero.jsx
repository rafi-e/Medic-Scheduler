import HeroImg from "/category/doctors.jpg";
import { Button } from "../shadcn/ui/button";

export default function Hero() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                src={HeroImg}
                alt="Hero Image"
                width={800}
                height={800}
                className="absolute inset-0 h-full rounded-3xl w-full object-cover object-top"
              />
            </div>
            <div className="lg:py-24">
              <h2 className=" text-4xl font-bold sm:text-4xl">
                Find & Book <span className="text-[#0D7DFF]">Appointment </span>
                with your Fav <span className="text-[#0D7DFF]">Doctors</span>
              </h2>
              <p className="mt-4 text-gray-500 text-justify">
              Our mission is to provide high-quality medical care to our
                  patients. We are committed to delivering exceptional service
                  and ensuring that our patients receive the best possible
                  treatment.
              </p>

              <Button className="mt-10">Explore Now</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
