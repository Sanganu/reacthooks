import React ,{useState,useMemo} from "react";
import ApiRecord from "./ApiRecord";
import {Button} from "react-bootstrap";

const HookUseMemo = ()=>{
    const [empData, setEmpData] = useState()
    const [change,setChange] = useState("false");
    const [userData,setUserData] = useState([])
    const fetchDataFromApi =()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(apiResults => {
            return apiResults.json()
        }).then(apiResults => {
            setEmpData(apiResults)
            //   apiResults.forEach(element => {
            //     console.log(element) 
        }).catch(error => {
            console.error(error)
        })
    }
    const handleChange = () => {
        setChange(!change)
        fetch("https://randomuser.me/api/?results=5")
        .then(apiResults => {
            return apiResults.json()
        }).then(apiResults => {
            
           let userResults =  apiResults.results.map(ele => ({
                name:`${ele.name.title}.${ele.name.first} ${ele.name.last}`,
                phone:ele.phone,
                username:ele.login.username,
                website:ele.picture.large,
                email:ele.email,
                company :{
                    name:ele.id.name
                }
            }))
            setUserData(userResults)
            console.log("Button  execution to change userData state.....No console for useMemo")
             
        }).catch(error => {
            console.error(error)
        })
   }
    

    const timeConsuming = useMemo(() =>{
         fetchDataFromApi()
        console.log("Executing useMemo hook - state variable empData ")
    } ,[])

    return(<div className="container border border-warning text-center">
                <h4>useMemo Hook</h4>
                <p>The React useMemo Hook returns a memoized value.

                Think of memoization as caching a value so that it does not need to be recalculated.

                The useMemo Hook only runs when one of its dependencies update.

                This can improve performance.</p>
                <p>
                The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.

                In this example, we have an expensive function that runs on every render.
                </p>

            
            {/* <Button variant="info" onClick={() => setChange(!change)}>Change boolean state variable...Check your console</Button> */}
            {timeConsuming}
            <h6>Get API Data - this fetch is called within useMemo</h6>
                <article className="flex flex-wrap">
               
                        {empData &&
                            empData.map((element, key) => <ApiRecord props={element} key={key} />)}
                    </article>  
                    <h6>Get API Data - this fetch is called with the button onClick to change state userData and to see the useMemo(empData) is not getting executed.</h6>
                    <Button variant="info" onClick={handleChange}>Change state variable userData...Check your console to see useMemo execution</Button>
                     <article className="d-flex flex-wrap">
                    
                        {userData &&
                            userData.map((ele, key) =>                       
                           (<ApiRecord 
                            props={ele} 
                            key={key}></ApiRecord>)
                            )
                            }
                    </article>  

                     
        
        </div>)
} 

export default HookUseMemo;
