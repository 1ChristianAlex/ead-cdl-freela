import React from "react";
import { Link } from "gatsby";

// eslint-disable-next-line import/extensions

const IndexPage: React.FC = () => (
  <>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/modulo-1/">module</Link>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </>
);

export default IndexPage;
