function Home() {
  return (
    <section className='w-full min-h-screen text-accent py-12 md:py-24 lg:py-32 flex justify-center items-center'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
              Hello <span className='text-flame'>Friend</span>, I'm Bogdan
            </h1>
            <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
              Full-stack developer & 2nd-year uni student, studying ICT &
              Cybersecurity & Software Engineering. Proficient in JavaScript, C
              and Python. <br />I love solving complex problems and creating
              intuitive user experiences. I'm currently working on{' '}
            </p>
          </div>
          <div className='space-x-4'>
            <button className='btn btn-primary bg-flame text-accent py-4 px-4 rounded hover:bg-flame-dark'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
