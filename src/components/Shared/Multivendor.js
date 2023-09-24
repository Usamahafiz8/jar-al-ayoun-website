import { useEffect, useState } from "react";
import settings from "../../../utils/settings";

function Multivendor() {
  const { enable_multivendor } = settings();
  const [isMultivendor, setIsMultivendor] = useState(null);
  useEffect(() => {
    if (!isMultivendor) {
      setIsMultivendor(enable_multivendor && parseInt(enable_multivendor));
    }
  }, [enable_multivendor, isMultivendor]);
  return isMultivendor;
}

export default Multivendor;
