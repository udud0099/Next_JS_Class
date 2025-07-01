export default function Home() {
  return (
    <>
      <div className="relative z-0">
        {/* Background Image */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-no-repeat bg-center bg-fixed"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(252,186,3,0.85), rgba(252,3,3,.85)), url('/images/bg.jpg')",
          }}
        ></div>

        {/* Your content below */}
        <section className="container bg-white p-4 md:p-6 lg-p-8 my-4 rounded-2xl overflow-hidden">
          <h1 className="text-4xl">Page Title</h1>
          <p className="mt-4">Scroll down to see background fixed</p>
          <div className="h-[2000px]"></div>
        </section>
      </div>
    </>
  );
}
