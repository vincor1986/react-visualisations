const CardContainer = ({ children }) => {
  return (
    <section className="m-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {children}
    </section>
  );
};

export default CardContainer;
