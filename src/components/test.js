{ console.log("postgres object", postgres,mysql,mongodb)}
{console.log("marray", marray)}
{console.log("parray",parray, "typeof", typeof(parray))}
{console.log("parray[0][0]",parray[0][0], "typeof", typeof(parray[0][0]))}
 {listparray()}
 {listmarray()}
 {listmoarray()}




{console.log("postgres object values",Object.values(postgres))}


{commands.map( (data) => {
                    
                    
    let Data = Object.values(data)
    let Keys = Object.keys(data)
    let Command = Object.values(data)[0][4].Command
    let Database = Object.entries(data)[0][0]
       console.log("Data",Data, "Keys", Keys,"Command", Command,"Database", Database) 
          
        return (
        <>
        
            <table className="">
                <th>SQL Statements</th>
                <tbody>
                    
                <tr>
                    <td>Keys: {Keys}  </td>
                    <td>Command: {action}  </td>
                    
                    
                </tr>
                <tr>
                    <td>Database: {Database}</td>
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