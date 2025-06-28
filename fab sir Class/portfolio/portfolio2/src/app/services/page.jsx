import { TbActivityHeartbeat } from "react-icons/tb";
import { MdOutlineWifiTethering } from "react-icons/md";
import { LuPaintRoller } from "react-icons/lu";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

export default function page() {
  const data_list = [
    {
      title: "Nesciunt Mete",
      content:
        "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
      icon: "TbActivityHeartbeat ",
      path: "60% 40% 30% 70% / 60% 30% 70% 40%",
      color: "#00cdf2",
    },
    {
      title: "Eosle Commodi",
      content:
        "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
      icon: "MdOutlineWifiTethering ",
      path: "44% 56% 37% 63% / 57% 30% 70% 43% ",
      color: "#ff7600",
    },
    {
      title: "teLedo Markt",
      content:
        "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
      icon: "LuPaintRoller",
      path: "672% 28% 37% 63% / 71% 30% 70% 29% 0",
      color: "#00cc9c",
    },
    {
      title: "Asperiores Commodit",
      content:
        "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
      icon: "BsBoundingBoxCircles",
      path: "47% 53% 37% 63% / 14% 30% 70% 86% ",
      color: "#f80000",
    },
    {
      title: "Velit Doloremque",
      content:
        "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
      icon: "FaRegCalendarAlt",
      path: "20% 80% 37% 63% / 32% 78% 22% 68% ",
      color: "#6d06f0",
    },
    {
      title: "Dolori Architecto",
      content:
        "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
      icon: "FaRegMessage",
      path: "20% 80% 17% 83% / 78% 30% 70% 22% ",
      color: "#ff0083",
    },
  ];
  return (
    <>
      <div>
        <div className="page_main_box">
          <h1 className="page_main_h1">Services</h1>
          <span className="page_main_hr"></span>
          <p className="page_main_p">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
      </div>
      <div className="w-64 h-64 bg-blue-400" style={{ borderRadius: "" }}></div>
    </>
  );
}
