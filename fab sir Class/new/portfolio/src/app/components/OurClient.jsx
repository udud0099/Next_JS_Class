import Image from "next/image";

export default function OurClient() {
  return (
    <>
      <div className="py-24 px-8">
        <h1 className="text-center text-[16px] font-bold mb-8 text-primary">
          My awesome clients
        </h1>
        <div className="flex flex-wrap justify-center align-middle gap-x-8  ">
          <Image
            src="/images/company/logo-coinbase.svg"
            width={160}
            height={160}
          />
          <Image
            src="/images/company/logo-spotify.svg"
            width={160}
            height={160}
          />
          <Image
            src="/images/company/logo-pinterest.svg"
            width={160}
            height={160}
          />
          <Image
            src="/images/company/logo-google.svg"
            width={160}
            height={160}
          />
          <Image
            src="/images/company/logo-amazon.svg"
            width={160}
            height={160}
          />
          <Image
            src="/images/company/logo-netflix.svg"
            width={160}
            height={160}
          />
        </div>
      </div>
    </>
  );
}
