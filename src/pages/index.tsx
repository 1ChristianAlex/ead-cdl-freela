import React from "react";
import { Link } from "gatsby";

const IndexPage: React.FC = () => (
  <>
    <h1>Index</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <Link to="/modulo-1/">Modulo 1</Link>
  </>
);

export default IndexPage;
