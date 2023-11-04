const StatCard = ({ title, children, className }) => {
  return (
    <div className={`bg-dark-2 rounded overflow-hidden ${className}`}>
      <div className="bg-black p-3">{title}</div>
      <div className="p-3">{children}</div>
    </div>
  );
};

export default StatCard;
