import Layout from '../components/Layout';
import { DiGo, DiReact } from 'react-icons/di';
import { SiGithubpages, SiRabbitmq, SiTailwindcss } from 'react-icons/si';
import Icons from '../components/Icons';
import Image from '../components/Image';
import init from '../img/grpc/init.png';
import after from '../img/grpc/after.png';
import final from '../img/grpc/final.png';

const GrpcPage = () => {
  const sections = [
    {
      title: 'Introduction',
      content: (
        <p className='mb-4'>
          I undertook this project with a clear objective in mind — to challenge
          myself and delve into the realms of microservice architecture using
          Golang, gRPC, RabbitMQ, and SQLite, despite having no prior knowledge
          in these technologies. The ambitious goal was to construct a
          functional microservice architecture within a tight timeframe of 24
          hours. It's a simple application that allows users to create, read,
          update, and delete (CRUD) messages. <br />
          The messages are stored in a SQLite database and the communication
          between the services is done with gRPC and RabbitMQ.
          <br />
          <br />
          You can find the source code on{' '}
          <span className='underline'>
            <a href='https://github.com/bnn16/go-microservice'>here.</a>
          </span>
        </p>
      ),
    },
    {
      title: 'Technology Stack',
      content: (
        <>
          <Icons icons={[<DiGo />, <SiRabbitmq />]} />

          <p>
            Building Scalable Microservices in Golang: Leveraging gRPC,
            RabbitMQ, and SQLite for Efficient Messaging and State Management
            with RESTful Automation
          </p>
        </>
      ),
    },
    {
      title: 'Design',
      content: (
        <div className='flex flex-col flex-grow gap-2'>
          <p>
            Initially i had no cliue how to start, so I did some research and
            came up with the following diagram:
          </p>
          <Image imgsrc={init} />
          <p>
            A user sends a request to a rest api that invokes a gRPC. However
            that was a mistake, since the idea of the project was to be async,
            instead of directly calling the method from the restapi. Another
            thing I couldn't figure out was what comes first after the restapi.
            <br />
            Was it the gRPC or the queue? <br /> <br />I was thinking of a
            queue, but I didn't know how to implement it. So I decided to start
            with the restapi and the gRPC, and then figure out the queue.
          </p>
          <p>
            After some more research I figured out that the queue comes first
            and the grpc is the consumer. So I had to change the diagram to
            this:
          </p>
          <Image imgsrc={after} />

          <p>
            I had to change the diagram again, because I couldn't figure out how
            the grpc would know which service to call. So I added a corelationID
            to the queue and a corelationID to the grpc. <br />
            So the diagram ended up like this:
          </p>
          <Image imgsrc={final} />
        </div>
      ),
    },
    {
      title: 'Learning and Growth',
      content: (
        <div className='flex flex-col flex-grow gap-2'>
          <p>
            This project encapsulates my journey of embracing challenges and
            learning new technologies to construct a microservice architecture
            using Golang, gRPC, RabbitMQ, and SQLite in just 24 hours, despite
            having no prior knowledge.
          </p>
          <p>
            The biggest challange was to design and research the architecture of
            this project. I had no idea from where to start, so I had to find a
            way to break down the problem into smaller pieces. I started with
            the restapi and the grpc, and then I figured out the queue. After
            that I had to figure out how to connect the queue with the grpc. I
            had to change the diagram a couple of times, but in the end I
            managed to figure it out.
          </p>
        </div>
      ),
    },
    {
      title: 'Conclusion',
      content: (
        <>
          <p>
            In conclusion, this project not only showcases technical proficiency
            but also underscores the importance of adaptability,
            problem-solving, and continuous learning in the dynamic landscape of
            software development.
          </p>
          <p>
            I hope you enjoyed your visit and my other projects and I look
            forward to hearing from you!
          </p>
        </>
      ),
    },
  ];

  return <Layout title={'Portfolio'} sections={sections} />;
};

export default GrpcPage;
