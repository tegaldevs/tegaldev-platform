'use client';

import { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Save,
  Camera,
  Edit3,
} from 'lucide-react';

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  jobTitle: string;
  company: string;
  website: string;
  github: string;
  linkedin: string;
  twitter: string;
  birthDate: string;
  joinDate: string;
}

const initialProfile: ProfileData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  bio: 'Passionate full-stack developer with 5+ years of experience in React, Node.js, and cloud technologies. Love sharing knowledge through blogs and videos.',
  jobTitle: 'Senior Full Stack Developer',
  company: 'TechCorp Inc.',
  website: 'https://johndoe.dev',
  github: 'johndoe',
  linkedin: 'john-doe-dev',
  twitter: 'johndoe_dev',
  birthDate: '1990-05-15',
  joinDate: '2023-01-15',
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<ProfileData>(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<
    'personal' | 'professional' | 'social'
  >('personal');

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Here you would typically save to your backend
    console.log('Saving profile:', profile);
    setIsEditing(false);
  };

  const tabs = [
    { id: 'personal' as const, label: 'Personal Info', icon: User },
    { id: 'professional' as const, label: 'Professional', icon: Briefcase },
    { id: 'social' as const, label: 'Social Links', icon: Globe },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Profile Management</h1>
            <p className="text-blue-100">
              Keep your information up to date and showcase your expertise
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition-colors flex items-center space-x-2"
            >
              <Edit3 className="h-4 w-4" />
              <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
            </button>
            {isEditing && (
              <button
                onClick={handleSave}
                className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl transition-colors flex items-center space-x-2 font-medium"
              >
                <Save className="h-4 w-4" />
                <span>Save Changes</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Profile Picture & Quick Stats */}
        <div className="lg:col-span-1">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
            {/* Profile Picture */}
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-16 w-16 text-white" />
                </div>
                {isEditing && (
                  <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
                    <Camera className="h-4 w-4 text-gray-600" />
                  </button>
                )}
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                {profile.firstName} {profile.lastName}
              </h2>
              <p className="text-gray-600">{profile.jobTitle}</p>
              <p className="text-sm text-gray-500">{profile.company}</p>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                <span>
                  Joined {new Date(profile.joinDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="lg:col-span-3">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {/* Personal Info Tab */}
              {activeTab === 'personal' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={profile.firstName}
                        onChange={(e) =>
                          handleInputChange('firstName', e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={profile.lastName}
                        onChange={(e) =>
                          handleInputChange('lastName', e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          value={profile.email}
                          onChange={(e) =>
                            handleInputChange('email', e.target.value)
                          }
                          disabled={!isEditing}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          value={profile.phone}
                          onChange={(e) =>
                            handleInputChange('phone', e.target.value)
                          }
                          disabled={!isEditing}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          value={profile.location}
                          onChange={(e) =>
                            handleInputChange('location', e.target.value)
                          }
                          disabled={!isEditing}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Birth Date
                      </label>
                      <input
                        type="date"
                        value={profile.birthDate}
                        onChange={(e) =>
                          handleInputChange('birthDate', e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      value={profile.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      disabled={!isEditing}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </div>
              )}

              {/* Professional Tab */}
              {activeTab === 'professional' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        value={profile.jobTitle}
                        onChange={(e) =>
                          handleInputChange('jobTitle', e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={profile.company}
                        onChange={(e) =>
                          handleInputChange('company', e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="url"
                        value={profile.website}
                        onChange={(e) =>
                          handleInputChange('website', e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Social Links Tab */}
              {activeTab === 'social' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GitHub Username
                    </label>
                    <div className="relative">
                      <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        value={profile.github}
                        onChange={(e) =>
                          handleInputChange('github', e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder="username"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn Profile
                    </label>
                    <div className="relative">
                      <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        value={profile.linkedin}
                        onChange={(e) =>
                          handleInputChange('linkedin', e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder="your-profile-name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Twitter Handle
                    </label>
                    <div className="relative">
                      <Twitter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        value={profile.twitter}
                        onChange={(e) =>
                          handleInputChange('twitter', e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder="@username"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
