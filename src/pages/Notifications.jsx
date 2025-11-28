import Layout from "../components/Layout";
import notifications from "../data/notifications";

export default function Notifications() {
  return (
    <Layout>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </Layout>
  );
}
