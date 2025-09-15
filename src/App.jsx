import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Portfolio from './components/Portfolio';
import Orders from './components/Orders';
 

function App() {
    return (
        <div>
            <h1 style={{
                textAlign: 'center',
                backgroundColor: 'blue',
                color: 'white',
                padding: '20px',
                margin: '0'
            }}>
                🏦 Mini Zerodha Trading App
            </h1>
            
             
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
             
        </div>
    );
}

export default App;

