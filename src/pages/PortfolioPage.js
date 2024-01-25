import Layout from '../components/Layout';
import { DiReact } from 'react-icons/di';
import { SiGithubpages, SiTailwindcss } from 'react-icons/si';
import Icons from '../components/Icons';

const PortfolioPage = () => {
  const sections = [
    {
      title: 'Introduction',
      content: (
        <p className='mb-4'>
          Welcome to my digital space, where creativity meets technology! <br />
          This portfolio is a showcase of my passion, skills, and the journey
          I've embarked upon in the world of programming. <br />
        </p>
      ),
    },
    {
      title: 'Technology Stack',
      content: (
        <>
          <Icons icons={[<DiReact />, <SiTailwindcss />, <SiGithubpages />]} />

          <p>
            The backbone of this portfolio is built on React, a powerful
            JavaScript library for building user interfaces. This choice ensures
            a seamless and dynamic user experience, allowing for efficient
            updates and modifications. Crafting a visually appealing and
            responsive design is crucial, and Tailwind CSS has been instrumental
            in achieving this. It's a utility-first CSS framework that enables
            me to create a modern and clean aesthetic with ease.
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
            I opted to create a SPA (Single Page application), that has no
            routes and renders everything dynamically. That was quite the
            challange for me, because I was used to rendering everything based
            on Location (ex. /about, /contact, etc.), using React Router.{' '}
          </p>
          <p>
            I used Framer Motion to animate the transitions between the renders
            and I'm quite happy with the result. The only downside is that the
            page is not SEO friendly, but I'm not too worried about that.
          </p>
          <p className='text-lg'>Color Palette</p>
          <ul class='list-disc'>
            <li>
              <span class='text-accent'>#FFFCF2:</span> Draws attention to key
              elements with a warm and bright hue.
            </li>
            <li>
              <span class='text-accent-light'>#CCC5B9:</span> Complements the
              accent, adding depth and subtlety to the design.
            </li>
            <li>
              <span class='text-flame'>#EB5E28:</span> Infuses energy and
              warmth, creating a vibrant focal point.
            </li>
            <li>
              <span class='text-flame-dark'>#C8491E:</span> Adds depth and
              contrast, enhancing visual hierarchy.
            </li>
            <li>
              <span class='text-background-light'>#403D39:</span> Provides a
              clean canvas for readability and a modern look.
            </li>
            <li>
              <span class='text-background-dark bg-accent'>#2D2B27</span>:
              Grounds the design with a dark background, defining boundaries.
            </li>
          </ul>
          <p>
            In summary, the chosen color palette combines deep, contrasting
            tones with vibrant accents to create a visually engaging and
            well-balanced design. Each color serves a specific purpose,
            contributing to the overall aesthetics and user experience of the
            section.
          </p>
        </div>
      ),
    },
    {
      title: 'Learning and Growth',
      content: (
        <div className='flex flex-col flex-grow gap-2'>
          <p>
            Throughout the development of this portfolio, I've encountered
            challenges that have become invaluable learning experiences. From
            tackling complex React components to fine-tuning responsive designs,
            each hurdle has contributed to my growth as a developer.
          </p>
          <p>
            The biggest challange was to design and implement the css. I'm not
            very good with css, but I'm learning! I'm quite happy with the
            result, but I'm sure there's a lot of room for improvement.
          </p>
          <p>
            I've learned to approach problems with a systematic and analytical
            mindset, breaking them down into smaller, more manageable tasks. I
            also learned to leverage the power of the internet, utilizing
            resources such as Stack Overflow and the documentation of the given
            technology to overcome obstacles.
          </p>
        </div>
      ),
    },
    {
      title: 'Conclusion',
      content: (
        <>
          <p>
            In conclusion, this portfolio is a reflection of my dedication to
            blending creativity with technology. The use of React, Tailwind CSS,
            TSparticle, and Framer Motion showcases my skills in building
            user-friendly, visually appealing, and interactive web applications.
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

export default PortfolioPage;
