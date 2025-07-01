export default function Hero() {
  return (
    <>
      <div
        id="Home"
        className="w-full h-[30vh] md:h-[50vh] lg:h-[70vh] bg-action overflow-hidden px-4 md:px-8 lg:px-16 xl:px-32 flex items-center justify-center flex-col text-center"
        style={{
          background: 'url("/images/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          // minHeight: "70vh",
        }}
      >
        <h1 className="font-light text-[clamp(24px,4vw,48px)] text-primary">
          Hello, world!
        </h1>
        <p className="font-light text-primary text-[clamp(14px,2.5vw,18px)]">
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus.
        </p>
      </div>
    </>
  );
}
