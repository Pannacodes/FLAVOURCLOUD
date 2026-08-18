import "./PageNotFound.css";

const NotFound = () => {
  return (
    <div className="page-not-found">
      <div className="page-not-found-box">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
      </div>
      <p>Let's get you back on track:</p>
      <a href="/">← Back to Home</a>
      <a href="/recipes">View All Recipes →</a>
    </div>
  );
};

export default NotFound;
