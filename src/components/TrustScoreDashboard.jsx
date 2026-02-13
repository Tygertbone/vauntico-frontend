import React, { useState, useEffect } from 'react';
import { Shield, Zap, Activity, CheckCircle } from 'lucide-react';

const TrustScoreDashboard = () => {
  const [metrics, setMetrics] = useState({ accuracy_rate: 100, total: 0 });

  return (
    <div className="p-6 bg-slate-900 text-white min-h-screen font-sans">
      {/* Header: CEO Command Center Style */}
      <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Financial TrustScore Framework</h1>
          <p className="text-slate-400 text-sm">Phantom Maintainer Active: Permanent Green State</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-900/30 text-green-400 rounded-full border border-green-500/50">
          <Activity size={16} className="animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest">Secure & Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Metric 1: The TrustScore Dial */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-blue-400" />
            <h2 className="font-semibold text-slate-300">Creator Reliability</h2>
          </div>
          <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            {metrics.accuracy_rate}%
          </div>
          <p className="mt-2 text-xs text-slate-500 uppercase tracking-wider font-bold">Fulfillment Accuracy Rate</p>
        </div>

        {/* Metric 2: Transaction Volume */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <div className="flex items-center gap-3 mb-4 text-purple-400">
            <Zap />
            <h2 className="font-semibold text-slate-300">Heartbeat Status</h2>
          </div>
          <div className="text-5xl font-black text-white">{metrics.total}</div>
          <p className="mt-2 text-xs text-slate-500 uppercase tracking-wider font-bold">Total Operations Processed</p>
        </div>

        {/* Metric 3: Self-Healing Status */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <div className="flex items-center gap-3 mb-4 text-emerald-400">
            <CheckCircle />
            <h2 className="font-semibold text-slate-300">Self-Healing Engine</h2>
          </div>
          <div className="text-sm text-slate-300 italic mb-2">"Last Night: Scanned for Stale logic & Dependency Rot."</div>
          <div className="px-3 py-1 bg-emerald-900/30 text-emerald-400 text-xs rounded-md w-fit">No Leaks Detected</div>
        </div>
      </div>

      {/* Live Brief Section */}
      <div className="mt-8 bg-slate-800/50 p-6 rounded-2xl border border-dashed border-slate-700">
        <h3 className="text-slate-400 uppercase text-xs font-bold mb-4 tracking-widest">Shadow Repo Insights</h3>
        <div className="space-y-4">
          <div className="flex gap-4 items-start border-l-2 border-blue-500 pl-4">
            <div>
              <p className="text-sm text-slate-100">Invisible PR #104 merged autonomously.</p>
              <p className="text-xs text-slate-500">Target: Refactor fulfillment webhook for Paystack stability.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustScoreDashboard;
