import { Server } from "lucide-react";
import React from "react";

interface HeaderProps {
  onAPIStatus?: (status: "online" | "offline") => void;
}

const Header: React.FC<HeaderProps> = () => {
  const apiStatus: "online" | "offline" = "online";
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
                {"<BackendDev />"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
