import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/cover/Cover";

const MenuCategory = ({items,title, img}) => {
  return (
    <div className="pt-8">
       {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
            {
              items.map(item=> <MenuItem 
                key={item._id}
                item={item}
                />)
            }
          </div> 
          <div className="flex justify-center items-center w-full">
          <Link to={`/order/${title}`}><button className="btn  btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
          </div>
    </div>
  );
};

export default MenuCategory;