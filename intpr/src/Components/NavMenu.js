 import React,{useContext}  from "react";
 import {Navbar,Nav} from "react-bootstrap";
 import {ContextNavState} from "../App.js";
 
 
 const NavMenu = () =>{
  const {setCurrentHook}    = useContext(ContextNavState);
 return(<Navbar bg="secondary h-100 d-block" variant="dark">
 
    <Navbar.Brand href="#home">Hooks</Navbar.Brand>
    <Nav className="d-block text-start">
      <Nav.Link className="hlink" onClick={()=> setCurrentHook("Home")}>Home</Nav.Link>
      <Nav.Link  className="hlink" onClick={()=> setCurrentHook("useState")}>useState</Nav.Link>
      <Nav.Link  className="hlink" onClick={()=> setCurrentHook("useReducer")}>useReducer</Nav.Link>
      <Nav.Link  className="hlink" onClick={()=> setCurrentHook("useEffect")}>useEffect</Nav.Link>
      <Nav.Link  className="hlink" onClick={()=> setCurrentHook("useRef")}>useRef</Nav.Link>
      <Nav.Link  className="hlink" onClick={()=> setCurrentHook("useLayoutEffect")}>useLayoutEffect</Nav.Link>
      <Nav.Link  className="hlink" onClick={()=> setCurrentHook("useImperativeHandle")}>useImperativeHandle</Nav.Link>
      <Nav.Link  className="hlink" onClick={()=> setCurrentHook("useContextHOC")}>useContext</Nav.Link>
      <Nav.Link  className="hlink" onClick={()=> setCurrentHook("useMemo")}>useMemo</Nav.Link>
    
    </Nav>
 
  </Navbar>)
 }

 export default NavMenu;

