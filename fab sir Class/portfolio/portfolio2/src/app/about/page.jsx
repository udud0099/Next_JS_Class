import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import ReactMultiCarousel from "../components/ReactMultiCarousel";

export default function page() {
  const skills = [
    {
      subject: "HTML",
      per: 100,
    },
    {
      subject: "CSS",
      per: 90,
    },
    {
      subject: "JavaScript75",
      per: 75,
    },
    {
      subject: "PHP",
      per: 80,
    },
    {
      subject: "WordPress/CMS",
      per: 90,
    },
    {
      subject: "Photoshop",
      per: 55,
    },
  ];
  return (
    <>
      <div className="container my-20">
        <div className="page_main_box">
          <h1 className="page_main_h1">About</h1>
          <span className="page_main_hr"></span>
          <p className="page_main_p">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className=" flex flex-wrap flex-col lg:flex-row gap-8 ">
          <div className="flex-[.3]">
            <Image
              src="/images/profile-img.jpg"
              alt="profile img"
              width={1300}
              height={1300}
            />
          </div>
          <div className="flex-[.7]">
            <div>
              <h1 className="page_sub_h1 mb-4">
                UI/UX Designer & Web Developer.
              </h1>
              <p className="page_main_p italic  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex flex-col lg:flex-row justify-between gap-4 my-8">
                <div className="flex flex-col gap-4 flex-nowrap">
                  <div className="flex flex-nowrap items-center">
                    <MdKeyboardArrowRight className="text-action text-2xl" />{" "}
                    <span className="text-primary font-semibold mr-2">
                      Birthday:{" "}
                    </span>
                    <span className="text-secondary"> 1 May 1995</span>
                  </div>
                  <div className="flex flex-nowrap items-center">
                    <MdKeyboardArrowRight className="text-action text-2xl" />{" "}
                    <span className="text-primary font-semibold mr-2">
                      Website:{" "}
                    </span>
                    <span className="text-secondary"> www.example.com</span>
                  </div>
                  <div className="flex flex-nowrap items-center">
                    <MdKeyboardArrowRight className="text-action text-2xl" />{" "}
                    <span className="text-primary font-semibold mr-2">
                      Phone:{" "}
                    </span>
                    <span className="text-secondary"> +123 456 7890</span>
                  </div>
                  <div className="flex flex-nowrap items-center">
                    <MdKeyboardArrowRight className="text-action text-2xl" />{" "}
                    <span className="text-primary font-semibold mr-2">
                      City:{" "}
                    </span>
                    <span className="text-secondary"> New York, USA</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 flex-nowrap">
                  <div className="flex flex-nowrap items-center">
                    <MdKeyboardArrowRight className="text-action text-2xl" />{" "}
                    <span className="text-primary font-semibold mr-2">
                      Age:{" "}
                    </span>
                    <span className="text-secondary"> 30</span>
                  </div>
                  <div className="flex flex-nowrap items-center">
                    <MdKeyboardArrowRight className="text-action text-2xl" />{" "}
                    <span className="text-primary font-semibold mr-2">
                      Degree:{" "}
                    </span>
                    <span className="text-secondary"> Master</span>
                  </div>
                  <div className="flex flex-nowrap items-center">
                    <MdKeyboardArrowRight className="text-action text-2xl" />{" "}
                    <span className="text-primary font-semibold mr-2">
                      Email:{" "}
                    </span>
                    <span className="text-secondary"> email@example.com</span>
                  </div>
                  <div className="flex flex-nowrap items-center">
                    <MdKeyboardArrowRight className="text-action text-2xl" />{" "}
                    <span className="text-primary font-semibold mr-2">
                      Freelance:{" "}
                    </span>
                    <span className="text-secondary"> Available</span>
                  </div>
                </div>
                <div></div>
              </div>
              <p className="page_main_p">
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque.
              </p>
            </div>
          </div>
        </div>
        <div className="page_main_box mt-20">
          <h1 className="page_main_h1">Skills</h1>
          <span className="page_main_hr"></span>
          <p className="page_main_p">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-x-8 gap-y-4 my-8">
            {skills.map((data, index) => (
              <div className="w-full" key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    {data.subject}
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {data.per}%
                  </span>
                </div>
                <div className="w-full bg-gray-200   h-3">
                  <div
                    className="bg-teal-500 h-3  "
                    style={{ width: `${data.per}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="page_main_box mt-20">
          <h1 className="page_main_h1">Facts</h1>
          <span className="page_main_hr"></span>
          <p className="page_main_p">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8 md:my-16 gap-8 md:gap-16 lg:gap-32">
            <div className="flex flex-col flex-nowrap gap-6   items-center">
              <h1 className="page_main_h1 text-6xl">232</h1>
              <span className="page_main_hr"></span>
              <p className="page_main_p">Clients</p>
            </div>
            <div className="flex flex-col flex-nowrap gap-6  items-center">
              <h1 className="page_main_h1 text-6xl">521</h1>
              <span className="page_main_hr"></span>
              <p className="page_main_p">Projects</p>
            </div>
            <div className="flex flex-col flex-nowrap gap-6   items-center">
              <h1 className="page_main_h1 text-6xl">1453</h1>
              <span className="page_main_hr"></span>
              <p className="page_main_p">Hours of Support</p>
            </div>
            <div className="flex flex-col flex-nowrap gap-6 items-center">
              <h1 className="page_main_h1 text-6xl">32</h1>
              <span className="page_main_hr"></span>
              <p className="page_main_p">Workers</p>
            </div>
          </div>
        </div>
        <div className="page_main_box mt-20">
          <h1 className="page_main_h1">Testimonials</h1>
          <span className="page_main_hr"></span>
          <p className="page_main_p">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
          <div className="container mx-auto py-12">
            <ReactMultiCarousel />
          </div>
        </div>
      </div>
    </>
  );
}
