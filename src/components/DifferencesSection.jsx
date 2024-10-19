import Button from "./Button/Button";
import { differences } from "../data";
import { useState } from "react";

export default function DifferencesSection() {
  const [contentType, setContentType] = useState(null);

  const handleClick = (type) => {
    setContentType(type);
  };
  return (
    <section>
      <h3>
        <p>Text</p>
        <Button
          isActive={contentType === "way"}
          onClick={() => handleClick("way")}
        >
          Button 1
        </Button>
        <Button
          isActive={contentType === "easy"}
          onClick={() => handleClick("easy")}
        >
          Button 2
        </Button>
        <Button
          isActive={contentType === "hard"}
          onClick={() => handleClick("hard")}
        >
          Button 2
        </Button>

        {!contentType && <p>Press the button</p>}
        {contentType && <p>{differences[contentType]}</p>}
      </h3>
    </section>
  );
}
