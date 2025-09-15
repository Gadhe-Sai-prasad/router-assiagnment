import React from "react";
import { Link } from "react-router-dom";
function Dashboard() {
    return (
        <div
            style={{
                padding: '25px',
                background: 'e8f4fd'
            }}
        >
            <h1>Dashboard</h1>
            <p>welcome to your trading account!</p>
            <div style={{
                padding: '20px',
                border: '2px solid blue',
                borderRadius: '20px',
                margin: '25px 0'
            }}>
                <h2>Your Balance </h2>
                <p style={{ fontSize: '30px', color: 'green' }}>₹1,50,000</p>
            </div>
            <div style={{ marginTop: '30px' }}>
                <h3>Quick Links:</h3>
                <Link to="/Portfolio"
                    style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        background: 'green',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '10px',
                        margin: '10px'
                    }}>View portfolio</Link>
                <Link to="/orders"

                    style={{
                        display: 'inline-block',
                        textDecoration: 'none',
                        borderRadius: '10px',
                        color: 'white',
                        margin: '5px',
                        padding: '10px 20px',
                        background: 'green',
                    }}>View Orders</Link>
            </div>



        </div>
    )
}
export default Dashboard;