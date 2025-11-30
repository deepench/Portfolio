import React, { useState, useEffect } from "react";
import { Terminal, Wifi, WifiOff, Activity } from "lucide-react";

interface TerminalHeaderProps {
  onAPIStatus?: (status: "online" | "offline") => void;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ onAPIStatus }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [apiStatus, setApiStatus] = useState<"online" | "offline">("online");
  const [cpuUsage, setCpuUsage] = useState(23);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setCpuUsage(Math.floor(Math.random() * 30) + 10);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate API status changes
    const statusTimer = setInterval(() => {
      const newStatus = Math.random() > 0.1 ? "online" : "offline";
      setApiStatus(newStatus);
      onAPIStatus?.(newStatus);
    }, 10000);

    return () => clearInterval(statusTimer);
  }, [onAPIStatus]);

  return (
    <div className="bg-code-background border-b border-border p-2">
      <div className="flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-terminal-green" />
            <span className="text-terminal-green">deepen</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-terminal-cyan">~/portfolio</span>
            <span className="text-terminal-yellow">$</span>
            <span className="terminal-cursor text-terminal-green">█</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-terminal-yellow" />
            <span className="text-muted-foreground">CPU:</span>
            <span className="text-terminal-yellow">{cpuUsage}%</span>
          </div>

          <div className="flex items-center gap-2">
            {apiStatus === "online" ? (
              <Wifi className="w-3 h-3 text-status-success api-pulse" />
            ) : (
              <WifiOff className="w-3 h-3 text-status-error" />
            )}
            <span className="text-muted-foreground">API:</span>
            <span
              className={
                apiStatus === "online"
                  ? "text-status-success"
                  : "text-status-error"
              }
            >
              {apiStatus.toUpperCase()}
            </span>
          </div>

          <div className="text-muted-foreground">
            {currentTime.toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalHeader;
