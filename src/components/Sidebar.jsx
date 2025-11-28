import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/marks">Marks</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </aside>
  );
}
