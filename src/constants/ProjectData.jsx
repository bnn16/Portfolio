import React from 'react';
import {
  DiGo, DiJava, DiJavascript1, DiPython,
} from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';

const projectDataShort = [
  {
    title: 'Portfolio',
    icon: <FaReact />,
    id: 'portfolio',
    tags: ['React', 'TailwindCSS', 'Algorithms'],
  },
  {
    title: 'Ordina Check-in/out',
    icon: <DiJavascript1 />,
    id: 'ordina',
    tags: ['React', 'TailwindCSS', 'Design', 'UX', 'NodeJS', 'Express', 'MongoDB', 'Fontys'],
  },

  {
    title: 'Youtubey',
    icon: <DiJava />,
    id: 'youtubey',
    tags: ['Java', 'Microservices', 'Spring Boot', 'MongoDB', 'NodeJS', 'Python', 'SCRUM', 'Agile', 'Fontys'],
  },
  {
    title: 'gRPC and RabbitMQ',
    icon: <DiGo />,
    id: 'grpc',
    tags: ['Go', 'gRPC', 'RabbitMQ', 'Microservices'],
  },
  {
    title: 'Stack WebScraper',
    icon: <DiPython />,
    id: 'webscraper',
    tags: ['Python', 'BeautifulSoup', 'WebScraping'],
  },
  {
    title: 'Event Platform',
    icon: <SiDotnet />,
    id: 'eventplatform',
    tags: ['C#', '.NET', 'SQL', 'SCRUM', 'Agile', 'Fontys'],
  },
];

export default projectDataShort;
