const SmallCard = ({ title, children }) => {
  return (
    <div
      className={`rounded-md bg-blue-100 col-span-1 h-100% w-100% pt-6 px-2 pb-16 border border-slate-200 shadow-lg dark:bg-slate-700 dark:border-slate-600 dark:border-1`}
    >
      <h3 className="text-md md:text-lg text-purple-900 mb-2 dark:text-white">
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
};

export default SmallCard;
