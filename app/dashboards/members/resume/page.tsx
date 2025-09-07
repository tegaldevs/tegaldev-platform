'use client';

import React, { useState } from 'react';
import {
  FileText,
  Plus,
  Edit3,
  Download,
  Eye,
  Trash2,
  Copy,
  Star,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Languages,
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Save,
  X,
} from 'lucide-react';

interface Resume {
  id: string;
  name: string;
  template: string;
  lastModified: string;
  isDefault: boolean;
  completeness: number;
}

interface ResumeSection {
  id: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isRequired: boolean;
  isCompleted: boolean;
}

const mockResumes: Resume[] = [
  {
    id: '1',
    name: 'Software Developer Resume',
    template: 'Modern',
    lastModified: '2024-01-15',
    isDefault: true,
    completeness: 85,
  },
  {
    id: '2',
    name: 'Frontend Specialist',
    template: 'Creative',
    lastModified: '2024-01-10',
    isDefault: false,
    completeness: 70,
  },
];

const resumeSections: ResumeSection[] = [
  {
    id: 'personal',
    title: 'Personal Information',
    icon: User,
    isRequired: true,
    isCompleted: true,
  },
  {
    id: 'summary',
    title: 'Professional Summary',
    icon: FileText,
    isRequired: true,
    isCompleted: true,
  },
  {
    id: 'experience',
    title: 'Work Experience',
    icon: Briefcase,
    isRequired: true,
    isCompleted: true,
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    isRequired: true,
    isCompleted: false,
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: Code,
    isRequired: true,
    isCompleted: true,
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: Award,
    isRequired: false,
    isCompleted: false,
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: Languages,
    isRequired: false,
    isCompleted: false,
  },
];

export default function ResumePage() {
  const [resumes, setResumes] = useState<Resume[]>(mockResumes);
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null);
  const [isBuilding, setIsBuilding] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newResumeName, setNewResumeName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('Modern');

  const templates = [
    {
      id: 'Modern',
      name: 'Modern',
      description: 'Clean and professional design',
    },
    {
      id: 'Creative',
      name: 'Creative',
      description: 'Colorful and eye-catching',
    },
    { id: 'Classic', name: 'Classic', description: 'Traditional and formal' },
    { id: 'Minimal', name: 'Minimal', description: 'Simple and elegant' },
  ];

  const handleCreateResume = () => {
    if (!newResumeName.trim()) return;

    const newResume: Resume = {
      id: Date.now().toString(),
      name: newResumeName,
      template: selectedTemplate,
      lastModified: new Date().toISOString().split('T')[0],
      isDefault: resumes.length === 0,
      completeness: 0,
    };

    setResumes([...resumes, newResume]);
    setNewResumeName('');
    setShowCreateModal(false);
    setSelectedResume(newResume);
    setIsBuilding(true);
  };

  const handleDeleteResume = (id: string) => {
    setResumes(resumes.filter((resume) => resume.id !== id));
  };

  const handleDuplicateResume = (resume: Resume) => {
    const duplicated: Resume = {
      ...resume,
      id: Date.now().toString(),
      name: `${resume.name} (Copy)`,
      isDefault: false,
    };
    setResumes([...resumes, duplicated]);
  };

  if (isBuilding && selectedResume) {
    return (
      <div className="space-y-6">
        {/* Builder Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">{selectedResume.name}</h1>
              <p className="text-green-100">
                Template: {selectedResume.template}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition-colors flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>Preview</span>
              </button>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition-colors flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download</span>
              </button>
              <button
                onClick={() => setIsBuilding(false)}
                className="bg-white text-green-600 hover:bg-green-50 px-4 py-2 rounded-xl transition-colors flex items-center space-x-2 font-medium"
              >
                <X className="h-4 w-4" />
                <span>Back to List</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sections List */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Resume Sections</h2>
              <div className="space-y-3">
                {resumeSections.map((section) => (
                  <div
                    key={section.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      section.isCompleted
                        ? 'bg-green-50 border-green-200 hover:bg-green-100'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <section.icon
                          className={`h-5 w-5 ${
                            section.isCompleted
                              ? 'text-green-600'
                              : 'text-gray-400'
                          }`}
                        />
                        <div>
                          <p className="font-medium text-sm">{section.title}</p>
                          {section.isRequired && (
                            <p className="text-xs text-red-500">Required</p>
                          )}
                        </div>
                      </div>
                      <div
                        className={`w-3 h-3 rounded-full ${
                          section.isCompleted ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-900">
                    Completeness
                  </span>
                  <span className="text-sm font-bold text-blue-900">
                    {selectedResume.completeness}%
                  </span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${selectedResume.completeness}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Editor */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Personal Information</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-colors flex items-center space-x-2">
                  <Save className="h-4 w-4" />
                  <span>Save Section</span>
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="San Francisco, CA"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website/Portfolio
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="url"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://johndoe.dev"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Professional Title *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Senior Full Stack Developer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Resume Builder</h1>
            <p className="text-purple-100">
              Create professional resumes that stand out to employers
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-xl transition-colors flex items-center space-x-2 font-medium"
          >
            <Plus className="h-5 w-5" />
            <span>Create New Resume</span>
          </button>
        </div>
      </div>

      {/* Resume Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumes.map((resume) => (
          <div
            key={resume.id}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{resume.name}</h3>
                  <p className="text-sm text-gray-500">
                    {resume.template} Template
                  </p>
                </div>
              </div>
              {resume.isDefault && (
                <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-lg text-xs font-medium flex items-center space-x-1">
                  <Star className="h-3 w-3" />
                  <span>Default</span>
                </div>
              )}
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Completeness</span>
                <span className="text-sm font-medium text-gray-900">
                  {resume.completeness}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${resume.completeness}%` }}
                />
              </div>
            </div>

            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="h-4 w-4 mr-1" />
              <span>
                Modified {new Date(resume.lastModified).toLocaleDateString()}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  setSelectedResume(resume);
                  setIsBuilding(true);
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <Edit3 className="h-4 w-4" />
                <span>Edit</span>
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-xl transition-colors">
                <Eye className="h-4 w-4" />
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-xl transition-colors">
                <Download className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleDuplicateResume(resume)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-xl transition-colors"
              >
                <Copy className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleDeleteResume(resume.id)}
                className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded-xl transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Resume Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Create New Resume
              </h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume Name
                </label>
                <input
                  type="text"
                  value={newResumeName}
                  onChange={(e) => setNewResumeName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Software Developer Resume"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Choose Template
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => setSelectedTemplate(template.id)}
                      className={`p-4 border-2 rounded-xl text-left transition-colors ${
                        selectedTemplate === template.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h3 className="font-medium text-gray-900">
                        {template.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {template.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 mt-8">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-xl transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateResume}
                disabled={!newResumeName.trim()}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-4 py-3 rounded-xl transition-colors font-medium"
              >
                Create Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
