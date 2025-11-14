import React from "react";
import MatrixBackground from "./MatrixBackground";
import TerminalHeader from "./TerminalHeader";
import Header from "./Header";

const Portfolio: React.FC = () => {
  const [apiStatus, setApiStatus] = React.useState<"online" | "offline">(
    "online"
  );
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <MatrixBackground />
      <TerminalHeader onAPIStatus={setApiStatus} />
      <Header />
    </div>
  );
};

export default Portfolio;
