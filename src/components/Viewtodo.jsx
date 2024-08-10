import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewtodo = () => {
const [data,changeData]=useState([])
const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
        (response)=>{
            changeData(response.data)
        }
    ).catch()
}
useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">UserID</th>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Completed Status</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            {
                                data.map(
                                    (value,index)=>{
                                        return <tr>
                                            <th scope="row">{value.userId}</th>
                                            <td>{value.id}</td>
                                            <td>{value.title}</td>
                                            <td>{value.completed}</td>
                                        </tr>
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewtodo
