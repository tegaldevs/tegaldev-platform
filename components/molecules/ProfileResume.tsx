'use client';

import {
  Award,
  Briefcase,
  Calendar,
  Code,
  Download,
  ExternalLink,
  GraduationCap,
} from 'lucide-react';

import { type UserResume } from '@/data/profile';

interface ProfileResumeProps {
  resume: UserResume;
}

export function ProfileResume({ resume }: ProfileResumeProps) {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };



  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
      <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Resume</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm font-medium">
          <Download className="h-4 w-4" />
          Download PDF
        </button>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">Professional Summary</h3>
        <p className="text-gray-300 leading-relaxed">{resume.summary}</p>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="h-5 w-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Work Experience</h3>
        </div>
        <div className="space-y-6">
          {resume.experience.map((exp, index) => (
            <div key={`${exp.company}-${exp.position}-${index}`} className="relative pl-6 border-l-2 border-blue-400/50">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full" />
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="font-semibold text-white">{exp.position}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-medium text-blue-400">{exp.company}</span>
                </div>
                <p className="text-gray-300 mb-3">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="h-5 w-5 text-green-400" />
          <h3 className="text-lg font-semibold text-white">Education</h3>
        </div>
        <div className="space-y-4">
          {resume.education.map((edu, index) => (
            <div key={`${edu.institution}-${edu.degree}-${index}`} className="bg-white/10 rounded-lg p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="font-semibold text-white">{edu.degree}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium text-green-400">{edu.institution}</span>
              </div>
              {edu.gpa && (
                <p className="text-sm text-gray-300">GPA: {edu.gpa}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Code className="h-5 w-5 text-purple-400" />
          <h3 className="text-lg font-semibold text-white">Technical Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {resume.skills.map((skill, index) => (
            <span
              key={`skill-${skill}-${index}`}
              className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-sm text-gray-300 hover:bg-purple-400/20 hover:border-purple-400/50 transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Certifications */}
      {resume.certifications && resume.certifications.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-5 w-5 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resume.certifications.map((cert, index) => (
              <div key={`${cert.name}-${cert.issuer}-${index}`} className="bg-white/10 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-white">{cert.name}</h4>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="text-orange-400 font-medium mb-1">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Calendar className="h-3 w-3" />
                  <span>Issued {formatDate(cert.issueDate)}</span>
                  {cert.expiryDate && (
                    <>
                      <span className="text-gray-400">•</span>
                      <span>Expires {formatDate(cert.expiryDate)}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}