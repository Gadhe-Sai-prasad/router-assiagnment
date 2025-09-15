
//dashboard
import React from 'react';
import { Link } from 'react-router-dom';

function Orders() {
    return (
        <div style={{padding: '20px', backgroundColor: 'fff8dc'}}>
            <h1>📋 My Orders</h1>
            <p>Your recent buy/sell orders</p>
            
            {/* Order 1 */}
            <div style={{
                padding: '15px',
                border: '1px solid orange',
                borderRadius: '8px',
                margin: '10px 0',
                backgroundColor: 'white'
            }}>
                <h3>🟢 BUY Order</h3>
                <p><strong>Stock:</strong> Infosys</p>
                <p><strong>Quantity:</strong> 15 shares</p>
                <p><strong>Price:</strong> ₹1,450 per share</p>
                <p><strong>Status:</strong> <span style={{color: 'green'}}>✅ Completed</span></p>
                <p><strong>Time:</strong> 10:30 AM</p>
            </div>
            
            {/* Order 2 */}
            <div style={{
                padding: '15px',
                border: '1px solid orange',
                borderRadius: '8px',
                margin: '10px 0',
                backgroundColor: 'white'
            }}>
                <h3>🔴 SELL Order</h3>
                <p><strong>Stock:</strong> Wipro</p>
                <p><strong>Quantity:</strong> 20 shares</p>
                <p><strong>Price:</strong> ₹400 per share</p>
                <p><strong>Status:</strong> <span style={{color: 'orange'}}>⏳ Pending</span></p>
                <p><strong>Time:</strong> 11:15 AM</p>
            </div>
            
            <div style={{marginTop: '30px'}}>
                <Link 
                    to="/" 
                    style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: 'gray',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        margin: '5px'
                    }}
                >
                    ← Back to Dashboard
                </Link>
                
                <Link 
                    to="/portfolio" 
                    style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: 'purple',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        margin: '5px'
                    }}
                >
                    💼 View Portfolio
                </Link>
            </div>
        </div>
    );
}

export default Orders;
