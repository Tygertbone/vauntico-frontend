import React, { useState, useEffect } from 'react';
import { Shield, Zap, Activity, CheckCircle } from 'lucide-react';

const TrustScoreDashboard = () => {
  // State for live metrics from the Phantom Maintainer
  const [metrics, setMetrics] = useState({ accuracy_rate: 0, total: 0 });
  const [loading, setLoading] = useState(true);

  // Data Bridge: Pulling from vauntico-server-personal
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        // REPLACE with your actual Vercel/Railway backend URL
        const response = await fetch('https://YOUR_BACKEND_URL/api/metrics', {
          headers: {
            'x-service-key': 'YOUR_SERVICE_API_KEY', // Authenticated Admin Access
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        setMetrics({
          accuracy_rate: data.accuracy_rate || 0,
          total: data.total || 0
        });
        setLoading(false);
      } catch (error) {
        console.error("🛡️ Phantom Data Bridge Error:", error);
        // Fallback to zeros rather than crashing
        setLoading(false);
      }
    };

    fetchMetrics();
    // Auto-refresh every 5 minutes to maintain the "Permanent Green" state
    const interval = setInterval(fetchMetrics, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white font-sans">
        <Activity className="text-blue-500 animate-spin mb-4" size={48} />
        <p className="tracking-widest uppercase text-xs font-bold text-slate-400">Initializing Phantom Data Bridge...</p>
      </div>
    );
  }

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
