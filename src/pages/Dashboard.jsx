import Layout from "../components/Layout";
import Card from "../components/Card";
import activities from "../data/activities";

export default function Dashboard() {
  return (
    <Layout>
      <div className="cards">
        <Card title="Total Courses" value="5" />
        <Card title="New Notifications" value="3" />
        <Card title="Average Grade" value="82%" />
      </div>

      <div className="activity">
        <h3>Recent Activities</h3>
        <ul>
          {activities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
