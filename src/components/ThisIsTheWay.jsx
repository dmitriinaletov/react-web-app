// function ThisIsTheWay (props) {
//   return (
//     <li>
//       <p>
//         <strong>{props.title}</strong> {props.description}
//       </p>
//     </li>
//   )
// }

//alternativní způsob předaní propsů
export default function ThisIsTheWay({ title, description }) {
  return (
    <li>
      <p>
        <strong>{title}</strong> {description}
      </p>
    </li>
  );
}
