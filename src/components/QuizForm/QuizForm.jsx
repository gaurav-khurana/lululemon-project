import "./QuizForm.scss";
import Form from "react-bootstrap/Form";

function QuizForm() {
  return (
    <>
      <div>
        <Form>
          <div key={`default-checkbox`} className="mb-3">
            <Form.Check // prettier-ignore
              type="checkbox"
              id={`default-checkbox`}
              label={`Align Pants`}
            />
          </div>
          <div key={`default-checkbox`} className="mb-3">
            <Form.Check // prettier-ignore
              type="checkbox"
              id={`default-checkbox`}
              label={`Align T-shirt`}
            />
          </div>
          <div key={`default-checkbox`} className="mb-3">
            <Form.Check // prettier-ignore
              type="checkbox"
              id={`default-checkbox`}
              label={`Align Shorts`}
            />
          </div>
          <div key={`default-checkbox`} className="mb-3">
            <Form.Check // prettier-ignore
              type="checkbox"
              id={`default-checkbox`}
              label={`Align Skirt`}
            />
          </div>
        </Form>
      </div>
    </>
  );
}

export default QuizForm;
