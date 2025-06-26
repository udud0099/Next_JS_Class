import Image from "next/image";
import CommonButton from "./CommonButton";

export default function Hero() {
  return (
    <>
      <div className="pt-16  ">
        <div>
          <div className="hero_box flex gap-x-24 gap-y-8 justify-between flex-col lg:flex-row items-center p-8">
            <div className="hero_con flex-1 lg:flex-[0.3] xl:flex-1  order-2 lg:order-1  ">
              <h1 className="main_heading_h1">
                Welcome to my Web Development Portofolio!
              </h1>
              <p className="main_text_p my-6">
                I'm Lily Smith, a passionate web developer based in USA. Here,
                you'll get a glimpse of my journey in the world of web
                development, where creativity meets functionality.
              </p>
              <div>
                <label className="text-[14px]">Your email</label>
                <div className="my-2 flex gap-4 flex-wrap md:flex-nowrap">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 py-2 px-4 border border-solid border-gray-200 rounded-md"
                  />
                  <CommonButton
                    common_btn_context="REQUIRE OFFER"
                    customStle="w-full md:w-auto"
                  />
                </div>
                <p className="text-secondary text-[14px]">
                  Read my{" "}
                  <a href="" className="underline">
                    {" "}
                    Terms and Conditions
                  </a>
                </p>
              </div>
            </div>
            <div className="hero_img flex-1 lg:flex-[0.7] xl:flex-1  order-1 lg:order-2">
              <Image
                src="/images/hero.jpg"
                alt="ok"
                width={700}
                height={700}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
