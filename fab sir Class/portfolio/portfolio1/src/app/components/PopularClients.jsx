import Image from "next/image";

export default function PopularClients() {
  return (
    <>
      <div className="py-24 px-8" id="Clients">
        <h1 className="text-center text-[16px] font-bold mb-8 text-primary">
          Popular Clients
        </h1>
        <h1 className="main_heading_h1   mb-8  pb-4 text-center">
          Trusted by over 10,000+ clients
        </h1>
        <div className="flex flex-wrap justify-center align-middle gap-x-8  ">
          <Image
            src="/images/company/logo-coinbase.svg"
            width={160}
            height={160}
            alt="client img"
            className="grayscale hover:grayscale-0 transition cursor-pointer"
          />
          <Image
            src="/images/company/logo-spotify.svg"
            width={160}
            height={160}
            alt="client img"
            className="grayscale hover:grayscale-0 transition cursor-pointer"
          />
          <Image
            src="/images/company/logo-pinterest.svg"
            width={160}
            height={160}
            alt="client img"
            className="grayscale hover:grayscale-0 transition cursor-pointer"
          />
          <Image
            src="/images/company/logo-google.svg"
            width={160}
            height={160}
            alt="client img"
            className="grayscale hover:grayscale-0 transition cursor-pointer"
          />
          <Image
            src="/images/company/logo-amazon.svg"
            width={160}
            height={160}
            alt="client img"
            className="grayscale hover:grayscale-0 transition cursor-pointer"
          />
          <Image
            src="/images/company/logo-netflix.svg"
            width={160}
            height={160}
            alt="client img"
            className="grayscale hover:grayscale-0 transition cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
