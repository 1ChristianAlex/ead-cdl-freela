import React from "react";
import { Link } from "gatsby";

const IndexPage: React.FC = () => (
  <>
    <h1>Index</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <div>
      <p>
        <Link to="/modulo-1-1/">Modulo 1 - 1</Link>
      </p>
      <p>
        <Link to="/modulo-1-2/">Modulo 1 - 2</Link>
      </p>
      <p>
        <Link to="/modulo-1-3/">Modulo 1 - 3</Link>
      </p>
      <p>
        <Link to="/modulo-1-4/">Modulo 1 - 4</Link>
      </p>
      <p>
        <Link to="/modulo-1-5/">Modulo 1 - 5</Link>
      </p>
      <p>
        <Link to="/modulo-2-1/">Modulo 2 - 1</Link>
      </p>
      <p>
        <Link to="/modulo-2-2/">Modulo 2 - 2</Link>
      </p>
    </div>
  </>
);

export default IndexPage;
