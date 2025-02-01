import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section className="tabs-section">
      <Button
        isActive={active === "feedback"}
        onClick={() => onChange("feedback")}
      >
        Feedback
      </Button>
      <Button isActive={active === "effect"} onClick={() => onChange("effect")}>
        Effects
      </Button>
    </section>
  );
}

// export default function TabsSection({ active, onChange }) {
//   return (
//     <section
//       style={{
//         marginBottom: "1rem",
//         display: "flex",
//         alignItems: "center",
//         gap: "0.5rem",
//       }}
//     >
//       <Button
//         isActive={active === "feedback"}
//         onClick={() => onChange("feedback")}
//       >
//         Feedback
//       </Button>
//       <Button isActive={active === "effect"} onClick={() => onChange("effect")}>
//         Effects
//       </Button>
//     </section>
//   );
// }
