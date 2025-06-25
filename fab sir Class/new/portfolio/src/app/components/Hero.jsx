import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="pt-16  ">
        <div className="container">
          <div className="hero_box">
            <div className="hero_con">
              <h1> Welcome to my Web Development Portofolio! </h1>
              <p>
                I'm Lily Smith, a passionate web developer based in USA. Here,
                you'll get a glimpse of my journey in the world of web
                development, where creativity meets functionality.
              </p>
              <div>
                <label>Your email</label>
                <div>
                  <input type="email" placeholder="Enter your email" />
                  <button>REQUIRE OFFER</button>
                  <p>
                    Read my <a href=""> Terms and Conditions</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="hero_img">
              <Image src="/images/hero.jpg" alt="ok" width={100} height={100} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
