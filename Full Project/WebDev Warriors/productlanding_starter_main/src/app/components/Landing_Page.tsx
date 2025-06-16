import React from "react";

interface Props {
  heading: string;
  content: string;
  icon: JSX.Element; // 👈 this allows JSX components like <LuMousePointerClick />
}

const Landing_Page: React.FC<Props> = ({ heading, content, icon }) => {
  return (
    <section className="text-center p-6 border rounded">
      <div className="mb-4 text-4xl text-primary">{icon}</div>
      <h2 className="text-2xl font-bold mb-2">{heading}</h2>
      <p className="text-gray-600">{content}</p>
    </section>
  );
};

export default Landing_Page;
