import Hero from "./components/Hero";
import MyProject from "./components/MyProject";
import MyResume from "./components/MyResume";
import MySkill from "./components/MySkill";
import OurClient from "./components/OurClient";
import Testimonials from "./components/Testimonials";

export default function page() {
  return (
    <>
      <div className="container">
        <Hero />
        <OurClient />
        <MySkill />
        <MyProject />
        <MyResume />
        <Testimonials />
      </div>
    </>
  );
}
