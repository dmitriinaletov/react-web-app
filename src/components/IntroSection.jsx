// import React from "react";

export default function IntroSaction() {
  return (
    <section>
      <h1 className="centered">Title</h1>
      <h3 className="centered" style={{ color: "#555" }}>
        Subscription of title
      </h3>
    </section>
  );
}

// здесь ниже синтаксис, который вряд ли встретится при программировании,
// этот синтаксис, скорее, чтобы понять, что происходит внутри реакта
// это повторение кода выше
// export default function IntroSaction() {
//   return React.createElement("section", null, [
//     React.createElement("h1", { className: "centered" }, "Title"),
//     React.createElement(
//       "h3",
//       { className: "centered", style: { color: "#555" } },
//       "Subscription of title"
//     ),
//   ]);
// }
