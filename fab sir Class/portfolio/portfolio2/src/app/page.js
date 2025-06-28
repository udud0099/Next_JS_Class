import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="relative h-[90vh] w-full">
        {/* Background Image */}
        <Image
          src="/images/hero-bg.jpg"
          alt="hero img"
          fill
          className="object-cover"
          priority
        />

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-6xl font-bold text-primary">Kelly Adams</h1>
          <p className="my-6 mb-4 text-2xl text-primary">
            I’m a professional illustrator from San Francisco
          </p>
          <Link href="/about">
            <button className="px-6 py-2 bg-action hover:bg-action_hover text-white rounded-full cursor-pointer">
              About Me
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
