'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ReportPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [activeTab, setActiveTab] = useState('overview'); // overview, conversations, analytics

  // Admin password - in production, use proper auth
  const ADMIN_PASSWORD = 'isarva2026';

  useEffect(() => {
    // Check if already authenticated in session
    const auth = sessionStorage.getItem('admin_authenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadData();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      setError('');
      loadData();
    } else {
      setError('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
    setPassword('');
  };

  const loadData = async () => {
    setLoading(true);
    try {
      // Fetch conversations
      const convRes = await fetch('/api/get-conversations');
      const convData = await convRes.json();
      setConversations(convData.conversations || []);

      // Fetch analytics - Try AI first, fallback to keyword if it fails
      let analyticsData;
      try {
        const analyticsRes = await fetch('/api/get-analytics?ai=true');
        analyticsData = await analyticsRes.json();
      } catch (aiError) {
        console.warn('AI extraction failed, falling back to keyword mode:', aiError);
        const analyticsRes = await fetch('/api/get-analytics');
        analyticsData = await analyticsRes.json();
      }
      setAnalytics(analyticsData.analytics || null);
    } catch (error) {
      console.error('Error loading data:', error);
    }
    setLoading(false);
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-44">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md border border-gray-200 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Report</h1>
          <p className="text-gray-600 mb-6">Enter password to access conversation analytics</p>
          
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent mb-4"
            />
            {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-900 text-xl">Loading analytics...</div>
      </div>
    );
  }

  // Main Dashboard
  return (
    <div className="min-h-screen bg-white text-gray-900 py-44 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Conversation Analytics</h1>
            <p className="text-gray-600">AI Chatbot Report Dashboard</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={loadData}
              disabled={loading}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-md font-medium"
            >
              {loading ? '🔄 Refreshing...' : '🔄 Refresh Data'}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition border border-gray-200 font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex gap-4 bg-gray-50 rounded-xl p-2 border border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-3 rounded-lg font-semibold transition ${
              activeTab === 'overview'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-white'
            }`}
          >
            📊 Overview
          </button>
          <button
            onClick={() => setActiveTab('conversations')}
            className={`flex-1 py-3 rounded-lg font-semibold transition ${
              activeTab === 'conversations'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-white'
            }`}
          >
            💬 Conversations ({conversations.length})
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex-1 py-3 rounded-lg font-semibold transition ${
              activeTab === 'analytics'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-white'
            }`}
          >
            📈 Deep Analytics
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        {activeTab === 'overview' && (
          <OverviewTab analytics={analytics} conversations={conversations} />
        )}
        {activeTab === 'conversations' && (
          <ConversationsTab 
            conversations={conversations} 
            selectedConversation={selectedConversation}
            setSelectedConversation={setSelectedConversation}
          />
        )}
        {activeTab === 'analytics' && (
          <AnalyticsTab analytics={analytics} />
        )}
      </div>
    </div>
  );
}

// Overview Tab Component
function OverviewTab({ analytics, conversations }) {
  if (!analytics) return <div className="text-gray-900">No data available</div>;

  const maxProductCount = Math.max(...Object.values(analytics.topProducts), 1);
  const maxServiceCount = Math.max(...Object.values(analytics.topServices), 1);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <div className="text-gray-600 text-sm mb-2">Total Conversations</div>
          <div className="text-4xl font-bold text-gray-900">{analytics.totalConversations}</div>
          <div className="text-xs text-gray-500 mt-2">All time</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <div className="text-gray-600 text-sm mb-2">Total Messages</div>
          <div className="text-4xl font-bold text-gray-900">{analytics.totalMessages}</div>
          <div className="text-xs text-gray-500 mt-2">User + Bot messages</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <div className="text-gray-600 text-sm mb-2">Avg Messages/Chat</div>
          <div className="text-4xl font-bold text-gray-900">{analytics.averageMessagesPerConversation}</div>
          <div className="text-xs text-gray-500 mt-2">Average engagement</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <div className="text-gray-600 text-sm mb-2">Active Today</div>
          <div className="text-4xl font-bold text-emerald-600">
            {analytics.conversationsByDate[new Date().toLocaleDateString()] || 0}
          </div>
          <div className="text-xs text-gray-500 mt-2">{new Date().toLocaleDateString()}</div>
        </div>
      </div>

      {/* Top Products - Enhanced with Bar Chart */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">🎯 Most Investigated Products</h3>
        <p className="text-sm text-gray-600 mb-6">Number of conversations where users asked about each product</p>
        {Object.entries(analytics.topProducts).length > 0 ? (
          <div className="space-y-4">
            {Object.entries(analytics.topProducts).map(([product, count]) => (
              <div key={product} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-medium">{product}</span>
                  <span className="text-emerald-600 font-bold text-lg">{count} conversation{count !== 1 ? 's' : ''}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${(count / maxProductCount) * 100}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No product inquiries yet</p>
        )}
      </div>

      {/* Top Services - Enhanced with Bar Chart */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">🛠️ Most Asked Services</h3>
        <p className="text-sm text-gray-600 mb-6">Number of conversations where users inquired about each service</p>
        {Object.entries(analytics.topServices).length > 0 ? (
          <div className="space-y-4">
            {Object.entries(analytics.topServices).map(([service, count]) => (
              <div key={service} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-medium">{service}</span>
                  <span className="text-emerald-600 font-bold text-lg">{count} conversation{count !== 1 ? 's' : ''}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-lime-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${(count / maxServiceCount) * 100}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No service inquiries yet</p>
        )}
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <div className="text-gray-600 text-sm mb-2">Unique Products Researched</div>
          <div className="text-3xl font-bold text-emerald-600">
            {Object.keys(analytics.topProducts).length}
          </div>
          <div className="text-xs text-gray-500 mt-1">Different products asked about</div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <div className="text-gray-600 text-sm mb-2">Unique Services Inquired</div>
          <div className="text-3xl font-bold text-emerald-600">
            {Object.keys(analytics.topServices).length}
          </div>
          <div className="text-xs text-gray-500 mt-1">Different services asked about</div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <div className="text-gray-600 text-sm mb-2">Industries Interested</div>
          <div className="text-3xl font-bold text-emerald-600">
            {Object.keys(analytics.topIndustries).length}
          </div>
          <div className="text-xs text-gray-500 mt-1">Different industries mentioned</div>
        </div>
      </div>
    </div>
  );
}

// Conversations Tab Component
function ConversationsTab({ conversations, selectedConversation, setSelectedConversation }) {
  // Calculate user messages count
  const getUserMessageCount = (conv) => {
    return conv.messages?.filter(m => m.role === 'user').length || 0;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Conversation List */}
      <div className="lg:col-span-1 bg-white rounded-xl p-6 border border-gray-200 shadow-md max-h-[800px] overflow-y-auto">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">All Conversations</h3>
          <p className="text-sm text-gray-600">{conversations.length} total conversations</p>
        </div>
        {conversations.length === 0 ? (
          <p className="text-gray-500">No conversations yet</p>
        ) : (
          <div className="space-y-3">
            {conversations.map((conv) => {
              const userMsgCount = getUserMessageCount(conv);
              return (
                <div
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv)}
                  className={`p-4 rounded-lg cursor-pointer transition border ${
                    selectedConversation?.id === conv.id
                      ? 'bg-emerald-50 border-emerald-600 shadow-md'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-emerald-300'
                  }`}
                >
                  <div className="text-gray-900 text-sm font-semibold mb-2">
                    {new Date(conv.updated_at).toLocaleString()}
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-600">
                      {conv.message_count || 0} messages
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Conversation Detail */}
      <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200 shadow-md max-h-[800px] overflow-y-auto">
        {selectedConversation ? (
          <>
            <div className="mb-6 pb-4 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Conversation Details</h3>
              <div className="flex gap-4 text-sm text-gray-600">
                <span>ID: {selectedConversation.id.toString().slice(0, 8)}...</span>
                <span>Created: {new Date(selectedConversation.created_at || selectedConversation.updated_at).toLocaleString()}</span>
              </div>
            </div>
            <div className="space-y-4">
              {selectedConversation.messages?.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border ${
                    msg.role === 'user'
                      ? 'bg-emerald-50 border-emerald-200 ml-12'
                      : 'bg-gray-50 border-gray-200 mr-12'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs text-gray-600 font-medium">
                      {msg.role === 'user' ? '👤 User' : '🤖 Bot'}
                      {msg.cached && <span className="ml-2 bg-emerald-600 text-white px-2 py-0.5 rounded text-xs">Cached</span>}
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                  <div className="text-gray-900 whitespace-pre-wrap">{msg.content}</div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <div className="text-6xl mb-4">💬</div>
            <div className="text-lg font-medium">Select a conversation to view details</div>
            <div className="text-sm mt-2">Click on any conversation from the list</div>
          </div>
        )}
      </div>
    </div>
  );
}

// Analytics Tab Component
function AnalyticsTab({ analytics }) {
  if (!analytics) return <div className="text-gray-900">No analytics available</div>;

  const maxDateCount = Math.max(...Object.values(analytics.conversationsByDate), 1);
  const totalInquiries = Object.values(analytics.topProducts).reduce((a, b) => a + b, 0) +
                         Object.values(analytics.topServices).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6">
      {/* Conversations Timeline */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">📅 Conversations Timeline</h3>
        <div className="space-y-3">
          {Object.entries(analytics.conversationsByDate)
            .sort((a, b) => new Date(b[0]) - new Date(a[0]))
            .slice(0, 14) // Last 14 days
            .map(([date, count]) => (
              <div key={date} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">{date}</span>
                  <span className="text-gray-900 font-bold">{count} conversation{count !== 1 ? 's' : ''}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-full" 
                    style={{ width: `${(count / maxDateCount) * 100}%` }} 
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Industries Grid with Visual Cards */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">🏭 Industries Interested</h3>
        {Object.entries(analytics.topIndustries).length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(analytics.topIndustries).map(([industry, count]) => (
              <div key={industry} className="bg-emerald-50 rounded-lg p-4 border border-emerald-200 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-emerald-600 mb-1">{count}</div>
                <div className="text-gray-700 text-sm font-medium">{industry}</div>
                <div className="w-full bg-emerald-100 rounded-full h-1 mt-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-lime-500 h-full rounded-full" 
                    style={{ width: '100%' }} 
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No industry data yet</p>
        )}
      </div>

      {/* Product vs Service Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Product vs Service Inquiries</h3>
          <p className="text-xs text-gray-600 mb-4">Based on user questions in conversations</p>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Product Inquiries</span>
                <span className="text-emerald-600 font-bold">
                  {Object.values(analytics.topProducts).reduce((a, b) => a + b, 0)} conversations
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-full" 
                  style={{ width: totalInquiries > 0 ? `${(Object.values(analytics.topProducts).reduce((a, b) => a + b, 0) / totalInquiries) * 100}%` : '0%' }} 
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Service Inquiries</span>
                <span className="text-lime-600 font-bold">
                  {Object.values(analytics.topServices).reduce((a, b) => a + b, 0)} conversations
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-lime-500 h-full rounded-full" 
                  style={{ width: totalInquiries > 0 ? `${(Object.values(analytics.topServices).reduce((a, b) => a + b, 0) / totalInquiries) * 100}%` : '0%' }} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Stats */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Engagement Stats</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Total Topics Discussed</span>
              <span className="text-2xl font-bold text-emerald-600">
                {Object.keys(analytics.topProducts).length + 
                 Object.keys(analytics.topServices).length + 
                 Object.keys(analytics.topIndustries).length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Most Active Day</span>
              <span className="text-lg font-bold text-emerald-600">
                {Object.entries(analytics.conversationsByDate).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Peak Conversations</span>
              <span className="text-2xl font-bold text-emerald-600">
                {Object.entries(analytics.conversationsByDate).sort((a, b) => b[1] - a[1])[0]?.[1] || 0}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Topic Breakdown - Visual Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Products Chart */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📦 Products Breakdown</h3>
          {Object.entries(analytics.topProducts).length > 0 ? (
            <div className="space-y-3">
              {Object.entries(analytics.topProducts)
                .sort((a, b) => b[1] - a[1])
                .map(([product, count]) => {
                  const maxCount = Math.max(...Object.values(analytics.topProducts));
                  const percentage = (count / maxCount) * 100;
                  return (
                    <div key={product} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700 truncate" title={product}>
                          {product.length > 20 ? product.substring(0, 20) + '...' : product}
                        </span>
                        <span className="text-sm font-bold text-emerald-600 ml-2">{count}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-full rounded-full transition-all duration-500" 
                          style={{ width: `${percentage}%` }} 
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No product data</p>
          )}
        </div>

        {/* Services Chart */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🛠️ Services Breakdown</h3>
          {Object.entries(analytics.topServices).length > 0 ? (
            <div className="space-y-3">
              {Object.entries(analytics.topServices)
                .sort((a, b) => b[1] - a[1])
                .map(([service, count]) => {
                  const maxCount = Math.max(...Object.values(analytics.topServices));
                  const percentage = (count / maxCount) * 100;
                  return (
                    <div key={service} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700 truncate" title={service}>
                          {service.length > 20 ? service.substring(0, 20) + '...' : service}
                        </span>
                        <span className="text-sm font-bold text-lime-600 ml-2">{count}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-lime-400 to-lime-600 h-full rounded-full transition-all duration-500" 
                          style={{ width: `${percentage}%` }} 
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No service data</p>
          )}
        </div>

        {/* Industries Chart */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🏭 Industries Breakdown</h3>
          {Object.entries(analytics.topIndustries).length > 0 ? (
            <div className="space-y-3">
              {Object.entries(analytics.topIndustries)
                .sort((a, b) => b[1] - a[1])
                .map(([industry, count]) => {
                  const maxCount = Math.max(...Object.values(analytics.topIndustries));
                  const percentage = (count / maxCount) * 100;
                  return (
                    <div key={industry} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700 truncate" title={industry}>
                          {industry.length > 20 ? industry.substring(0, 20) + '...' : industry}
                        </span>
                        <span className="text-sm font-bold text-teal-600 ml-2">{count}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-teal-400 to-teal-600 h-full rounded-full transition-all duration-500" 
                          style={{ width: `${percentage}%` }} 
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No industry data</p>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">⚡ Recent Activity</h3>
        <div className="space-y-3">
          {analytics.recentActivity.length > 0 ? analytics.recentActivity.map((activity, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <div className="text-sm text-gray-700 font-medium">
                  {new Date(activity.date).toLocaleString()}
                </div>
                <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-medium">
                  {activity.messageCount} messages
                </div>
              </div>
              {(activity.topics.products.length > 0 || activity.topics.services.length > 0 || activity.topics.industries.length > 0) ? (
                <div className="flex gap-2 flex-wrap">
                  {activity.topics.products.map(p => (
                    <span key={p} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium border border-emerald-200">
                      📦 {p}
                    </span>
                  ))}
                  {activity.topics.services.map(s => (
                    <span key={s} className="bg-lime-100 text-lime-700 px-3 py-1 rounded-full text-xs font-medium border border-lime-200">
                      🛠️ {s}
                    </span>
                  ))}
                  {activity.topics.industries.map(i => (
                    <span key={i} className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-medium border border-teal-200">
                      🏭 {i}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 text-sm">General conversation</div>
              )}
            </div>
          )) : (
            <p className="text-gray-500">No recent activity</p>
          )}
        </div>
      </div>
    </div>
  );
}
