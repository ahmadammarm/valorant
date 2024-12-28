import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgentsCard from "./components/AgentsCard";
import AgentDetail from './components/AgentDetail';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800">
        <Router>
        <Routes>
            <Route path="/" element={<AgentsCard />} />
            <Route path="/:uuid" element={<AgentDetail />} />
        </Routes>
        </Router>
    </div>
  );
};

export default App;
