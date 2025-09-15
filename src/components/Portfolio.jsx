//portfolio
import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <div style={{padding: '20px', backgroundColor: 'f0fff0'}}>
            <h1>💼 My Portfolio</h1>
            <p>Your stock holdings</p>
            
            {/* Stock 1 */}
            <div style={{
                padding: '15px',
                border: '1px solid green',
                borderRadius: '8px',
                margin: '10px 0',
                backgroundColor: 'white'
            }}>
                <h3>📈 Reliance Industries</h3>
                <p>Quantity: 10 shares</p>
                <p>Current Value: ₹26,500</p>
                <p style={{color: 'green'}}>Profit: +₹1,500 ✅</p>
            </div>
            
            {/* Stock 2 */}
            <div style={{
                padding: '15px',
                border: '1px solid green',
                borderRadius: '8px',
                margin: '10px 0',
                backgroundColor: 'white'
            }}>
                <h3>💻 TCS</h3>
                <p>Quantity: 5 shares</p>
                <p>Current Value: ₹17,250</p>
                <p style={{color: 'green'}}>Profit: +₹1,250 ✅</p>
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
                    to="/orders" 
                    style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: 'orange',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        margin: '5px'
                    }}
                >
                    📋 View Orders
                </Link>
            </div>
        </div>
    );
}

export default Portfolio;
