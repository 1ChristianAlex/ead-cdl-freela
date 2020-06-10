import React from "react";
import { Link } from "gatsby";

const IndexPage: React.FC = () => (
  <>
    <h1>Index</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <Link to="/modulo-1-1/">Modulo 1 - 1 </Link>
    <Link to="/modulo-1-2/">Modulo 1 - 2 </Link>
    <Link to="/modulo-1-3/">Modulo 1 - 3 </Link>
  </>
);

export default IndexPage;
