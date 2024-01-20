const Badge = ({ text }) => {
  return (
    <span
      style={{
        backgroundColor: '#EB5E28',
        padding: '5px 10px',
        borderRadius: '5px',
        color: '#FFFCF2',
      }}
    >
      {text}
    </span>
  );
};

export default Badge;
