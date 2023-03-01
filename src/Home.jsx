
import React from "react";
import { useState, useEffect } from "react";


 function Home() {
  {

    let [api , setApi]=useState(null);
    let [error,setError]=useState(null);
  
    useEffect(()=>{
     
            fetch("http://localhost:8080/Notes")
            .then((res)=>{
             if(res.ok===false){
              throw error("Data not Found")
             }
             return res.json();
            })
            .then((data)=>{setApi(data)})
            .catch((err)=>{setError(err.message)})
            
        },[])
    
        return(
           <div>
            {error&&<h1>error</h1>}
            {api&& <div className="home">
               <h1 >StudentNote DB</h1>
               <table border="2px" cellPadding="9px" cellSpacing="3px" align="center" bgcolor="yellow">
                  <tbody>
                     <tr bgcolor="red">
                        <th>Student ID</th>
                        <th>Student note</th>
                        <th>Student color</th>
                        <th>Student hash</th>
                     </tr>
                     {
                       api.map((value,index)=>{
                           return(
                              <>
                              <tr>
                                 <td>{api[index].id}</td>
                                 <td>{api[index].note}</td>
                                 <td>{api[index].color}</td>
                                 <td>{api[index].hash}</td>
                              </tr>
                              </>
                           )
                        })
                     }
                  </tbody>
               </table>
            </div>}
         
           </div>
        )
    }

 }
  export default Home