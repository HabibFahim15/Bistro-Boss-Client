import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css'

import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle subHeading={'check it out'} heading={'Featured Item'} />
      <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-12 px-36">
        <div>

          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20,2029</p>
          <p className="upercase">Where can i get some?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsum deserunt soluta velit reprehenderit eaque error, quasi ratione vel ducimus aliquid doloribus? Voluptate, tenetur! Odit eveniet architecto repellendus?</p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;