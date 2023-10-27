const Card = ({ title, children, size }) => {
  return (
    <div
      className={`rounded-md bg-blue-100 col-span-${size} h-100% py-8 px-2 pb-24 border border-slate-200 shadow-lg`}
    >
      <h3 className="text-md md:text-lg text-purple-900 mb-4">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;
