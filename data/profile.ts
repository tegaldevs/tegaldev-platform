export interface UserProfile {
  id: string;
  username: string;
  name: string;
  email: string;
  avatar?: string;
  bio: string;
  location: string;
  website?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  joinDate: string;
  lastActive: string;
  role: 'admin' | 'member' | 'moderator';
  status: 'active' | 'inactive';
  isPublic: boolean;
  stats: UserStats;
  resume: UserResume;
  contributions: UserContribution[];
  events: UserEvent[];
  challenges: UserChallenge[];
}

export interface UserStats {
  totalContributions: number;
  blogPosts: number;
  videos: number;
  podcasts: number;
  eventsAttended: number;
  challengesCompleted: number;
  followers: number;
  following: number;
  totalViews: number;
  totalLikes: number;
}

export interface UserResume {
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  certifications: Certification[];
  projects: Project[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  url?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  startDate: string;
  endDate?: string;
}

export interface UserContribution {
  id: string;
  type: 'blog' | 'video' | 'podcast';
  title: string;
  description: string;
  publishedAt: string;
  url: string;
  thumbnail?: string;
  views: number;
  likes: number;
  tags: string[];
}

export interface UserEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: 'workshop' | 'conference' | 'meetup' | 'webinar';
  role: 'attendee' | 'speaker' | 'organizer';
  certificate?: string;
}

export interface UserChallenge {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completedAt: string;
  score?: number;
  rank?: number;
  certificate?: string;
  githubUrl?: string;
}

// Mock data
export const mockUserStats: UserStats = {
  totalContributions: 45,
  blogPosts: 12,
  videos: 8,
  podcasts: 5,
  eventsAttended: 15,
  challengesCompleted: 8,
  followers: 234,
  following: 89,
  totalViews: 12500,
  totalLikes: 890,
};

export const mockUserResume: UserResume = {
  summary: 'Experienced full-stack developer with expertise in modern web technologies and cloud platforms. Passionate about creating scalable applications and mentoring junior developers.',
  experience: [
    {
      id: '1',
      company: 'TechCorp Inc.',
      position: 'Senior Full Stack Developer',
      startDate: '2022-03-01',
      description: 'Led development of microservices architecture, mentored junior developers, and implemented CI/CD pipelines.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    },
    {
      id: '2',
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      startDate: '2020-06-01',
      endDate: '2022-02-28',
      description: 'Built and maintained web applications, integrated third-party APIs, and optimized database performance.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'Kubernetes'],
    },
  ],
  education: [
    {
      id: '1',
      institution: 'University of Indonesia',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2016-09-01',
      endDate: '2020-06-01',
      gpa: '3.8/4.0',
    },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'AWS',
    'Docker',
    'Kubernetes',
    'PostgreSQL',
    'MongoDB',
  ],
  certifications: [
    {
      id: '1',
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      issueDate: '2023-06-15',
      expiryDate: '2026-06-15',
      credentialId: 'AWS-SAA-123456',
    },
  ],
  projects: [
    {
      id: '1',
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce platform with payment integration and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/johndoe/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.johndoe.dev',
      startDate: '2023-01-01',
      endDate: '2023-04-01',
    },
  ],
};

export const mockUserContributions: UserContribution[] = [
  {
    id: '1',
    type: 'blog',
    title: 'Building Scalable React Applications',
    description: 'Learn best practices for structuring React applications for scalability.',
    publishedAt: '2024-01-15',
    url: 'https://medium.com/@johndoe/scalable-react',
    views: 2500,
    likes: 89,
    tags: ['React', 'JavaScript', 'Architecture'],
  },
  {
    id: '2',
    type: 'video',
    title: 'Node.js Performance Optimization',
    description: 'Tips and tricks for optimizing Node.js application performance.',
    publishedAt: '2024-01-10',
    url: 'https://youtube.com/watch?v=example',
    views: 1800,
    likes: 67,
    tags: ['Node.js', 'Performance', 'Backend'],
  },
];

export const mockUserEvents: UserEvent[] = [
  {
    id: '1',
    title: 'React Indonesia Meetup',
    description: 'Monthly meetup for React developers in Indonesia.',
    date: '2024-01-15',
    location: 'Jakarta, Indonesia',
    type: 'meetup',
    role: 'speaker',
  },
  {
    id: '2',
    title: 'DevFest 2023',
    description: 'Annual developer festival with workshops and talks.',
    date: '2023-11-20',
    location: 'Bandung, Indonesia',
    type: 'conference',
    role: 'attendee',
  },
];

export const mockUserChallenges: UserChallenge[] = [
  {
    id: '1',
    title: 'Full Stack Web Development Challenge',
    description: 'Build a complete web application with authentication and database.',
    category: 'Web Development',
    difficulty: 'intermediate',
    completedAt: '2024-01-10',
    score: 95,
    rank: 3,
    githubUrl: 'https://github.com/johndoe/fullstack-challenge',
  },
  {
    id: '2',
    title: 'Algorithm and Data Structure Challenge',
    description: 'Solve complex algorithmic problems using optimal solutions.',
    category: 'Algorithms',
    difficulty: 'advanced',
    completedAt: '2023-12-15',
    score: 88,
    rank: 7,
  },
];

export const mockUserProfile: UserProfile = {
  id: '1',
  username: 'johndoe',
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: '/placeholder-avatar.jpg',
  bio: 'Passionate full-stack developer with 5+ years of experience in React, Node.js, and cloud technologies. Love sharing knowledge through blogs and videos.',
  location: 'Jakarta, Indonesia',
  website: 'https://johndoe.dev',
  github: 'johndoe',
  linkedin: 'john-doe-dev',
  twitter: 'johndoe_dev',
  joinDate: '2023-01-15',
  lastActive: '2024-01-20',
  role: 'member',
  status: 'active',
  isPublic: true,
  stats: mockUserStats,
  resume: mockUserResume,
  contributions: mockUserContributions,
  events: mockUserEvents,
  challenges: mockUserChallenges,
};