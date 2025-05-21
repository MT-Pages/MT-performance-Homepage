"use client";

import dynamic from "next/dynamic";
import "plyr-react/plyr.css";

const Plyr = dynamic(() => import("plyr-react"), {
  ssr: false,
});

const PlyrWrapper = (props: any) => {
  return <Plyr {...props} />;
};

export default PlyrWrapper;
