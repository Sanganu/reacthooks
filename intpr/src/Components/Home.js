import React from "react";
import {Container} from "react-bootstrap";

const Home = () => {
    return(<Container>
        <h2>REACT Hooks</h2>
        <section className="container mx-auto">
        <h2>Rules of Hook</h2>
        <ul>
      <li>>Don’t call Hooks inside loops, conditions,
      or nested functions.</li>
      <li> Instead, always use Hooks at the top level of your React
      function, before any early returns. By following this rule, you ensure that Hooks
      are called in the same order each time a component renders. That’s what allows
      React to correctly preserve the state of Hooks between multiple useState and
       useEffect calls. </li>
       </ul>
      </section>
    </Container>)
}

export default Home;
