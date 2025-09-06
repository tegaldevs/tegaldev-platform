'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Trophy,
  ShoppingBag,
  FileText,
  Settings,
  BarChart3,
  TrendingUp,
  Activity,
  DollarSign,
  UserCheck,
  Menu,
  X,
} from 'lucide-react';
import { Button } from '@/app/_components/ui/button';

interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}

const stats: StatCard[] = [
  {
    title: 'Total Users',
    value: '2,847',
    change: '+12.5%',
    icon: <Users className="h-6 w-6" />,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Active Events',
    value: '24',
    change: '+8.2%',
    icon: <Calendar className="h-6 w-6" />,
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Challenges',
    value: '18',
    change: '+15.3%',
    icon: <Trophy className="h-6 w-6" />,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Revenue',
    value: '$45,231',
    change: '+23.1%',
    icon: <DollarSign className="h-6 w-6" />,
    color: 'from-orange-500 to-orange-600',
  },
];

const navigationItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className="h-5 w-5" />,
    active: true,
  },
  {
    title: 'Activities',
    href: '/dashboard/activities',
    icon: <Activity className="h-5 w-5" />,
    submenu: [
      { title: 'Events', href: '/dashboard/activities/events' },
      { title: 'Challenges', href: '/dashboard/activities/challenges' },
      { title: 'Jobs', href: '/dashboard/activities/jobs' },
    ],
  },
  {
    title: 'Users',
    href: '/dashboard/users',
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: 'Store',
    href: '/dashboard/store',
    icon: <ShoppingBag className="h-5 w-5" />,
    submenu: [
      { title: 'Products', href: '/dashboard/store/products' },
      { title: 'Orders', href: '/dashboard/store/orders' },
      { title: 'Inventory', href: '/dashboard/store/inventory' },
    ],
  },
  {
    title: 'Content',
    href: '/dashboard/content',
    icon: <FileText className="h-5 w-5" />,
    submenu: [
      { title: 'Landing Page', href: '/dashboard/content/landing' },
      { title: 'Blogs', href: '/dashboard/content/blogs' },
      { title: 'Media', href: '/dashboard/content/media' },
    ],
  },
  {
    title: 'Analytics',
    href: '/dashboard/analytics',
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: <Settings className="h-5 w-5" />,
  },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleSubmenu = (title: string) => {
    setExpandedMenus((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title],
    );
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white/95 backdrop-blur-xl shadow-2xl border-r border-gray-200/50 transform transition-all duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-gray-200/50 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <LayoutDashboard className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Admin Panel</h1>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-8 px-4 space-y-2">
          {navigationItems.map((item) => (
            <div key={item.title} className="mb-2">
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleSubmenu(item.title)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-200 group"
                  >
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-blue-100 transition-colors">
                        {item.icon}
                      </div>
                      <span className="ml-3 font-medium">{item.title}</span>
                    </div>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedMenus.includes(item.title) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedMenus.includes(item.title) && (
                    <div className="ml-8 mt-2 space-y-1 border-l-2 border-blue-100 pl-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                    item.active
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      item.active
                        ? 'bg-white/20'
                        : 'bg-gray-100 group-hover:bg-blue-100'
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span className="ml-3 font-medium">{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 min-h-screen w-full lg:ml-72">
        {/* Top bar */}
        <div className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50 sticky top-0 z-30">
          <div className="flex items-center justify-between h-20 px-8">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-3 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Menu className="h-5 w-5" />
              </button>
              <div className="ml-2 lg:ml-0">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Dashboard Overview
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Monitor and manage your platform
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  System Online
                </span>
              </div>
              <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                <div className="text-sm font-medium text-gray-700">
                  Welcome, <span className="text-blue-600">Admin</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <UserCheck className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-8">
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">
                      {stat.value}
                    </p>
                    <div className="flex items-center mt-3">
                      <div className="flex items-center px-2 py-1 bg-green-100 rounded-full">
                        <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                        <span className="text-xs font-semibold text-green-600">
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    <div className="text-white">{stat.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">
                  Quick Actions
                </h3>
              </div>
              <div className="space-y-4">
                <Link href="/dashboard/(admins)/activities/events">
                  <Button className="w-full justify-start h-14 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 hover:from-blue-100 hover:to-blue-200 border border-blue-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="p-2 bg-blue-200 rounded-lg mr-3">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Create New Event</div>
                      <div className="text-xs text-blue-600">
                        Schedule community events
                      </div>
                    </div>
                  </Button>
                </Link>
                <Link href="/dashboard/(admins)/activities/challenges">
                  <Button className="w-full justify-start h-14 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 hover:from-purple-100 hover:to-purple-200 border border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="p-2 bg-purple-200 rounded-lg mr-3">
                      <Trophy className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Add Challenge</div>
                      <div className="text-xs text-purple-600">
                        Create coding challenges
                      </div>
                    </div>
                  </Button>
                </Link>
                <Link href="/dashboard/(admins)/store/products">
                  <Button className="w-full justify-start h-14 bg-gradient-to-r from-green-50 to-green-100 text-green-700 hover:from-green-100 hover:to-green-200 border border-green-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="p-2 bg-green-200 rounded-lg mr-3">
                      <ShoppingBag className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Manage Store</div>
                      <div className="text-xs text-green-600">
                        Handle products & orders
                      </div>
                    </div>
                  </Button>
                </Link>
                <Link href="/dashboard/(admins)/users">
                  <Button className="w-full justify-start h-14 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 hover:from-orange-100 hover:to-orange-200 border border-orange-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="p-2 bg-orange-200 rounded-lg mr-3">
                      <Users className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">User Management</div>
                      <div className="text-xs text-orange-600">
                        Manage user accounts
                      </div>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">
                  Recent Activity
                </h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-start space-x-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">
                      New user registered
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      john.doe@example.com joined the platform
                    </p>
                    <p className="text-xs text-blue-600 font-medium mt-1">
                      2 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-green-50/50 rounded-xl border border-green-100">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">
                      Event published
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      &quot;React Workshop&quot; is now live
                    </p>
                    <p className="text-xs text-green-600 font-medium mt-1">
                      15 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-purple-50/50 rounded-xl border border-purple-100">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">
                      Challenge completed
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      &quot;Algorithm Challenge #5&quot; solved by 12 users
                    </p>
                    <p className="text-xs text-purple-600 font-medium mt-1">
                      1 hour ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-orange-50/50 rounded-xl border border-orange-100">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">
                      New order received
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      T-shirt order #1234 from premium member
                    </p>
                    <p className="text-xs text-orange-600 font-medium mt-1">
                      3 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* System status */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-8">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 ml-4">
                System Status
              </h3>
              <div className="ml-auto flex items-center space-x-2 px-3 py-1 bg-green-100 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-green-700">
                  All Systems Operational
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group flex items-center justify-between p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-green-200 rounded-lg mr-3">
                      <Activity className="h-4 w-4 text-green-700" />
                    </div>
                    <p className="text-sm font-bold text-green-800">
                      Server Status
                    </p>
                  </div>
                  <p className="text-xs text-green-600 font-medium">
                    All systems operational
                  </p>
                  <div className="mt-2 flex items-center">
                    <div className="w-full bg-green-200 rounded-full h-1.5">
                      <div
                        className="bg-green-500 h-1.5 rounded-full"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                    <span className="text-xs text-green-600 ml-2 font-semibold">
                      100%
                    </span>
                  </div>
                </div>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
              </div>
              <div className="group flex items-center justify-between p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-blue-200 rounded-lg mr-3">
                      <Activity className="h-4 w-4 text-blue-700" />
                    </div>
                    <p className="text-sm font-bold text-blue-800">Database</p>
                  </div>
                  <p className="text-xs text-blue-600 font-medium">
                    Connected and healthy
                  </p>
                  <div className="mt-2 flex items-center">
                    <div className="w-full bg-blue-200 rounded-full h-1.5">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: '98%' }}
                      ></div>
                    </div>
                    <span className="text-xs text-blue-600 ml-2 font-semibold">
                      98%
                    </span>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
              </div>
              <div className="group flex items-center justify-between p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-purple-200 rounded-lg mr-3">
                      <Activity className="h-4 w-4 text-purple-700" />
                    </div>
                    <p className="text-sm font-bold text-purple-800">
                      API Services
                    </p>
                  </div>
                  <p className="text-xs text-purple-600 font-medium">
                    Running smoothly
                  </p>
                  <div className="mt-2 flex items-center">
                    <div className="w-full bg-purple-200 rounded-full h-1.5">
                      <div
                        className="bg-purple-500 h-1.5 rounded-full"
                        style={{ width: '95%' }}
                      ></div>
                    </div>
                    <span className="text-xs text-purple-600 ml-2 font-semibold">
                      95%
                    </span>
                  </div>
                </div>
                <div className="w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
