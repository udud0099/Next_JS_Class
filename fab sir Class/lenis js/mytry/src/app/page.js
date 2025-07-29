'use client'
import { ReactLenis } from 'lenis/react'; 
import { cancelFrame, frame } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Home() {
    const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data ) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])
  return (
    <>
      <div>
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />

        <h1>home page</h1>
      </div>
    </>
  );
}
