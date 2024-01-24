const Badge = ({ text }) => {
  return (
    <span className='inline-block flex justify-center bg-flame text-accent px-2 sm:px-4 py-1 sm:py-2 rounded-md'>
      {text}
    </span>
  );
};

export default Badge;
