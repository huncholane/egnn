import React from "react";
import { ExternalLink } from "lucide-react";

const TokenDisplay = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 p-8 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white/95 backdrop-blur-sm shadow-xl rounded-lg overflow-hidden">
        <div className="text-center p-6 border-b">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Solana Will Save Ethereum
          </h1>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-col gap-4 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Token Name</span>
              <span className="font-bold">eth gas new name</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Symbol</span>
              <span className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-lg">
                MANA
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Token Address</span>
              <div className="flex items-center gap-2">
                <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">
                  2wnpHGAjnVyD63FuJR4hHK6jyuC9P9MuNELrdCYSvMAs
                </code>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">EIP Proposal</span>
              <a
                href="https://github.com/ethereum/EIPs/pull/9368"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="text-center text-gray-600 italic">
            Because sometimes the best solution comes from unexpected places...
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDisplay;
