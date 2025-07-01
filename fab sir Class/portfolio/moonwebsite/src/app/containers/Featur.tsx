import { SiTicktick } from "react-icons/si";

export default function Featur() {
  return (
    <>
      <div id="Profile" className="container bg-white">
        <h1 className="main_h1">
          The easiest wayto build{" "}
          <span className="main_h1_spna">websites online</span>
        </h1>
        <p className="main_p">
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta
          gravida at eget metus.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8   mb-8">
          <div className=" text-center   py-4 px-2 rounded-xl bg-white/30 shadow">
            <SiTicktick className="text-6xl   text-primary mx-auto " />
            <h1 className="sub_h1  ">Simple and Clean</h1>
            <p className="sub_p">
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
            <a href="#" className="text-action hover:text-action_hover">
              View Details
            </a>
          </div>
          <div className=" text-center   py-4 px-2 rounded-xl bg-white/30 shadow">
            <SiTicktick className="text-6xl   text-primary mx-auto " />
            <h1 className="sub_h1  ">Easy to Customize</h1>
            <p className="sub_p">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Vestibulum id ligula porta felis.
            </p>
            <a href="#" className="text-action hover:text-action_hover">
              View Details
            </a>
          </div>
          <div className=" text-center   py-4 px-2 rounded-xl bg-white/30 shadow">
            <SiTicktick className="text-6xl   text-primary mx-auto " />
            <h1 className="sub_h1 ">Fully Responsive</h1>
            <p className="sub_p">
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper.
            </p>
            <a href="#" className="text-action hover:text-action_hover">
              View Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
