"use client";

import dynamic from "next/dynamic";
import "plyr-react/plyr.css";
import type { PlyrProps } from "plyr-react";

const Plyr = dynamic(() => import("plyr-react").then((mod) => mod.default), {
  ssr: false,
});

const PlyrWrapper = (props: PlyrProps) => {
  return <Plyr {...props} />;
};

export default PlyrWrapper;
