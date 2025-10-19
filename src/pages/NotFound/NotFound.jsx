// ./pages/NotFound/NotFound.jsx
import { Link } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
