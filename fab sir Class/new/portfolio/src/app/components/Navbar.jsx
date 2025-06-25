export default function Navbar() {
  return (
    <>
      <div className="fixed   bg-white/70 backdrop-blur-2xl w-full z-50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <h1 className="font-bold ">Navbar</h1>
            <ul className="list-none flex gap-4">
              <li>home</li>
              <li>about</li>
              <li>contact</li>
            </ul>
            <div className="flex gap-4">
              <button className="py-2 px-6 hover:bg-gray-200 rounded-xl uppercase ">
                sign up
              </button>
              <button className="py-2 px-6 bg-black text-white rounded-xl uppercase">
                sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
