import ThisIsTheWay from "./ThisIsTheWay";
import { ways } from "../data";

export default function TeachingSaction() {
  return (
    <section>
      <h3>This is the way</h3>
      <ul>
        {ways.map((way, index) => (
          <ThisIsTheWay key={index} {...way} />
        ))}
      </ul>
    </section>
  );
}
