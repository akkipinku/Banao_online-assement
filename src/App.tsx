import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './imports/Homepage';
import { AuthProvider } from './components/ui-dashboard/AuthProvider';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashboardLayout from './components/layout-dashboard/DashboardLayout';
import DashboardHelper from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Landing Page Route - Preserving original structure */}
          <Route path="/" element={
            <div className="min-h-screen w-full bg-black">
              {/* Navigation Header */}
              <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
                <div className="text-white font-bold text-xl">Nexus</div>
                <div className="flex gap-4">
                  <a href="/login" className="px-6 py-2 text-white hover:text-pink-400 transition-colors">Login</a>
                  <a href="/signup" className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity">Sign Up</a>
                </div>
              </nav>
              <div className="w-[1440px] h-[4942px] mx-auto relative pt-16">
                <Homepage />
              </div>
            </div>
          } />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHelper />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}