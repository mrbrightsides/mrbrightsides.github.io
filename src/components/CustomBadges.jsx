import React from 'react';

const CustomBadges = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <img
        src="https://img.shields.io/badge/SmartFaith-Founder-blue"
        alt="SmartFaith Founder Badge"
        className="h-6"
      />
      <img
        src="https://img.shields.io/badge/g.dev%2Fkhudri-Google-lightgrey?logo=google"
        alt="g.dev/khudri Badge"
        className="h-6"
      />
      <img
        src="https://img.shields.io/badge/Web3-Educator-darkgreen?logo=ethereum"
        alt="Web3 Educator Badge"
        className="h-6"
      />
    </div>
  );
};

export default CustomBadges;
