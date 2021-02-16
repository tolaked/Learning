import React, { useState } from "react";

const HigherOrderComp = (OriginalComp) => {
 
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
      setCount((prevCount) => prevCount + 1);
    };
    return <OriginalComp handleCount={handleCount} count={count}/>;
  };
  return NewComponent;
};

export default HigherOrderComp;
