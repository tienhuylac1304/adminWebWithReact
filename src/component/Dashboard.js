import React from "react"
import './css/Dashboard.css'

export default function Dashboard({img}){
    return(
        <div className="Dashboard">
            <div className="cards">
                <div className="card">
                    <h1 className="detail">2021</h1>
                    <h3 className="title">Products</h3>
                    <i className='bx bx-desktop'></i>
                </div>
                <div className="card">
                    <h1 className="detail">2021</h1>
                    <h3 className="title">Customers</h3>
                    <i className='bx bx-user'></i>
                </div>
                <div className="card">
                    <h1 className="detail">2021</h1>
                    <h3 className="title">Views</h3>
                    <i className='bx bx-show'></i>
                </div>
            </div>
        </div>   
    );
}