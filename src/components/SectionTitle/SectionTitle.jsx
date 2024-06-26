
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="md:w-3/12 text-center mx-auto my-8">
      <p className="text-yellow-600 mb-2">{subHeading}</p>
      <h3 className="lg:text-3xl text-2xl uppercase font-semibold border-y-4 py-4"> {heading} </h3>
    </div>
  );
};

export default SectionTitle;