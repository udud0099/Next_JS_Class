import CommonButton from "./CommonButton";

export default function MyProject() {
  const MySkilldata = [
    {
      title: "Mobile App Development",
      des: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
      link: "chatgpt.com",
    },
    {
      title: "Landing Page Development",
      des: "Promotional landing page for a fitness website Summer Campaign. Form development included.",
      link: "chatgpt.com",
    },
    {
      title: "E-commerce Development",
      des: "Ecommerce website offering access to the latest and greatest gadgets and accessories.",
      link: "chatgpt.com",
    },
    {
      title: "Portfolio Website Design",
      des: "Personal portfolio site to showcase design and development projects using modern UI trends.",
      link: "chatgpt.com",
    },
    {
      title: "Admin Dashboard",
      des: "Interactive dashboard with analytics and chart visualizations for internal business tools.",
      link: "chatgpt.com",
    },
    {
      title: "Blog Platform Development",
      des: "Minimal blog system built with markdown and custom CMS support for writers and developers.",
      link: "chatgpt.com",
    },
    {
      title: "Travel Booking Website",
      des: "Platform for booking flights and hotels with filter search and real-time pricing data.",
      link: "chatgpt.com",
    },
    {
      title: "Event Registration App",
      des: "Event app with RSVP form, event calendar, and QR code check-in functionality.",
      link: "chatgpt.com",
    },
  ];

  return (
    <>
      <div className="py-24 px-8 text-center" id="Projects">
        <h1 className="  text-[16px] font-bold   text-primary">My Projects</h1>
        <h1 className="main_heading_h1 pt-2  pb-4">What I did</h1>
        <p className="main_text_p w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I'm here to turn your digital dreams
          into reality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MySkilldata.map((myInfo, index) => (
            <div key={index}>
              <div className="text-left px-4 my-12">
                <div>
                  <img
                    src={`/images/projects/${index + 1}.svg`}
                    alt={`${index + 1}_img`}
                    width={1000}
                    height={1000}
                  />
                </div>
                <h1 className="text-[20px] font-bold text-primary my-4">
                  {myInfo.title}
                </h1>
                <p className="common_text">{myInfo.des}</p>
                <CommonButton
                  common_btn_context="see details"
                  common_btn_link={myInfo.link}
                  customStle="text-[12px] mt-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
