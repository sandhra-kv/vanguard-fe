import React, { useState } from "react";

import { ReactComponent as Copy } from "../assets/copy.svg";

const CopyButton = ({ content }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator?.clipboard?.writeText?.(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button className="" onClick={handleCopy}>
      <Copy className={`transition-all duration-150 ease-in-out ${copied ? 'text-[#505BC5]' : 'text-[#98A2B3]'}`} />
    </button>
  );
};

export default CopyButton;
