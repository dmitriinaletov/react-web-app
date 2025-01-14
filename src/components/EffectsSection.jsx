import { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Open information</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
          reiciendis ratione iste animi vel? Quidem consectetur quam voluptate
          doloremque? Possimus, quasi eligendi iusto consequatur quae
          voluptatibus dolor debitis suscipit delectus?
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>
    </section>
  );
}
