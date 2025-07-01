import Achiment from "./containers/Achiment";
import Featur from "./containers/Featur";
import Hero from "./containers/Hero";
import Navbar from "./containers/Navbar";
import Proceces from "./containers/Proceces";

export default function Home() {
  return (
    <>
      <div className="relative z-0">
        {/* Background Image */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-no-repeat bg-center bg-fixed"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(252,186,3,0.85), rgba(252,3,3,.85)), url('/images/bg.jpg')",
          }}
        ></div>
        {/* Your content below */}
        <section className="mx-auto w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%]    my-4 rounded-2xl overflow-hidden shadow-2xl">
          <div className="w-full relative    ">
            <Navbar />
            <Hero />
            <Featur />
            <Achiment />
            <Proceces />
          </div>
        </section>
      </div>
    </>
  );
}
