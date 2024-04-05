import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function ProgressBarWithLabel({
  activeValue1,
  activeValue2,
  activeValue3,
  activeValue4,
  activeValue5,
}) {
  const [activeValue, setActiveValue] = useState(0);

  if (activeValue1 !== undefined && activeValue !== activeValue1) {
    setActiveValue(activeValue1);
    return;
  }
  if (activeValue2 !== undefined && activeValue !== activeValue2) {
    setActiveValue(activeValue2);
    return;
  }
  if (activeValue3 !== undefined && activeValue !== activeValue3) {
    setActiveValue(activeValue3);
    return;
  }
  if (activeValue4 !== undefined && activeValue !== activeValue4) {
    setActiveValue(activeValue4);
    return;
  }
  if (activeValue5 !== undefined && activeValue !== activeValue5) {
    setActiveValue(activeValue5);
    return;
  }
  return (
    <ProgressBar
      variant="danger"
      now={activeValue}
      label={`${activeValue}%`}
      min={0}
      max={100}
    />
  );
}

export default ProgressBarWithLabel;
