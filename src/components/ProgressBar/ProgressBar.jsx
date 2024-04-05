import ProgressBar from "react-bootstrap/ProgressBar";

function ProgressBarWithLabel() {
  const now = 20;
  return (
    <ProgressBar
      variant="danger"
      now={now}
      label={`${now}%`}
      min={0}
      max={100}
    />
  );
}

export default ProgressBarWithLabel;
