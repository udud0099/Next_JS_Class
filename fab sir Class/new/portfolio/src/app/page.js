import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="pt-16 h-1000 bg-amber-100">
        <div className="container">
          <h1>Home Page</h1>
          <Image
            src="/images/sir.jpg" // path from public folder
            alt="My Profile Photo"
            width={300}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
