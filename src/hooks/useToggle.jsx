import { useState } from "react";

function useToggle(initialValue = true) {
  const [toggled, setToggle] = useState(initialValue);
  return { toggled, setToggle };
}

export default useToggle;