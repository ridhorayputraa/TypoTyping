import { useState } from "react";

export type stateData = "start" | "run" | "finish";

function useEngine() {
  const [state, setState] = useState<stateData>("start");
  return { state };
}

export default useEngine;
