import React from "react";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";

interface Props {
  math: string;
}

const MathDisplay: React.FC<Props> = ({ math }): JSX.Element => {
  return <TeX math={math} />;
};

export { MathDisplay };
