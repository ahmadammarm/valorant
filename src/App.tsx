import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgentsCard from "./components/AgentsCard";
import AgentDetail from './components/AgentDetail';
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App: React.FC = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800">
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/agent" element={<AgentsCard />} />
                    <Route path="/agent/:uuid" element={<AgentDetail />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
