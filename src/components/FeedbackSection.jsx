import Button from "./Button/Button";

import { useState } from "react";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");
  const [hasError, setHasError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  };
  // const handleReasonChange = (event) => {
  //   setReason(event.target.value);
  // }; как альтернатива мы можем прописать данный синтаксис инлайн, смотри ниже

  return (
    <section>
      <h3>Feedback</h3>

      <form>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          onChange={handleNameChange}
          style={{
            border: hasError ? "1px solid red" : null,
          }}
        />

        <label htmlFor="reason">Reason</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(event) => setReason(event.target.value)} // альтернативный способ
        >
          <option value="error">Error</option>
          <option value="help">Help</option>
          <option value="suggest">Suggestion</option>
        </select>

        <Button disabled={hasError} isActive={!hasError}>
          Send
        </Button>
      </form>
    </section>
  );
}
