import a6 from '../../assets/about/a6.jpg';

const AboutSection = () => {
  return (
    <div className="mt-20 ml-10 mr-10 lg:grid lg:grid-cols-2 lg:gap-10">
      <div className="">
        <img src={a6} alt="" />
      </div>
      <div className="mt-10 lg:mt-20 tracking-wider h-fit ">
        <div className="text-2xl md:text-3xl  font-bold text-center lg:text-left">
          Who We Are?
        </div>
        <div className="text-gray-500 text-center mt-5 lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eius
          neque aperiam voluptatem placeat nulla dolores expedita sit, saepe
          iusto natus nostrum, dignissimos illum vitae optio. Voluptatem laborum
          omnis quaerat. Tempore eaque ipsum, enim beatae architecto non alias!
          Consequuntur sint earum nesciunt perspiciatis dignissimos. Officia
          earum quaerat a eos, modi aliquam aperiam id dolor in laudantium
          maiores.
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
