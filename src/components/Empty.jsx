import { Link } from 'react-router-dom'
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Empty = () => {
  return (
    <>
      <div className="container text-center mt-5">
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    </>
  );
};

export default Empty;
