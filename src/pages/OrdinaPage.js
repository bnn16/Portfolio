import Layout from '../components/Layout';
import { DiMongodb, DiNodejs, DiReact } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import ord from '../img/ordina/ordina.png';
import initial from '../img/ordina/initial.png';
import home from '../img/ordina/home.png';
import checkin from '../img/ordina/checkin.png';
import ms from '../img/ordina/ms.png';
import ms2 from '../img/ordina/ms2.png';

const OrdinaPage = () => {
  const sections = [
    {
      title: '',
      content: (
        <div className='flex flex-row justify-center flex-grow h-72'>
          <img src={ord} alt='' className=''></img>
        </div>
      ),
    },
    {
      title: 'Introduction',
      content: (
        <p className='mb-4'>
          This project was developed during my 3rd semester at Fontys University
          of Applied Sciences, as part of the Software Engineering course.{' '}
          <br />
          The goal was to create a web application that would allow employees to
          check-in and check-out of the office, and to keep track of the number
          of employees in the office at any given time. <br />
          The application is used by Ordina employees and is hosted on their own
          network.
        </p>
      ),
    },
    {
      title: 'Technology Stack',
      content: (
        <>
          <div className='flex flex-row justify-center flex-grow gap-2'>
            <DiReact className='text-3xl' />
            <SiTailwindcss className='text-3xl' />
            <DiMongodb className='text-3xl' />
            <DiNodejs className='text-3xl' />
          </div>
          <p>
            Originally, the application was supposed to be built using Java
            Spring Boot, but my team and I decided to leverage NodeJS instead.
            The reasoning behind this decision was our desire to utilize only
            JavaScript throughout the application. We made this choice with the
            intention of making it more accessible for Ordina to use the
            application, as they were more familiar with JS than Java. <br />
            We opted for a tech stack that included React for the frontend,
            Tailwind CSS for styling, MongoDB for the database, and NodeJS for
            the backend. Choosing React for the frontend allowed us to build a
            dynamic and responsive user interface. Tailwind CSS facilitated the
            styling process, enabling us to create a modern and visually
            appealing design with ease. When it came to the backend, NodeJS
            proved to be a life-saver! It was incredibly easy to set up and use,
            and it made the development process a lot more enjoyable. For the
            database, we chose MongoDB for its simplicity, streamlining our data
            management tasks.
            <br />
            As for the authentication, we used the MS Azure Active Directory,
            which was already in use by Ordina.
          </p>
          <div className='flex flex-row flex-grow py-8'>
            <img src={ms} alt='' />
          </div>
          <div className='flex flex-row flex-grow py-8'>
            <img src={ms2} alt='' />
          </div>
        </>
      ),
    },
    {
      title: 'Design',
      content: (
        <div className='flex flex-col flex-grow gap-2'>
          <p>
            I was in charge of creating the FE as well as the BE. But let's talk
            about the frontend first.
          </p>
          <p>
            First our client came to us and said that they wanted a simple UI,
            that is easy to use and understand. <br />
            So then I started to think about how I could make the UI as simple
            as possible, but still be pleasent for the eyes of the user. So I
            came up with the idea of using a simple color palette, with a lot of
            white space, and a few accent colors. <br />
            The first idea was to create a calendar with each persons schedule
          </p>
          <div className='flex flex-row flex-grow py-8'>
            <img src={initial} alt='' />
          </div>
          <p>
            However, after a meeting with the client, it became clear that they
            didn't want a calendar, but a simple list of people that are in the
            office. <br />
            So I had to change the design, and I came up with this:
          </p>

          <div className='flex flex-row flex-grow py-8'>
            <img src={home} alt='' />
          </div>
          <p>
            The design is simple, but it gets the job done. The user can easily
            check in and out, and see who else is in the office.
          </p>

          <div className='flex flex-row flex-grow py-8'>
            <img src={checkin} alt='' />
          </div>

          <p className='text-lg'>Color Palette</p>
          <ul class='list-disc pl-4'>
            <li>
              <span class='text-flame'>#EA580C:</span> Commands attention with a
              vibrant and energetic hue.
            </li>
            <li>
              <span class='text-white'>#000000:</span> Provides a bold and
              grounding background for contrast.
            </li>
            <li>
              <span class='text-background-light'>#E2E8F0:</span> Offers a clean
              canvas for readability and a modern aesthetic.
            </li>
          </ul>
          <p>
            In summary, the chosen color palette is chosen after the Ordina logo
            and company colors.
          </p>
        </div>
      ),
    },
    {
      title: 'Learning and Growth',
      content: (
        <div className='flex flex-col flex-grow gap-2'>
          <p>
            This project was a great learning experience for me. Here are some
            key takeaways:
          </p>
          <ul class='pl-4'>
            <h2 className='text-lg text-flame py-4'>Technical Proficiency: </h2>
            <li>
              <p>
                Throughout the development of this project, I experienced
                significant growth in my technical proficiency. Initially, the
                project was intended to be built using Java Spring Boot, but my
                team and I made a strategic decision to transition to NodeJS.
                This switch allowed us to leverage a full JavaScript stack,
                making the application more accessible to Ordina, who were more
                familiar with JavaScript. This decision not only showcased my
                adaptability but also deepened my understanding of NodeJS, React
                for the frontend, and MongoDB for database management.
              </p>
            </li>
            <h2 className='text-lg text-flame py-4'>
              Problem Solving and Adaptability:{' '}
            </h2>
            <li>
              <p>
                One of the notable challenges we encountered was a shift in the
                client's requirements regarding the user interface. Initially
                tasked with creating a calendar-based UI, I had to pivot swiftly
                when the client expressed a preference for a simpler list-based
                design. This demanded quick problem-solving skills and
                adaptability. The experience taught me the importance of
                effective communication and the ability to adjust plans based on
                evolving project needs.
              </p>
            </li>
            <h2 className='text-lg text-flame py-4'>
              Design Thinking and User Experience:{' '}
            </h2>
            <li>
              <p>
                Being responsible for both the frontend and backend development,
                I played a crucial role in the design process. I learned to
                approach design thinking with a user-centric mindset. The
                initial idea of a calendar evolved into a streamlined and
                user-friendly list, demonstrating my ability to prioritize user
                experience over personal preferences.
              </p>
            </li>
            <h2 className='text-lg text-flame py-4'>
              Collaboration and Client Interaction:{' '}
            </h2>
            <li>
              <p>
                Working on a real-world project for Ordina provided me with
                valuable experience in collaboration and client interaction. The
                decision to switch the technology stack, for example, involved
                effective communication with team members and aligning our
                choices with the client's preferences. This experience enhanced
                my ability to work in a team, adapt to changing requirements,
                and manage client expectations effectively.
              </p>
            </li>
            <h2 className='text-lg text-flame py-4'>
              Project Management and Time Efficiency:{' '}
            </h2>
            <li>
              <p>
                Being in charge of both frontend and backend development
                required effective project management and time efficiency. I
                learned to balance tasks, prioritize features, and meet
                deadlines. This experience honed my organizational skills and
                instilled a sense of responsibility for delivering a
                high-quality product within the specified timeframe.
              </p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Conclusion',
      content: (
        <>
          <p>
            In conclusion, the development of this web application not only
            expanded my technical skill set but also provided invaluable lessons
            in problem-solving, adaptability, design thinking, collaboration,
            and project management. These experiences collectively contributed
            to my professional growth and enhanced my ability to tackle diverse
            challenges in future endeavors.
          </p>
          <p>
            I hope you enjoyed your visit and my other projects and I look
            forward to hearing from you!
          </p>
        </>
      ),
    },
  ];

  return <Layout title={'Ordina'} sections={sections} />;
};

export default OrdinaPage;
