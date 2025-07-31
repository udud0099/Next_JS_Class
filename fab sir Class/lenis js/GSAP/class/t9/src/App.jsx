// import './App.css'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function App() {
  useGSAP(() => {
    // gsap code here...
    gsap.to(".box", { x: 360, duration: 4 }); // <-- automatically reverted
  }); // <-- scope is for selector text (optional)
  return (
    <main>
      <div className="box"></div>
    </main>
  );
}

export default App;
