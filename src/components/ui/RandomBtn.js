const RandomBtn = ({ updateFunction }) => {
  return (
    <button
      className="absolute -bottom-12 right-1 px-4 py-2 bg-purple-900 text-white rounded-md cursor-pointer hover:bg-purple-800 z-10 transition-all active:translate-y-1 duration-250 dark:bg-teal-800 dark:hover:bg-teal-700"
      onClick={updateFunction}
    >
      Randomize
    </button>
  );
};

export default RandomBtn;
