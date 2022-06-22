import React ,{useState,useMemo} from "react";
import ApiRecord from "./ApiRecord";
import {Button} from "react-bootstrap";

const HookUseMemo = ()=>{
    const [empData, setEmpData] = useState()
    const [change,setChange] = useState("false")
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
//    useEffect(() => {
     
//        fetchDataFromApi()
//         console.log("Executing useFETCH")
//     }, [])
   const handleChange = () => {
    setChange(!change)
   }
    

    const timeConsuming = useMemo(() =>{
         fetchDataFromApi()
        console.log("Executing useMEMO")
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

            <Button variant="info" onClick={handleChange}>Change boolean state variable...Check your console</Button>
            {/* <Button variant="info" onClick={() => setChange(!change)}>Change boolean state variable...Check your console</Button> */}
            {timeConsuming}
                <article className="d-flex flex-wrap">
                        {empData &&
                            empData.map((element, key) => <ApiRecord props={element} key={key} />)}
                    </article>   
        
        </div>)
}

export default HookUseMemo;
