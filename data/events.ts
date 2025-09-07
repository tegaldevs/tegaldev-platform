export interface Event {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  date: string;
  time: string;
  location: string;
  type: 'workshop' | 'meetup' | 'conference' | 'webinar';
  attendees: number;
  maxAttendees: number;
  image: string;
  registrationUrl: string;
  agenda?: string[];
  speakers?: {
    name: string;
    title: string;
    bio: string;
    avatar?: string;
  }[];
  prerequisites?: string[];
  whatYouWillLearn?: string[];
  price?: {
    early: number;
    regular: number;
    student: number;
  };
}

export const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'React Advanced Workshop',
    description:
      'Deep dive into advanced React patterns, hooks, and performance optimization techniques.',
    fullDescription:
      'Join us for an intensive full-day workshop where we\'ll explore advanced React concepts that will take your development skills to the next level. This hands-on session covers modern React patterns, custom hooks, performance optimization, and best practices used in production applications.',
    date: '2025-11-15',
    time: '09:00 - 17:00',
    location: 'Tegal Tech Hub, Central Java',
    type: 'workshop',
    attendees: 25,
    maxAttendees: 30,
    image: '/placeholder-event.jpg',
    registrationUrl: 'https://eventbrite.com/tegaldev-react-workshop',
    agenda: [
      '09:00 - 09:30: Registration & Welcome Coffee',
      '09:30 - 11:00: Advanced React Patterns',
      '11:00 - 11:15: Break',
      '11:15 - 12:30: Custom Hooks Deep Dive',
      '12:30 - 13:30: Lunch Break',
      '13:30 - 15:00: Performance Optimization',
      '15:00 - 15:15: Break',
      '15:15 - 16:30: State Management Best Practices',
      '16:30 - 17:00: Q&A and Wrap-up'
    ],
    speakers: [
      {
        name: 'John Doe',
        title: 'Senior React Developer at TechCorp',
        bio: 'John has 8+ years of experience in React development and has contributed to several open-source projects.'
      },
      {
        name: 'Jane Smith',
        title: 'Frontend Architect at StartupXYZ',
        bio: 'Jane specializes in React performance optimization and has spoken at multiple tech conferences.'
      }
    ],
    prerequisites: [
      'Basic knowledge of React and JavaScript',
      'Familiarity with ES6+ features',
      'Experience with React hooks'
    ],
    whatYouWillLearn: [
      'Advanced React patterns (Render Props, HOCs, Compound Components)',
      'Creating custom hooks for complex logic',
      'Performance optimization techniques',
      'State management best practices',
      'Testing strategies for React applications'
    ],
    price: {
      early: 150000,
      regular: 200000,
      student: 100000
    }
  },
  {
    id: '2',
    title: 'Monthly Tech Meetup',
    description:
      'Join us for networking, tech talks, and community discussions about the latest in software development.',
    fullDescription:
      'Our monthly meetup brings together developers, designers, and tech enthusiasts from Tegal and surrounding areas. This month we\'ll be discussing the latest trends in web development, sharing experiences, and networking with fellow professionals.',
    date: '2024-02-20',
    time: '18:00 - 21:00',
    location: 'Coworking Space Tegal',
    type: 'meetup',
    attendees: 45,
    maxAttendees: 50,
    image: '/placeholder-event.jpg',
    registrationUrl: 'https://meetup.com/tegaldev',
    agenda: [
      '18:00 - 18:30: Registration & Networking',
      '18:30 - 19:00: Welcome & Community Updates',
      '19:00 - 19:30: Tech Talk: "Modern Web Development Trends"',
      '19:30 - 20:00: Lightning Talks',
      '20:00 - 21:00: Open Networking & Refreshments'
    ],
    speakers: [
      {
        name: 'Ahmad Rahman',
        title: 'Full Stack Developer at LocalTech',
        bio: 'Ahmad is passionate about modern web technologies and community building.'
      }
    ],
    whatYouWillLearn: [
      'Latest trends in web development',
      'Networking opportunities with local developers',
      'Community project updates',
      'Career insights and opportunities'
    ]
  },
  {
    id: '3',
    title: 'AI & Machine Learning Webinar',
    description:
      'Explore the fundamentals of AI and ML with practical examples and real-world applications.',
    fullDescription:
      'This comprehensive webinar will introduce you to the exciting world of Artificial Intelligence and Machine Learning. We\'ll cover fundamental concepts, practical applications, and provide hands-on examples that you can implement in your own projects.',
    date: '2024-02-25',
    time: '14:00 - 16:00',
    location: 'Online (Zoom)',
    type: 'webinar',
    attendees: 120,
    maxAttendees: 200,
    image: '/placeholder-event.jpg',
    registrationUrl: 'https://zoom.us/webinar/tegaldev-ai-ml',
    agenda: [
      '14:00 - 14:15: Welcome & Introduction',
      '14:15 - 14:45: AI & ML Fundamentals',
      '14:45 - 15:15: Practical Applications & Use Cases',
      '15:15 - 15:45: Hands-on Demo',
      '15:45 - 16:00: Q&A Session'
    ],
    speakers: [
      {
        name: 'Dr. Sarah Wilson',
        title: 'AI Research Scientist',
        bio: 'Dr. Wilson has published numerous papers on machine learning and has 10+ years of experience in AI research.'
      }
    ],
    prerequisites: [
      'Basic programming knowledge',
      'Understanding of mathematics and statistics'
    ],
    whatYouWillLearn: [
      'Fundamentals of AI and Machine Learning',
      'Common ML algorithms and their applications',
      'How to get started with ML projects',
      'Real-world use cases and examples'
    ]
  },
];

export const pastEvents: Event[] = [
  {
    id: '4',
    title: 'JavaScript Fundamentals Workshop',
    description:
      'A comprehensive workshop covering ES6+, async programming, and modern JavaScript development.',
    fullDescription:
      'This workshop covered the essential JavaScript concepts that every modern developer should know. Participants learned about ES6+ features, asynchronous programming, and best practices for JavaScript development.',
    date: '2024-01-15',
    time: '09:00 - 17:00',
    location: 'Tegal Tech Hub, Central Java',
    type: 'workshop',
    attendees: 28,
    maxAttendees: 30,
    image: '/placeholder-event.jpg',
    registrationUrl: '',
    agenda: [
      '09:00 - 10:30: ES6+ Features Overview',
      '10:30 - 12:00: Async Programming with Promises',
      '12:00 - 13:00: Lunch Break',
      '13:00 - 14:30: Modern JavaScript Tools',
      '14:30 - 16:00: Best Practices & Code Quality',
      '16:00 - 17:00: Project Workshop'
    ],
    whatYouWillLearn: [
      'ES6+ syntax and features',
      'Asynchronous programming concepts',
      'Modern JavaScript development tools',
      'Code quality and best practices'
    ]
  },
  {
    id: '5',
    title: 'New Year Tech Conference 2024',
    description:
      'Annual conference featuring industry leaders and emerging technologies.',
    fullDescription:
      'Our annual New Year Tech Conference brought together industry leaders, innovators, and tech enthusiasts to discuss the latest trends and technologies shaping the future of software development.',
    date: '2024-01-10',
    time: '08:00 - 18:00',
    location: 'Grand Ballroom, Tegal',
    type: 'conference',
    attendees: 150,
    maxAttendees: 150,
    image: '/placeholder-event.jpg',
    registrationUrl: '',
    agenda: [
      '08:00 - 09:00: Registration & Welcome Coffee',
      '09:00 - 10:00: Keynote: "The Future of Technology"',
      '10:00 - 11:30: Panel: "Emerging Technologies"',
      '11:30 - 12:30: Breakout Sessions',
      '12:30 - 13:30: Lunch & Networking',
      '13:30 - 15:00: Technical Workshops',
      '15:00 - 16:30: Innovation Showcase',
      '16:30 - 18:00: Closing Ceremony & Awards'
    ],
    speakers: [
      {
        name: 'Tech Industry Leaders',
        title: 'Various Companies',
        bio: 'Industry experts from leading technology companies shared their insights and experiences.'
      }
    ],
    whatYouWillLearn: [
      'Latest technology trends',
      'Industry insights and predictions',
      'Networking opportunities',
      'Innovation in tech industry'
    ]
  },
];

export const allEvents = [...upcomingEvents, ...pastEvents];

export function getEventById(id: string): Event | undefined {
  return allEvents.find(event => event.id === id);
}

export function getUpcomingEvents(): Event[] {
  return upcomingEvents;
}

export function getPastEvents(): Event[] {
  return pastEvents;
}