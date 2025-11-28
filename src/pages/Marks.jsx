import Layout from "../components/Layout";
import marks from "../data/marks";

export default function Marks() {
  return (
    <Layout>
      <h2>Marks</h2>
      <ul>
        {marks.map((m, i) => (
          <li key={i}>{m.course}: {m.grade}</li>
        ))}
      </ul>
    </Layout>
  );
}
