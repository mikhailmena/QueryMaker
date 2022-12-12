import React from 'react'
import postgres from "../Assets/postgres.json"

const Ptable = () => {
    let Values = Object.values(postgres)
    let Keys = Object.keys(postgres)
    
    
    

  return (
   

    <div> 
      {postgres.map( (pdata,index) => {
        let Command = Object.values(postgres[index])
        let Keys = Object.keys(postgres[index])
      
        return (
            <table>
                <thead>postgres table </thead>
                <tbody>
                    <tr>
                        <td>  </td>
                        <th>pdata: </th>
                    </tr>
                </tbody>
            </table>
                 )
      })}
    </div>
  )
}

export default Ptable
