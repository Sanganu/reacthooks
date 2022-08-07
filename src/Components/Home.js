import React from "react";
import {Container} from "react-bootstrap";

const Home = () => {
    return(<Container>
        {/* <h2>REACT Hooks</h2> */}
        <section className="container mx-auto">
        <h2>Rules of Hook</h2>
        <ul>
      <li>Rule #1: Only call hooks from React function components</li>
      <li> Rule #2: Only call Hooks at the top level of your function components. </li>
      <li>Rule #3:  Do not call them within other functions, conditionals, or loop blocks.  </li>
        
       </ul>
      </section>
    </Container>)
}

export default Home;
