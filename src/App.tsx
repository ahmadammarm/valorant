import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgentsCard from "./components/AgentsCard";
import AgentDetail from './components/AgentDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgentsCard />} />
        <Route path="/agents/:uuid" element={<AgentDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
