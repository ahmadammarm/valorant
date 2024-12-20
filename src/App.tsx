import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgentsCard from "./components/AgentsCard";
import AgentDetail from './components/AgentDetail';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950">
        <Router>
        <Routes>
            <Route path="/" element={<AgentsCard />} />
            <Route path="/agents/:uuid" element={<AgentDetail />} />
        </Routes>
        </Router>
    </div>
  );
};

export default App;
