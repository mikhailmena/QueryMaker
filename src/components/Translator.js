import commands from "../Assets/commands.json"
import React, {useState} from "react"

const Display = () =>{
    const [action, setaction] = useState('')
         ///////////postgres//////////////////
    let postgres = commands[0]
    let parray = Object.values(postgres)
    // function to list all objects in postgres array
    const listparray = () => {
        {parray.map((each) => {
            for (let i = 0; i < each.length; i++) {
            //  <div >{each.Command} </div>
            console.log(i,each[i])
            }
           })
        }
    }
    ///////////////////mysql///////////////////////////
    let mysql = commands[1]
    let marray = Object.values(mysql)
    const listmarray = () => {
        {marray.map((each1) => {
            for (let i = 0; i < each1.length; i++) {
            //  <div >{each.Command} </div>
            console.log(i,each1[i])
            }
           })
        }
    }
//////////////////////mongodb/////////////////////////////////
    let mongodb = commands[2]
    let moarray = Object.values(mongodb)
    const listmoarray = () => {
        {moarray.map((each2) => {
            for (let i = 0; i < each2.length; i++) {
             <div >{each2[i].Database} </div>
            let dbase = each2[i].Database
            console.log(dbase)      
            console.log(i,each2[i].Database)
            // setaction(each2[i].Action)
            
            console.log(i,each2[i].Action)
            console.log(i,each2[i].description)
            console.log(i,each2[i].Command)
            

            
            }
            
           })
        }
    }
    

    return (
        <>
 
            <div>       
            {listmoarray()}
 
               
                
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