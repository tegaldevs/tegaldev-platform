'use client';

import { useState } from 'react';
import {
  User,
  Bell,
  Shield,
  Palette,
  Key,
  Smartphone,
  Eye,
  EyeOff,
  Save,
  Trash2,
  Download,
  Upload,
  AlertTriangle,
  Moon,
  Sun,
  Monitor,
  Lock,
  Unlock,
  Settings as SettingsIcon,
  HelpCircle,
} from 'lucide-react';

interface NotificationSettings {
  email: {
    newFollowers: boolean;
    contentLikes: boolean;
    contentComments: boolean;
    weeklyDigest: boolean;
    platformUpdates: boolean;
  };
  push: {
    newFollowers: boolean;
    contentLikes: boolean;
    contentComments: boolean;
    liveStreamReminders: boolean;
  };
}

interface PrivacySettings {
  profileVisibility: 'public' | 'members' | 'private';
  showEmail: boolean;
  showSocialLinks: boolean;
  showContributions: boolean;
  allowDirectMessages: boolean;
  showOnlineStatus: boolean;
}

interface SecuritySettings {
  twoFactorEnabled: boolean;
  loginAlerts: boolean;
  sessionTimeout: number;
  trustedDevices: Array<{
    id: string;
    name: string;
    lastUsed: string;
    location: string;
  }>;
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [language, setLanguage] = useState('en');
  const [timezone, setTimezone] = useState('UTC');

  const [notifications, setNotifications] = useState<NotificationSettings>({
    email: {
      newFollowers: true,
      contentLikes: true,
      contentComments: true,
      weeklyDigest: true,
      platformUpdates: true,
    },
    push: {
      newFollowers: true,
      contentLikes: false,
      contentComments: true,
      liveStreamReminders: true,
    },
  });

  const [privacy, setPrivacy] = useState<PrivacySettings>({
    profileVisibility: 'public',
    showEmail: false,
    showSocialLinks: true,
    showContributions: true,
    allowDirectMessages: true,
    showOnlineStatus: true,
  });

  const [security, setSecurity] = useState<SecuritySettings>({
    twoFactorEnabled: false,
    loginAlerts: true,
    sessionTimeout: 30,
    trustedDevices: [
      {
        id: '1',
        name: 'Chrome on Windows',
        lastUsed: '2024-01-15 10:30 AM',
        location: 'Jakarta, Indonesia',
      },
      {
        id: '2',
        name: 'Safari on iPhone',
        lastUsed: '2024-01-14 08:15 PM',
        location: 'Jakarta, Indonesia',
      },
    ],
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'security', label: 'Security', icon: Key },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'account', label: 'Account', icon: SettingsIcon },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'id', name: 'Bahasa Indonesia' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'zh', name: '中文' },
  ];

  const timezones = [
    'UTC',
    'Asia/Jakarta',
    'Asia/Tokyo',
    'Europe/London',
    'Europe/Paris',
    'America/New_York',
    'America/Los_Angeles',
    'Australia/Sydney',
  ];

  const handleNotificationChange = (
    category: 'email' | 'push',
    setting: string,
    value: boolean,
  ) => {
    setNotifications((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value,
      },
    }));
  };

  const handlePrivacyChange = (
    setting: keyof PrivacySettings,
    value: boolean | string,
  ) => {
    setPrivacy((prev) => ({
      ...prev,
      [setting]: value,
    }));
  };

  const handleSecurityChange = (
    setting: keyof SecuritySettings,
    value: boolean | number,
  ) => {
    setSecurity((prev) => ({
      ...prev,
      [setting]: value,
    }));
  };

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Basic Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              defaultValue="johndoe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue="john@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              defaultValue="+62 812 3456 7890"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio
          </label>
          <textarea
            rows={4}
            defaultValue="Full-stack developer passionate about creating amazing user experiences and contributing to the tech community."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Change Password
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Email Notifications
        </h3>
        <div className="space-y-4">
          {Object.entries(notifications.email).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">
                  {key
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, (str) => str.toUpperCase())}
                </p>
                <p className="text-sm text-gray-500">
                  {key === 'newFollowers' &&
                    'Get notified when someone follows you'}
                  {key === 'contentLikes' &&
                    'Get notified when someone likes your content'}
                  {key === 'contentComments' &&
                    'Get notified when someone comments on your content'}
                  {key === 'weeklyDigest' &&
                    'Receive a weekly summary of your activity'}
                  {key === 'platformUpdates' &&
                    'Get notified about platform updates and news'}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) =>
                    handleNotificationChange('email', key, e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Push Notifications
        </h3>
        <div className="space-y-4">
          {Object.entries(notifications.push).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">
                  {key
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, (str) => str.toUpperCase())}
                </p>
                <p className="text-sm text-gray-500">
                  {key === 'newFollowers' &&
                    'Get push notifications for new followers'}
                  {key === 'contentLikes' &&
                    'Get push notifications for content likes'}
                  {key === 'contentComments' &&
                    'Get push notifications for comments'}
                  {key === 'liveStreamReminders' &&
                    'Get reminders for upcoming live streams'}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) =>
                    handleNotificationChange('push', key, e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Profile Visibility
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Who can see your profile?
            </label>
            <select
              value={privacy.profileVisibility}
              onChange={(e) =>
                handlePrivacyChange('profileVisibility', e.target.value)
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="public">Everyone (Public)</option>
              <option value="members">Members Only</option>
              <option value="private">Only Me (Private)</option>
            </select>
          </div>

          {Object.entries(privacy)
            .filter(([key]) => key !== 'profileVisibility')
            .map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">
                    {key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, (str) => str.toUpperCase())}
                  </p>
                  <p className="text-sm text-gray-500">
                    {key === 'showEmail' &&
                      'Display your email address on your profile'}
                    {key === 'showSocialLinks' &&
                      'Display your social media links'}
                    {key === 'showContributions' &&
                      'Display your contribution history'}
                    {key === 'allowDirectMessages' &&
                      'Allow other members to send you direct messages'}
                    {key === 'showOnlineStatus' && 'Show when you are online'}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value as boolean}
                    onChange={(e) =>
                      handlePrivacyChange(
                        key as keyof PrivacySettings,
                        e.target.checked,
                      )
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-600"></div>
                </label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Two-Factor Authentication
        </h3>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-medium text-gray-900">Enable 2FA</p>
            <p className="text-sm text-gray-500">
              Add an extra layer of security to your account
            </p>
          </div>
          <button
            onClick={() =>
              handleSecurityChange(
                'twoFactorEnabled',
                !security.twoFactorEnabled,
              )
            }
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              security.twoFactorEnabled
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-yellow-600 text-white hover:bg-yellow-700'
            }`}
          >
            {security.twoFactorEnabled ? (
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4" />
                <span>Enabled</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Unlock className="h-4 w-4" />
                <span>Enable</span>
              </div>
            )}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">Login Alerts</p>
            <p className="text-sm text-gray-500">
              Get notified of new login attempts
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={security.loginAlerts}
              onChange={(e) =>
                handleSecurityChange('loginAlerts', e.target.checked)
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-600"></div>
          </label>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Trusted Devices
        </h3>
        <div className="space-y-4">
          {security.trustedDevices.map((device) => (
            <div
              key={device.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{device.name}</p>
                  <p className="text-sm text-gray-500">{device.location}</p>
                  <p className="text-xs text-gray-400">
                    Last used: {device.lastUsed}
                  </p>
                </div>
              </div>
              <button className="text-red-600 hover:text-red-700 transition-colors">
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Theme</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { id: 'light', label: 'Light', icon: Sun },
            { id: 'dark', label: 'Dark', icon: Moon },
            { id: 'system', label: 'System', icon: Monitor },
          ].map((themeOption) => {
            const Icon = themeOption.icon;
            const isActive = theme === themeOption.id;
            return (
              <button
                key={themeOption.id}
                onClick={() =>
                  setTheme(themeOption.id as 'light' | 'dark' | 'system')
                }
                className={`p-4 rounded-xl border-2 transition-all ${
                  isActive
                    ? 'border-yellow-500 bg-yellow-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon
                  className={`h-8 w-8 mx-auto mb-2 ${
                    isActive ? 'text-yellow-600' : 'text-gray-400'
                  }`}
                />
                <p
                  className={`font-medium ${
                    isActive ? 'text-yellow-900' : 'text-gray-700'
                  }`}
                >
                  {themeOption.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Language & Region
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timezone
            </label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              {timezones.map((tz) => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAccountSettings = () => (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Data Management
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Download className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Export Data</p>
                <p className="text-sm text-gray-500">
                  Download all your data in JSON format
                </p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Export
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Upload className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">Import Data</p>
                <p className="text-sm text-gray-500">
                  Import your data from another platform
                </p>
              </div>
            </div>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Import
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-red-200/50 shadow-lg">
        <h3 className="text-lg font-semibold text-red-900 mb-4">Danger Zone</h3>
        <div className="space-y-4">
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-red-900">Delete Account</p>
                <p className="text-sm text-red-700 mb-3">
                  Permanently delete your account and all associated data. This
                  action cannot be undone.
                </p>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfileSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'privacy':
        return renderPrivacySettings();
      case 'security':
        return renderSecuritySettings();
      case 'appearance':
        return renderAppearanceSettings();
      case 'account':
        return renderAccountSettings();
      default:
        return renderProfileSettings();
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-gray-200">
              Manage your account preferences and privacy settings
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <HelpCircle className="h-5 w-5" />
              <span>Help</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 rounded-lg hover:bg-yellow-700 transition-colors">
              <Save className="h-5 w-5" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg sticky top-8">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                      isActive
                        ? 'bg-yellow-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">{renderTabContent()}</div>
      </div>
    </div>
  );
}
