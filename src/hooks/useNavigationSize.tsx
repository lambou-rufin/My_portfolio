import { useEffect, useState } from "react";
import { Size } from "../utils/model";

export const useNavigationSize = () => {
  const initialSize: Size = { height: undefined, width: undefined };
  const [size, setSize] = useState(initialSize);
  useEffect(() => {
    function handleSize() {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  return (size.width || 0) >= 800
    ? 7
    : (size.width || 0) > 700
    ? 6
    : (size.width || 0) > 660
    ? 5
    : (size.width || 0) > 560
    ? 4
    : (size.width || 0) > 420
    ? 3
    : 2;
};
