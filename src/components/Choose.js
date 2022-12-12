import React from 'react'

const Choose = () => {
  return (
    <div>
        <form>
            <select>
                <option>Mysql</option>
                <option>Mongodb</option>
                <option>Postgres</option>   
                <option>SQLServer</option>
                <option>SQLite</option>
                <option>Oracle</option>
            </select>
            <select>
                <option>Read</option>
                <option>Write</option>
                <option>Append</option>
                <option>Truncate</option>
                <option>Update</option>
                <option>Insert</option>
                <option>Delete</option>
                <option>Create</option>
                <option>Drop</option>

            </select>
            <select>
                    <option>All </option>
                    <option>One</option>
                    <option>Many</option>
            </select>
                <label>Database Name</label>
                <input>
                </input>
                <label>Table Name</label>
                <input>
                </input>
        </form>
    </div>
  )
}

export default Choose
