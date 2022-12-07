import commands from "../Assets/commands.json"
import React, {useState} from "react"

const Display = () =>{
 

    return (
        <>

            <div>
                {/* iterates over the command array */}
                {commands.map( (data) => {
                    console.log("data",data.postgres)
                    return data[0].map( (thing) => {
                         console.log(thing)
                    })
                    const keys = Object.keys(data)
                    console.log("keys", keys)
                    //console log each object in postgres
                    
                    
                    return (
                        
                        <div  >   
                              
                            
                            
                            Keys: {Object.keys(data)} <br></br>
                            

                            Database: {Object.entries(data)[0][0]}
                            <div>
                                <br></br>
                                Command: {Object.values(data)[0][4].Command}
                            </div>
                            <div>
                             Values: {Object.values(data)}
                            </div>
                        </div>
                        
                    )
                })
                }
                
            </div>
        </>
    )
}
export default Display
/* {commands[0].postgres[0].Database} */
// {console.log("data.postgres[key].Database",data.postgres[key].Database)}
//                             {console.log("data.mysql",data.Mysql[key].Database)}
//                             {console.log("data.postgres.Action",data.postgres[key].Action)}
// {console.log("data",data)}