import React from 'react';
import Badge from '../components/Badge';
import Reveal from '../components/Reveal';

function Experience() {
  return (
    <div className="min-h-screen z-10 text-accent">
      <div className="p-10 flex flex-col">
        <div className="md:flex">
          <Reveal>
            <h1 className="text-5xl font-bold underline-offset-6 underline decoration-flame">
              Experience.
            </h1>
          </Reveal>
        </div>
        <div className="mt-6 space-y-12 w-full flex flex-col justify-center">
          <div>
            <div className="flex justify-between items-center">
              <Reveal>
                <h2 className="text-3xl font-semibold">
                  Fontys University of Applied Sciences
                </h2>
              </Reveal>
              <Reveal>
                <div className="text-right">
                  <div className="text-lg font-medium">2022 - Present</div>
                  <div className="text-sm">Eindhoven</div>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <h3 className="text-xl font-medium mt-2">
                ICT Software Engineering and Cybersecurity
              </h3>
            </Reveal>
            <Reveal>
              <p className="mt-2">
                I am currently studying ICT Software Engineering and
                Cybersecurity at Fontys University of Applied Sciences. I am in
                my second year of studies and I am enjoying it a lot.
                <br />
                I made a project for a company called Ordina, which is a web
                application that allows their employees to check-in and
                check-out of which office they are working and going to work
                from.
              </p>
            </Reveal>
            <Reveal>
              <div className="flex flex-wrap gap-4 mt-4">
                <Badge text="React" />
                <Badge text="NodeJS" />
                <Badge text="Python" />
                <Badge text="C#" />
                <Badge text="MySQL" />
                <Badge text="MongoDB" />
                <Badge text="TailwindCSS" />
                <Badge text="SCRUM" />
              </div>
            </Reveal>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <Reveal>
                <h2 className="text-3xl font-semibold">Releva AI</h2>
              </Reveal>
              <Reveal>
                <div className="text-right">
                  <div className="text-lg font-medium"> 06.2021 - 09.2021</div>
                  <div className="text-sm">Sofia</div>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <h3 className="text-xl font-medium mt-2">
                Software Engineering Intern
              </h3>
            </Reveal>
            <Reveal>
              <p className="mt-2">
                It was my first ever real life working experience. I was working
                on a feature that allowed customers to send out personalized
                emails to their customers. I was working with React, NodeJS and
                AWS. My main task was to refactor the existing code from OOP to
                FP. I got to learn a lot about functional programming as well as
                how to work in a team.
              </p>
            </Reveal>
            <Reveal>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge text="React" />
                <Badge text="NodeJS" />
                <Badge text="AWS" />
                <Badge text="JavaScript" />
              </div>
            </Reveal>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <Reveal>
                <h2 className="text-2xl font-semibold">
                  Vocational High School of Electronics John Atanasoff
                </h2>
              </Reveal>
              <Reveal>
                <div className="text-right">
                  <div className="text-lg font-medium">2017 - 2022</div>
                  <div className="text-sm">Sofia</div>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <h3 className="text-xl font-medium mt-2">
                Computer Technology / Computer Systems Technology
              </h3>
            </Reveal>
            <Reveal>
              <p className="mt-2">
                For my graduation project I made a web application that allows
                the students to study for the final technical exams for special
                subjects such as Computer Networks, Electrical Engineering and
                etc. I made the project with React and Google Firebase.
              </p>
            </Reveal>
            <Reveal>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge text="React" />
                <Badge text="Firebase" />
                <Badge text="JavaScript" />
                <Badge text="TCP/IP" />
                <Badge text="OSI Model" />
                <Badge text="Electrical Engineering" />
                <Badge text="C++" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
