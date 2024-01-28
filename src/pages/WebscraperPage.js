import Layout from '../components/Layout';
import { DiPython } from 'react-icons/di';
import { SiSelenium } from 'react-icons/si';

import captcha from '../img/captcha.jpg';
import Image from '../components/Image';
import Icons from '../components/Icons';

const WebscraperPage = () => {
  const sections = [
    {
      title: 'Introduction',
      content: (
        <p className='mb-4'>
          I wanted to make this project, because I was interested in how my uni
          teacher made his own scraper and crawler. I wanted to make my own
          version of it. The overall code is not that complex and it's quite
          easy to understand. I used Selenium and Beautiful Soup to scrape the
          data from the website and model it.
          <br />
          <br />
          You can find the source code on{' '}
          <span className='underline'>
            <a href='https://github.com/bnn16/stackScraper'>here.</a>
          </span>
        </p>
      ),
    },
    {
      title: 'Technology Stack',
      content: (
        <>
          <Icons icons={[<DiPython />, <SiSelenium />]} />

          <p>
            I used Python to make this project, because it's the standart
            language for scraping and it's quite easy to use. I used Selenium to
            scrape the data from the website and Beautiful Soup to model it.
          </p>
        </>
      ),
    },
    {
      title: 'Research and Design',
      content: (
        <div className='flex flex-col flex-grow gap-2'>
          <p>
            Initially I had no cliue how to start, so I did some research and
            realised that after a couple of requests the website would block me.
            So I had to find a way to bypass that. I found out that I could use
            a proxy to bypass the block. So I found what a proxy is and used it.
            I found out that I could use a headless browser to bypass the block.
            So I used Selenium to scrape the data from the website.
          </p>

          <p>But then another problem arose - the reCaptcha.</p>
          <Image imgsrc={captcha} />

          <p>
            I had to find a way to bypass the captcha. I found out that I could
            manually solve the captcha and then use the cookies to bypass it. So
            I did that, but that wasn't enough. I had to find a way to automate
            the process. I found out that I could use a service like 2captcha to
            solve the captcha for me, but I decided to automate it myself. I
            found a library called SeleniumRecaptcha and used it to solve the
            captcha, However I ran into a bug in the source code of the library.
            So I had to fix it myself.
          </p>
          <p>
            I started looking at the source code and I found out that the bug
            was caused by the fact that the library was stuck in an infinite
            loop, while waiting for the browser html elements to change from the
            captcha being empty, to the captcha having the check mark. So I had
            to find a way to break the loop. I found out that I could use a
            timeout to break the loop. So I added a timeout and the bug was
            fixed.
          </p>

          <p>
            The interesting thing is that the library uses Whisper from
            HuggingFace to listen to the audio the captcha provides as an option
            to solve it and then it writes it in the input field.
          </p>
        </div>
      ),
    },
    {
      title: 'Learning and Growth',
      content: (
        <div className='flex flex-col flex-grow gap-2'>
          <p>
            This is by no means a complex project, but it was quite fun to make.
            I learned what proxys are and how to use them, I learned what
            headless browsers are and how to use them, I learned what captchas
            are and how to solve them, I learned how to use Selenium and
            Beautiful Soup.
          </p>
          <p>
            The biggest challenge was to find a way to bypass the captcha,
            because the source code of the library was broken, so I had to get
            my hands dirty and fix it myself.
          </p>
        </div>
      ),
    },
    {
      title: 'Conclusion',
      content: (
        <>
          <p>
            In conclusion, this project which is small and simple, I learned how
            scraping and crawling works. So I'm quite happy with the result.
          </p>
          <p>
            I hope you enjoyed your visit and my other projects and I look
            forward to hearing from you!
          </p>
        </>
      ),
    },
  ];

  return <Layout title={'Web Scraper'} sections={sections} />;
};

export default WebscraperPage;
