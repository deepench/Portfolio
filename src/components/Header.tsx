import { Database, Server, Type } from "lucide-react";
import React, { useState } from "react";
import TypewriterText from './TypewriterText';

interface HeaderProps {
  onAPIStatus?: (status: "online" | "offline") => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [viewMode, setViewMode] = useState<"pretty" | "json">("pretty");
  const apiStatus: "online" | "offline" = "online";
  const [terminalCommand, setTerminalCommand] = useState(
    "cat portfolio.json | jq ."
  );
  const toggleView = () => {
    const newMode = viewMode === "pretty" ? "json" : "pretty";
    setViewMode(newMode);
    setTerminalCommand(
      newMode === "json" ? "cat portfolio.json | jq ." : "npm run dev"
    );
  };
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative flex items-center gap-2">
                <Server
                  className={`w-5 h-5 ${
                    apiStatus === "online"
                      ? "text-status-success"
                      : "text-status-error"
                  }`}
                />

                {apiStatus === "online" && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-status-success rounded-full api-pulse"></div>
                )}
              </div>
              <span className="font-mono text-lg font-semibold text-primary glitch">
                {"<Deepen/>"}
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs">
              <Database className="w-3 h-3 text-terminal-cyan" />
              <span className="text-muted-foreground">$</span>
              <TypewriterText
                text={terminalCommand}
                className="font-mono text-terminal-green"
                delay={30}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
