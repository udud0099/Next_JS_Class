"use client";
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdOutlineWifiTethering } from "react-icons/md";
import { LuPaintRoller } from "react-icons/lu";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from "react";

export default function page() {
  const data_list = [
    {
      title: "Nesciunt Mete",
      content:
        "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
      icon: TbActivityHeartbeat,
      path: "60% 40% 30% 70% / 60% 30% 70% 40%",
      color: "#00cdf2",
    },
    {
      title: "Eosle Commodi",
      content:
        "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
      icon: MdOutlineWifiTethering,
      path: "44% 56% 37% 63% / 57% 30% 70% 43% ",
      color: "#ff7600",
    },
    {
      title: "Ledo Markt",
      content:
        "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
      icon: LuPaintRoller,
      path: "48% 52% 17% 83% / 59% 34% 66% 41%",
      color: "#ff6600",
    },
    {
      title: "Asperiores Commodit",
      content:
        "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
      icon: BsBoundingBoxCircles,
      path: "47% 53% 37% 63% / 14% 30% 70% 86% ",
      color: "#f80000",
    },
    {
      title: "Velit Doloremque",
      content:
        "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
      icon: FaRegCalendarAlt,
      path: "20% 80% 37% 63% / 32% 78% 22% 68% ",
      color: "#6d06f0",
    },
    {
      title: "Dolori Architecto",
      content:
        "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
      icon: FaRegMessage,
      path: "20% 80% 17% 83% / 78% 30% 70% 22% ",
      color: "#ff0083",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <>
      <div className="container my-20">
        <div className="page_main_box">
          <h1 className="page_main_h1">Services</h1>
          <span className="page_main_hr"></span>
          <p className="page_main_p">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8  ">
          {data_list.map((data, index) => {
            const Icon = data.icon;
            const isHovered = hoverIndex === index;
            const inColor = data.color;
            return (
              <div
                key={index}
                className="group shadow-xl text-center p-6 md:p-12 lg:p-18 cursor-pointer"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div>
                  <div
                    className={`w-24 h-24 bg-gray-200     flex items-center justify-center mx-auto`}
                    style={{
                      borderRadius: data.path,
                      backgroundColor: isHovered ? inColor : "#e5e7eb",
                    }}
                  >
                    <Icon
                      className={`       text-4xl`}
                      style={{
                        color: isHovered ? "#ffffff" : inColor,
                      }}
                    />
                  </div>
                </div>
                <h1 className=" page_sub_h1 my-4 ">{data.title}</h1>
                <p className="text-secondary text-[12px] md:text-[14px]">
                  {data.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
