import React, { useState, useEffect } from "react";

const Foo = () => {
  const [state, setState] = useState(0);

  console.log("render", state);

  useEffect(() => {
    console.log("useEffect Callback", state);
    return () => console.log("cleanUp", state);
  }, [state]);

  return <div onClick={() => setState(state + 1)}>하잉</div>;
};

export default Foo;
