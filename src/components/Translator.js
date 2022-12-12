import commands from "../Assets/commands.json"
import React, {useState} from "react"
import Choose from "./Choose"
import postgres from "../Assets/postgres.json"
import mysql from "../Assets/mysql.json"
import mongodb from "../Assets/mongodb.json"
import '../CssFiles/Translator.css'

const Translator = () =>{
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
            {console.log("postgres", postgres.postgres)}
            {console.log("mysql", mysql)}
            {console.log("mongodb", mongodb)}
            {/* {postgres.postgres.map(pdata => (console.log("pdata",pdata)))} */}
            
            {commands.map( (data, index) => {
                    // {console.log("commands each", commands[index])}
                    
                    let Data = Object.values(data)
                    let Keys = Object.keys(data)
                    let Command = Object.values(data)[0][index].Command
                    let Action = Object.values(data)[0][index].Action
                    let Database = Object.entries(data)[0][0]
                       console.log("Data",Data, "Keys", Keys,"Command", Command,"Database", Database) 
                          
                        return (
                        <>
                        
                            <table className="" key={index}>
                                <thead>
                                    <tr>Database Tables</tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th >SQL Statements</th>
                                    </tr>
                                    <tr>
                                        <td>Keys: {Keys}  </td>
                                    </tr>
                                    <tr>
                                        <td>Database: {Database}</td>
                                    </tr>
                                    <tr>
                                        <td>Action: {Action}  </td>
                                    </tr>
                                    <tr>
                                        <td>Command: {Command}</td>
                                    </tr>
                                </tbody>
                                
                            </table>
                            </>
                        )       
                })
                }
     
            </div>
 
        </>
    )
}
export default Translator
/* {commands[0].postgres[0].Database} */
// {console.log("data.postgres[key].Database",data.postgres[key].Database)}
//                             {console.log("data.mysql",data.Mysql[key].Database)}
//                             {console.log("data.postgres.Action",data.postgres[key].Action)}
// {console.log("data",data)}