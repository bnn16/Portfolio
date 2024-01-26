import Layout from '../components/Layout';
import { DiMongodb, DiNodejs, DiReact } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import ord from '../img/ordina/ordina.png';
import initial from '../img/ordina/initial.png';
import home from '../img/ordina/home.png';
import checkin from '../img/ordina/checkin.png';
import ms from '../img/ordina/ms.png';
import ms2 from '../img/ordina/ms2.png';
import Image from '../components/Image';
import Icons from '../components/Icons';
import Code from '../components/Code';
import Accordian, { AccordianItem } from '../components/Accordian';
import {
  json,
  json10,
  json11,
  json12,
  json13,
  json14,
  json15,
  json2,
  json3,
  json4,
  json5,
  json6,
  json7,
  json8,
  json9,
} from '../constants/ordinaData.js';

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
          <Icons
            icons={[
              <DiReact />,
              <SiTailwindcss />,
              <DiMongodb />,
              <DiNodejs />,
            ]}
          />

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
          <Image imgsrc={ms} />
          <Image imgsrc={ms2} />

          <h2 className='text-lg text-flame py-4'>Backend API:</h2>
          <p>
            <strong>Routes</strong>
          </p>

          <p className='pb-4'>
            <strong>Endpoints for /meetings</strong>
          </p>

          <Accordian className='max-w'>
            <AccordianItem method='get' value='1' trigger={`/user/:uID`}>
              <Code
                description={
                  'You get a list of all of the meetings in the following format :'
                }
                json={json}
                language={'json'}
              />
            </AccordianItem>
            <AccordianItem method='get' value='2' trigger={`/:mID`}>
              <Code
                description={'You get the meeting in the following json'}
                json={json2}
                language={'json'}
              />
            </AccordianItem>
            <AccordianItem method='post' value='3' trigger='/meetings/'>
              <Code
                description={
                  'You create a meeting via sending the example json to the endpoint and you get a meeting with the attendees, having a status of pending'
                }
                json={json3}
                language={'json'}
              />
            </AccordianItem>
            <AccordianItem method='patch' value='4' trigger='/user/:uID'>
              <Code
                description={
                  'A meeting has 3 statuses accepted, declined, pending, You update the given user status for a meeting and get the meeting as a return.'
                }
                json={json4}
                language={'json'}
              />
            </AccordianItem>

            <AccordianItem method='patch' value='5' trigger='/update/:mID'>
              <Code
                description={
                  'This endpoint automatically changes the statuses to all attendees to pending, and updates the date, start and end time. It has an optional update of location. As a return you get the updated meeting information.'
                }
                language={'json'}
                json={json5}
              />
            </AccordianItem>
            <AccordianItem method='patch' value='6' trigger='/invite/:mID'>
              <Code
                language={'json'}
                json={json6}
                description={
                  'This endpoint checks if the user is already inside of the meeting, if it`s not inside of the meeting it successfully adds him to the meeting'
                }
              />
            </AccordianItem>
            <AccordianItem method='delete' value='7' trigger='/:mID'>
              If you need to delete a meeting just call this endpoint with the
              meeting id.
            </AccordianItem>
          </Accordian>

          <p className='pt-8 pb-4'>
            <strong>Endpoints for /office</strong>
          </p>

          <Accordian className='max-w'>
            <AccordianItem method='get' value='8' trigger='/'>
              <Code
                description={
                  'You get a list of all of the offices in the following format'
                }
                language='json'
                json={json7}
              />
            </AccordianItem>
            <AccordianItem method='post' value='9' trigger='/'>
              <Code
                description={
                  'You can create an office that requires the following body :'
                }
                language='json'
                json={json8}
              />
            </AccordianItem>
            <AccordianItem method='get' value='10' trigger='/:id'>
              <Code
                description={'You get all info of the specified office'}
                language={'json'}
                json={json9}
              />
            </AccordianItem>
            <AccordianItem method='patch' value='11' trigger='/:id'>
              <Code
                description={
                  'You update the office with the following body : and get a response of the updated office'
                }
                language={'json'}
                json={json10}
              />
            </AccordianItem>
            <AccordianItem method='delete' value='12' trigger='/:id'>
              And as a response you get status 200, sucessfully deleted.
            </AccordianItem>
          </Accordian>

          <p className='pt-8 pb-4'>
            Endpoints for <strong>/officeData</strong>
          </p>
          <Accordian className='max-w'>
            <AccordianItem method='get' value='13' trigger='/:date'>
              <Code
                description={
                  'You get all of the office data for the specified date'
                }
                language='json'
                json={json11}
              />
            </AccordianItem>
            <AccordianItem method='get' value='14' trigger='/:date/:id'>
              <Code
                description={
                  'You get all of the office data for the specified date and office'
                }
                language='json'
                json={json12}
              />
            </AccordianItem>
            <AccordianItem method='patch' value='15' trigger='/:date/:id'>
              <Code
                description={
                  'You add people to an office floor for a specific date and as a return you get a return of all of the floor information'
                }
                language='json'
                json={json13}
              />
            </AccordianItem>
            <AccordianItem method={'delete'} value='16' trigger='/:date/:id'>
              <Code
                description={
                  'Remove people from office for a specific date and as a return you get a return of all of the floor information'
                }
                language={'json'}
                json={json14}
              />
            </AccordianItem>
          </Accordian>

          <p className='pt-8 pb-4'>
            I have created a function that when called creates the blueprints,
            without any information for the officeData json.
          </p>
          <Code description={null} language='javascript' json={json15} />
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
          <Image imgsrc={initial} />
          <p>
            However, after a meeting with the client, it became clear that they
            didn't want a calendar, but a simple list of people that are in the
            office. <br />
            So I had to change the design, and I came up with this:
          </p>

          <Image imgsrc={home} />
          <p>
            The design is simple, but it gets the job done. The user can easily
            check in and out, and see who else is in the office.
          </p>

          <Image imgsrc={checkin} />

          <p className='text-lg'>Color Palette</p>
          <ul class='list-disc pl-4'>
            <li>
              <span className='text-flame'>#EA580C:</span> Commands attention
              with a vibrant and energetic hue.
            </li>
            <li>
              <span className='text-white'>#000000:</span> Provides a bold and
              grounding background for contrast.
            </li>
            <li>
              <span className='text-background-light'>#E2E8F0:</span> Offers a
              clean canvas for readability and a modern aesthetic.
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
          <ul className='pl-4 list-disc'>
            <li>
              <h2 className='text-lg text-flame py-4'>
                Technical Proficiency:{' '}
              </h2>

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

            <li>
              <h2 className='text-lg text-flame py-4'>
                Problem Solving and Adaptability:{' '}
              </h2>
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

            <li>
              <h2 className='text-lg text-flame py-4'>
                Design Thinking and User Experience:{' '}
              </h2>
              <p>
                Being responsible for both the frontend and backend development,
                I played a crucial role in the design process. I learned to
                approach design thinking with a user-centric mindset. The
                initial idea of a calendar evolved into a streamlined and
                user-friendly list, demonstrating my ability to prioritize user
                experience over personal preferences.
              </p>
            </li>

            <li>
              <h2 className='text-lg text-flame py-4'>
                Collaboration and Client Interaction:{' '}
              </h2>
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

            <li>
              <h2 className='text-lg text-flame py-4'>
                Project Management and Time Efficiency:{' '}
              </h2>
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
