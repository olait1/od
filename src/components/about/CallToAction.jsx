import { ButtonBase } from "../base/ButtonBase";

const CallToAction = () => {
  return (
    <section id="cta" className="bg-primary">
      {/* Flex Container */}
      <div className="container  flex flex-col items-aligned justify-between py-12 space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* Heading */}
        <h2 className="text-5xl font-bold leading-tight text-aligned text-white md:text-4xl md:max-w-xl md:text-left">
          Reach Out To Us Today
        </h2>
        {/* Button */}
      </div>
    </section>
  );
};

export default CallToAction;
