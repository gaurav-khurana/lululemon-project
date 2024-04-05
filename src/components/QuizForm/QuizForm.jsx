import { useState } from "react";
import "./QuizForm.scss";
import Form from "react-bootstrap/Form";

function QuizForm({ formData1, formData2, formData3, formData4, formData5 }) {
  const [activeProps, setActiveProps] = useState("");

  if (formData1 !== undefined && activeProps !== formData1) {
    setActiveProps(formData1);
    return;
  }
  if (formData2 !== undefined && activeProps !== formData2) {
    setActiveProps(formData2);
    return;
  }
  if (formData3 !== undefined && activeProps !== formData3) {
    setActiveProps(formData3);
    return;
  }
  if (formData4 !== undefined && activeProps !== formData4) {
    setActiveProps(formData4);
    return;
  }
  if (formData5 !== undefined && activeProps !== formData5) {
    setActiveProps(formData5);
    return;
  }

  return (
    <>
      <div>
        <Form>
          <div key={`default-${activeProps.option1}`} className="mb-3">
            <Form.Check // prettier-ignore
              type="checkbox"
              id={`default-${activeProps.option1}`}
              label={`${activeProps.option1}`}
            />
          </div>

          <div key={`default-${activeProps.option2}`} className="mb-3">
            <Form.Check // prettier-ignore
              type="checkbox"
              id={`default-${activeProps.option2}`}
              label={`${activeProps.option2}`}
            />
          </div>

          <div key={`default-${activeProps.option3}`} className="mb-3">
            <Form.Check // prettier-ignore
              type="checkbox"
              id={`default-${activeProps.option3}`}
              label={`${activeProps.option3}`}
            />
          </div>

          <div key={`default-${activeProps.option4}`} className="mb-3">
            <Form.Check // prettier-ignore
              type="checkbox"
              id={`default-${activeProps.option4}`}
              label={`${activeProps.option4}`}
            />
          </div>
        </Form>
      </div>
    </>
  );
}

export default QuizForm;
