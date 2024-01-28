import React from 'react';
import { SiCsharp, SiMysql } from 'react-icons/si';
import Layout from '../components/Layout';

import strategy from '../img/event/strategy.png';
import grades from '../img/event/grades.png';
import Image from '../components/Image';
import Icons from '../components/Icons';
import Code from '../components/Code';
import { jsonc } from '../constants/events';

function EventPlatformPage() {
  const sections = [
    {
      title: 'Introduction',
      content: (
        <p className="mb-4">
          This was the first ever project that I made with object oriented
          programming.
          <br />
          <br />
          The main goal of the website is to create easy to use and a
          minimalistic experience. You want to attend an event, then you go on
          the website and get your tickets. Easy, simple and reliable. The event
          website is a platform that simplifies the process of registering and
          attending an event. Users can view a list of available events,
          register for events of interest, receive confirmation emails, and
          manage registration from their personal profile, the personal details
          of users is stored in a secure database. The website also includes a
          contact page where users can reach out to its support
          team/administrators if they have questions or suggestions about the
          platform.
          <br />
          This project was made for my university course. The idea was to make a
          platform for events, using object oriented programming and the
          monolithic architecture. It has 3 layers - data, business and
          presentation layer.
          <br />
          <br />
          You can find the source code on
          {' '}
          <span className="underline">
            <a href="https://github.com/bnn16/event-platform">here.</a>
          </span>
          <br />
          <span>Here is a demo of the project.</span>
          <iframe
            className="w-full h-96 rounded-lg shadow-lg border-2 border-flame-dark border-opacity-80 my-4"
            src="https://www.youtube.com/embed/o9IH9wpztOw?si=PZON0FzqRw-mSZi2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </p>
      ),
    },
    {
      title: 'Technology Stack',
      content: (
        <>
          <Icons icons={[<SiCsharp />, <SiMysql />]} />

          <p>
            The tech stack is quite simple, since my university course was
            strongly focused on C# for this semester. So everything from the
            Desktop app (Windows Forms) to the Frontend (ASP.NET) is made with
            C#. The database is SQL and I had to write the queries myself in the
            DAL (Data Access Layer).
          </p>
          <p>
            The architecture is monolithic, because that`s what we were taught.
            We had 3 layers. The data layer (DAL), the business layer (BLL) and
            the presentation layer (PL).
          </p>
        </>
      ),
    },
    {
      title: 'Research and Design',
      content: (
        <div className="flex flex-col flex-grow gap-2">
          <p>
            This being my first project with object oriented programming, I had
            to learn more about design patterns, so I can make quality OOP code.
          </p>

          <p>
            For this project I decided after some time to stick with the
            {' '}
            <a
              className="underline"
              href="https://www.blackwasp.co.uk/Strategy.aspx"
            >
              Strategy Design pattern.
            </a>
          </p>
          <Image imgsrc={strategy} />

          <p>
            Because our university professor was very strict with the code
            quality and design of the project itself, I had to make sure that I
            was following the SOLID principles and the design patterns.
          </p>
          <p>
            I also had to make an algorithm, that would rank the events based on
            the % of similar tags that you have. So if you have 3 tags in common
            with an event, then that event will be ranked higher than an event
            that has only 1 tag in common with you. And I`m very proud of the
            algorithm I came up with.
          </p>
          <Code description="Algorithm code" language="csharp" json={jsonc} />
        </div>
      ),
    },
    {
      title: 'Learning and Growth',
      content: (
        <div className="flex flex-col flex-grow gap-2">
          <p>
            This was my first project with object oriented programming, that is
            also a full stack project. So I had to learn a lot of new things.
            From design patterns to database queries and how to make a desktop
            application and more.
          </p>
          <p>
            The biggest challange was to design and research the architecture of
            this project. The most difficult part was to make the algorithm that
            ranks the events based on the % of similar tags that you have. I`m
            very proud of the algorithm I came up with.
          </p>
        </div>
      ),
    },
    {
      title: 'Conclusion',
      content: (
        <>
          <p>
            The app is by no means perfect, but I`m quite happy with the result,
            as for a 1st year university student, I think I did a pretty good
            job, my grades were also perfect.
          </p>
          <Image imgsrc={grades} />
          <p>
            I hope you enjoyed your visit and my other projects and I look
            forward to hearing from you!
          </p>
        </>
      ),
    },
  ];

  return <Layout title="Event Platform" sections={sections} />;
}

export default EventPlatformPage;
