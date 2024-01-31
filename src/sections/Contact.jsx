import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer
      id="contact"
      className="w-full max-h-3/6 py-12 md:py-24 lg:py-32 flex justify-center items-center absolute"
      style={{ backgroundColor: '#2D2B27', zIndex: 10 }}
    >
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Contact
            {' '}
            <span className="text-flame">Me</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 md:space-x-8">
              <FaEnvelope className="text-xl text-gray-700" />
              <span>Email:</span>
              <a
                href="mailto:Bogdan.nikolov4@outlook.com"
                className="text-flame hover:underline"
              >
                Bogdan.Nikolov4@Outlook.com
              </a>
            </div>
            <div className="flex items-center space-x-4 md:space-x-8">
              <FaLinkedin className="text-xl text-gray-700" />
              <span>LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/bogdan-nikolov-0b34b71bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-flame hover:underline"
              >
                Bogdan Nikolov
              </a>
            </div>
            <div className="flex items-center space-x-4 md:space-x-8">
              <FaGithub className="text-xl text-gray-700" />
              <span>GitHub:</span>
              <a
                href="https://github.com/bnn16"
                target="_blank"
                rel="noopener noreferrer"
                className="text-flame hover:underline"
              >
                bnn16
              </a>
            </div>
            <p className="text-center">Thank you for reaching out!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
