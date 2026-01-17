"use client";

import React, { ReactNode, useEffect } from "react";
import { lenis } from "../lib/lenis";

const LenisProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return <div>{children}</div>;
};

export default LenisProvider;
