import { useState } from "react";
import Child from "../Child";

const Parent = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const clickCallBack = () => {
    setNumberOfClicks(numberOfClicks + 1);
  };

  return (
    <section>
      {numberOfClicks} number of clicks made on Child Button
      <Child clickCallBack={clickCallBack} />
    </section>
  );
};

export default Parent;
