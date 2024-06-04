
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu()
  const popular =menu.filter(item => item.category==='popular') 
  return (
    <div className="mb-12">
      <SectionTitle
        heading={'---Check it out---'}
        subHeading={'Popular items'}
        
        /> 
        <div className="grid md:grid-cols-2 gap-10">
            {
              popular.map(item=> <MenuItem 
                key={item._id}
                item={item}
                />)
            }
          </div> 
          <div className="flex items-center">
          <button className="btn  btn-outline border-0 border-b-4 mt-4">View full Menu</button>
          </div>    
    </div>
  );
};

export default PopularMenu;