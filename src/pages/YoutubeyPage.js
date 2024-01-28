import Layout from '../components/Layout';
import {
  DiFirebase,
  DiJava,
  DiMongodb,
  DiPython,
  DiReact,
} from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import Icons from '../components/Icons';
import { FaNodeJs } from 'react-icons/fa';
import Image from '../components/Image';
import architecture from '../img/youtubey/architecture.png';
import micro from '../img/youtubey/micro.png';
import python from '../img/youtubey/python.png';
import home from '../img/youtubey/home.png';
import post from '../img/youtubey/post.png';
import profile from '../img/youtubey/profile.png';
import closed from '../img/youtubey/closed.png';
import postinfo from '../img/youtubey/postinfo.png';
import profileedit from '../img/youtubey/profileedit.png';

const YoutubeyPage = () => {
  const sections = [
    {
      title: 'Introduction',
      content: (
        <>
          <p className='mb-4'>
            In today's digital age, content creators on platforms like YouTube
            often collaborate with editors to enhance the quality of their
            videos. However, many content creators are hesitant to share their
            YouTube/Google account credentials with remote editors they hire
            from the internet. This project aims to address this issue by
            developing a secure and efficient platform for content creators and
            video editors.
          </p>
        </>
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
              <DiJava />,
              <DiPython />,
              <FaNodeJs />,
            ]}
          />
          <p>
            You can checkout the git repository for more information about code
            and api endpoints{' '}
            <a
              className='underline'
              href='https://github.com/bnn16/YoutubeyAPIs'
            >
              here.
            </a>
          </p>
          <br />

          <p>
            <span className='bold'>Frontend Technology</span>
            <br /> The frontend of the YouTubey app will be developed using
            ReactJS. ReactJS is a robust and popular JavaScript library for
            building user interfaces, ensuring a modern and responsive user
            experience. Leveraging ReactJS will enable the creation of an
            intuitive and user-friendly interface for content creators and
            editors.
          </p>
          <p className='py-4'>
            <span className='bold'>Backend Technology</span> <br />
            The choice of backend technology is pivotal for the app's
            performance and scalability. Currently, I opted to creating micro
            services, each serving its own purpose for the app. Java for
            authentication and authorization. NodeJS for web sockets (socket.io)
            chat feature and python for integration with google firebase and
            YouTube api.
          </p>

          <p className='bold text-lg'>Architecture</p>
          <Image imgsrc={architecture} />

          <p className='py-4'>
            <span className='bold'>
              Container 1: Upload Microservice with MySQL Database
            </span>
            <br />
            Responsibility: This container is responsible for handling video
            uploads and streaming to users. It stores video content and related
            data.
          </p>

          <p className='py-4'>
            <span className='bold'>
              Container 2: Communication Microservice with Database
            </span>
            <br />
            Responsibility: This container enables users to communicate with
            each other via messages and other forms of communication.
          </p>

          <p className='py-4'>
            <span className='bold'>
              Container 3: Authentication and Authorization Microservice with
              MongoDB and Google Firebase
            </span>
            <br />
            Responsibility: This container manages user authentication and
            authorization to ensure secure access to the YouTubey platform.
          </p>

          <h2 className='text-lg py-4'>Layers</h2>

          <p>
            A three-layered architecture, which typically consists of a
            Controller layer, a Service layer, and a Repository (or Data Access)
            layer, is a common design pattern in software development. The
            Service layer plays a crucial role in this architecture, and there
            are several reasons why I chose this approach:
          </p>

          <ul class='list-decimal py-4 space-y-4'>
            <li>
              Separation of Concerns: <br />
              The Service layer helps in separating business logic from the
              presentation layer (Controller) and the data access layer
              (Repository). This promotes a cleaner and more modular design,
              making the codebase easier to understand, maintain, and extend.
            </li>
            <li>
              Reusability <br />
              Business logic encapsulated within the Service layer is more
              reusable. Other parts of the application or even other
              applications can reuse the services ( in the future ), promoting a
              more modular and scalable system.
            </li>
            <li>
              Testibility <br />
              Services are standalone units of business logic that can be easily
              tested in isolation. This promotes unit testing and ensures that
              each component of the system functions correctly independently of
              others.
            </li>
          </ul>

          <p className='py-4'>
            In summary, the Service layer in a three-layered architecture
            provides a structured and organized way to manage business logic,
            promoting code maintainability, reusability, and testability. It
            also facilitates the separation of concerns, making the overall
            system more flexible and adaptable to changes.
          </p>

          <p className='py-4'>
            However the more interesting part comes in the actual architecture
            of the other api’s and how they’re used. The following diagram is
            the part of the Python API. It’s a functional API, unlike the one
            used with Spring Boot that is OO.
          </p>

          <Image imgsrc={python} />

          <Image imgsrc={micro} />

          <h2 className='text-lg'>Microservices Interaction Overview</h2>
          <p>
            The fundamental architecture of this application revolves around a
            microservices design that facilitates seamless communication between
            different components. Specifically, the interaction is exemplified
            when a user initiates the process of uploading a video through a
            well-defined API gateway.
          </p>
          <ul class='list-decimal py-4 space-y-4'>
            <li>
              User Request: <br />{' '}
              <p>
                Upon a user's request to upload a video, the API gateway is
                engaged to handle the incoming request.
              </p>
            </li>
            <li>
              Post Controller in Spring Microservice: <br />{' '}
              <p>
                The API gateway directs the request to the Post Controller, an
                integral component within the Spring Microservice. Within this
                microservice, the Post Controller processes the request, leading
                to the creation of a post. Subsequently, the Post Controller
                returns a response to the user, providing essential information
                such as the Post ID.
              </p>
            </li>
            <li>
              Integration with Python Microservice: <br />
              <p>
                Following the successful creation of the post, the system
                initiates a subsequent request to the Python Microservice. The
                Python Microservice, specialized in interfacing with Google
                Firebase, is responsible for saving the uploaded video. The Post
                ID serves as a key identifier for associating the video with the
                corresponding post. Upon completion of the video-saving process
                in Google Firebase, the Python Microservice receives a response
                containing the Video URL
              </p>
            </li>
            <li>
              User Response: <br />
              <p>
                The final step involves the Python Microservice returning the
                Video URL to the user. This completes the user's request and
                establishes a cohesive flow between the Spring and Python
                microservices.
              </p>
            </li>
          </ul>
          <p>
            This orchestrated communication pattern ensures a streamlined and
            efficient process for handling video uploads within this
            microservices architecture. The segregation of responsibilitients
            among microservices enables flexibility, scalability, and
            maintainability in our application.
          </p>
        </>
      ),
    },
    {
      title: 'Design',
      content: (
        <div className='flex flex-col flex-grow gap-2'>
          <p className='text-lg'>SPA</p>
          <p>
            I opted to create a SPA (Single Page application), that uses React
            Router to handle the routing. This allows for a more fluid user
            experience, as the page does not need to reload when navigating
            between sections.
          </p>
          <p>
            Initially the design was going to be a dark theme, but I decided to
            go with a light theme instead. <br />
            The color pallette was inspired by the colors of the YouTube logo.
          </p>
          <Image imgsrc={home} />
          <p>
            The idea was to make a minimalistic, yet elegant design that is
            straight to the point.
          </p>
          <Image imgsrc={post} />
          <p>
            And when you create a profile you can see the design is straight to
            the point, tiktok inspired.
          </p>
          <Image imgsrc={postinfo} />

          <p>The profile is responsive, and only has necessary</p>
          <Image imgsrc={profileedit} />
          <Image imgsrc={profile} />

          <p>
            Also the dashboard is made with animations that when its open and
            closed. When it's hovored it creates a toaster menu
          </p>
          <Image imgsrc={closed} />
          <p className='text-lg'>Color Palette</p>
          <ul className='list-disc'>
            <li>
              <span style={{ color: '#EF4444' }}>#EF4444:</span> Grabs attention
              with a bold and vibrant red hue.
            </li>
            <li>
              <span className='' style={{ color: '#0E0E0E' }}>
                #0E0E0E:
              </span>{' '}
              Provides a dark background, enhancing visual elements and creating
              contrast for readability.
            </li>
            <li>
              <span className='text-background-light' style={{ color: '#fff' }}>
                #FFFFFF:
              </span>{' '}
              Offers a clean and bright palette, ensuring clarity and
              readability.
            </li>
          </ul>
          <p>
            In summary, the chosen color palette combines deep, contrasting
            tones with vibrant accents to create a visually engaging and
            well-balanced design.
          </p>
        </div>
      ),
    },
    {
      title: 'Learning and Growth',
      content: (
        <div className='flex flex-col flex-grow gap-2'>
          <p>
            Throughout the duration of this project, I embarked on a significant
            learning journey that not only enhanced my understanding of design
            principles but also provided me with valuable insights into the
            intricate world of API architecture and design.
          </p>
          <ul className='list-decimal'>
            <li>
              Design Proficiency: <br />
              Delving into the project's design aspects allowed me to hone my
              skills in creating aesthetically pleasing and user-friendly
              interfaces. I gained a deeper appreciation for the importance of
              user experience and how thoughtful design contributes to overall
              project success. This experience has equipped me with a solid
              foundation in design principles that I am eager to apply in future
              projects.
            </li>
            <li>
              API Architecture and Design:
              <br />
              One of the most enriching aspects of this project was the
              exploration of API architecture and design. Understanding how
              different components of an API interact and contribute to the
              overall functionality of a system provided me with a comprehensive
              view of software development. From defining endpoints to managing
              data flow, I learned to design APIs that are not only efficient
              but also scalable and adaptable to evolving project requirements.
            </li>
            <li>
              Problem-solving and Adaptability:
              <br />
              As challenges arose during the project, I developed a resilient
              problem-solving mindset. Navigating through intricacies in both
              design and API development allowed me to cultivate adaptability, a
              crucial skill in the ever-evolving landscape of technology. These
              challenges pushed me to think critically, explore innovative
              solutions, and refine my approach to overcoming obstacles.
            </li>
          </ul>
          <p>
            The biggest challange was to figure out a way to upload videos to
            google firebase and youtube api. I had to learn how to use python
            and integrate it with the rest of the api's. I also had to learn how
            to use websockets to create a chat feature.
          </p>
        </div>
      ),
    },
    {
      title: 'Conclusion',
      content: (
        <>
          <p>
            In summary, this project has been a transformative learning
            experience, expanding my skill set in design, API architecture,
            problem-solving, and collaboration. I am eager to leverage these
            newfound skills in future endeavors, embracing challenges and
            contributing meaningfully to the ever-evolving field of technology.
          </p>
          <p>
            I hope you enjoyed your visit and my other projects and I look
            forward to hearing from you!
          </p>
        </>
      ),
    },
  ];

  return <Layout title={'Youtubey'} sections={sections} />;
};

export default YoutubeyPage;
