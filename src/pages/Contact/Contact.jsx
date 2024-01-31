import React from 'react';
import ContactInfo from './ContactInfo';

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
            <ContactInfo
              iconName="email"
              label="Email"
              link="mailto:Bogdan.nikolov4@outlook.com"
              text="Bogdan.Nikolov4@Outlook.com"
            />
            <ContactInfo
              iconName="linkedin"
              label="LinkedIn"
              link="https://www.linkedin.com/in/bogdan-nikolov-0b34b71bb/"
              text="Bogdan Nikolov"
            />
            <ContactInfo
              iconName="git"
              label="GitHub"
              link="https://github.com/bnn16"
              text="bnn16"
            />
            <p className="text-center">Thank you for reaching out!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
