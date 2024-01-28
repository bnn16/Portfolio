import React from 'react';
import {
  DiGo, DiJava, DiJavascript1, DiPython,
} from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';

const projectData = [
  {
    title: 'Portfolio',
    icon: <FaReact />,
    id: 'portfolio',
  },
  {
    title: 'Ordina Check-in/out',
    icon: <DiJavascript1 />,
    id: 'ordina',
  },

  {
    title: 'Youtubey',
    icon: <DiJava />,
    id: 'youtubey',
  },
  {
    title: 'gRPC and RabbitMQ',
    icon: <DiGo />,
    id: 'grpc',
  },
  {
    title: 'Stack WebScraper',
    icon: <DiPython />,
    id: 'webscraper',
  },
  {
    title: 'Event Platform',
    icon: <SiDotnet />,
    id: 'eventplatform',
  },
];

export default projectData;
