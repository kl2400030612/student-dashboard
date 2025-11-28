import Layout from "../components/Layout";
import courses from "../data/courses";

export default function Courses() {
  return (
    <Layout>
      <h2>Courses</h2>
      <ul>
        {courses.map((c, i) => (
          <li key={i}>{c.name} – {c.instructor}</li>
        ))}
      </ul>
    </Layout>
  );
}
