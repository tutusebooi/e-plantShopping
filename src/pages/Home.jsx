import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <p>We bring nature closer to your home with beautiful houseplants.</p>
      <Link to="/plants">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
