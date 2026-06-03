"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Node = ({ title, items, icon, color = "purple", className = "" }) => {
  const colorStyles = {
    purple: "border-purple-100 bg-white",
    blue: "border-blue-100 bg-blue-50/30",
    green: "border-green-100 bg-green-50/30",
    orange: "border-orange-100 bg-orange-50/30",
  };

  const iconColors = {
    purple: "text-purple-600 bg-purple-50",
    blue: "text-blue-600 bg-blue-50",
    green: "text-green-600 bg-green-50",
    orange: "text-orange-600 bg-orange-50",
  };

  return (
    <motion.div
      whileHover={{ y: -5, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
      className={`p-4 rounded-2xl border-2 shadow-sm transition-all duration-300 ${colorStyles[color]} ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg ${iconColors[color]}`}>
          {icon}
        </div>
        <h4 className="">{title}</h4>
      </div>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-[11px] text-gray-500 font-medium">
            <span className="text-green-500 text-[10px]">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ConnectionLine = ({ className = "" }) => (
  <svg className={`absolute pointer-events-none ${className}`} style={{ zIndex: 0 }}>
    <path
      d="M0 0 L100 100"
      stroke="#E5E7EB"
      strokeWidth="2"
      strokeDasharray="4 4"
      fill="none"
    />
  </svg>
);

export default function ISSWorkflowVisualizer() {
  return (
    <div className="w-full bg-[#fdfbff] rounded-[3rem] p-8 md:p-12 lg:p-20 overflow-hidden relative border border-purple-50">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{
        backgroundImage: `radial-gradient(#9333EA 0.5px, transparent 0.5px)`,
        backgroundSize: '30px 30px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Master Section */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-col items-center">
            <div className="bg-slate-800 text-white px-6 py-2 rounded-xl flex items-center gap-2 mb-8 shadow-lg">
              <span className="text-lg">⚙️</span>
              <span className="font-black tracking-widest text-xs uppercase">MASTER</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Node 
                title="Client Setup" 
                items={["Add Clients", "Manage Clients"]} 
                icon="👥"
                color="blue"
              />
              <Node 
                title="Users & Roles" 
                items={["Create Users", "Assign Roles"]} 
                icon="👤"
                color="blue"
              />
              <Node 
                title="Billing Company" 
                items={["Company Details", "Billing Settings"]} 
                icon="📄"
                color="blue"
              />
            </div>
          </div>
        </div>

        {/* Central Hub and Main Branches */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 mb-16">
          
          {/* Project Management Branch */}
          <div className="space-y-6">
             <div className="bg-[#9333EA] text-white px-6 py-3 rounded-xl inline-block mb-4 shadow-lg self-start">
                <span className="font-black tracking-widest text-xs uppercase">PROJECT MANAGEMENT</span>
             </div>
             <div className="grid grid-cols-1 gap-6">
                <Node 
                  title="Create Project" 
                  items={["Project Details", "Department", "Est. Hours", "Timeline"]} 
                  icon="📁" 
                />
                <Node 
                   title="Task Management" 
                   items={["Create Tasks", "Assign Members", "Set Priority/Status"]} 
                   icon="✅" 
                />
             </div>
          </div>

          {/* Center Hub */}
          <div className="flex flex-col items-center justify-center">
             <motion.div 
               animate={{ scale: [1, 1.05, 1] }} 
               transition={{ duration: 4, repeat: Infinity }}
               className="w-32 h-32 bg-white rounded-3xl shadow-2xl border-4 border-purple-500 flex items-center justify-center relative group"
             >
                <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full animate-pulse group-hover:bg-purple-500/40 transition-colors"></div>
                <span className="text-5xl font-black text-purple-600 relative z-10 italic">ISS</span>
             </motion.div>
             <div className="mt-6 bg-white px-6 py-3 rounded-2xl shadow-sm border border-purple-100 relative">
                <span className="text-gray-900 font-bold text-sm">Your Project Hub</span>
             </div>
          </div>

          {/* Tickets Branch */}
          <div className="space-y-6">
             <div className="bg-indigo-500 text-white px-6 py-3 rounded-xl inline-block mb-4 shadow-lg self-end lg:ml-auto">
                <span className="font-black tracking-widest text-xs uppercase">TICKETS</span>
             </div>
             <div className="grid grid-cols-1 gap-6">
                <Node 
                  title="Create Ticket" 
                  items={["Client Ticket Details", "Set Priority", "Add Tags"]} 
                  icon="➕" 
                />
                <Node 
                   title="Assign Members" 
                   items={["Assign Members", "Set Due Date", "Attach Files"]} 
                   icon="👥" 
                />
             </div>
          </div>
        </div>

        {/* Extended Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
           <Node title="Hours Log" items={["Log Hrs", "Timesheet"]} icon="🕒" className="scale-90" />
           <Node title="Credentials" items={["Secure Access", "Manage Keys"]} icon="🔑" className="scale-90" />
           <Node title="Project Assets" items={["Attach Files", "Internal Docs"]} icon="📎" className="scale-90" />
           <Node title="Track Work" items={["View Progress", "Time Spent"]} icon="📊" className="scale-90" />
           <Node title="Flag & Notify" items={["Flag Persons", "Auto Email"]} icon="🚩" className="scale-90" />
           <Node title="History" items={["Audit Log", "Updates"]} icon="🕒" className="scale-90" />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 border-t border-purple-50 pt-16">
          <div className="flex items-center gap-6">
            <div className="bg-emerald-500 p-4 rounded-2xl shadow-lg shadow-emerald-500/20 text-white">
              <span className="text-2xl">📋</span>
            </div>
            <div>
              <h4 className="text-emerald-600 uppercase tracking-widest text-xs mb-1">Daily Report</h4>
              <p className="text-xs text-gray-500 font-medium">Log daily work & update task progress</p>
            </div>
          </div>
          
          <div className="hidden md:block text-2xl text-gray-300">➜</div>

          <div className="flex items-center gap-6">
            <div className="bg-orange-500 p-4 rounded-2xl shadow-lg shadow-orange-500/20 text-white">
              <span className="text-2xl">📈</span>
            </div>
            <div>
              <h4 className="text-orange-600 uppercase tracking-widest text-xs mb-1">Analytical Reports</h4>
              <p className="text-xs text-gray-500 font-medium">Project-wise work done & analytics</p>
            </div>
          </div>
        </div>

        {/* Email Notification Toasts */}
        <div className="absolute bottom-10 right-10 hidden xl:flex flex-col gap-3">
          <div className="bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce">
             <div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">📧</div>
             <div className="text-[10px]">
                <p className="font-black">Email sent automatically</p>
                <p className="text-gray-400">When a person is flagged</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
