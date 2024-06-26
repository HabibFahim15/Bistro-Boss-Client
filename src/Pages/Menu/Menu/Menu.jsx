import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu()
  
  const dessert =menu.filter(item => item.category==='dessert') 
  const soup =menu.filter(item => item.category==='soup') 
  const salad =menu.filter(item => item.category==='salad') 
  const pizza =menu.filter(item => item.category==='pizza') 
  const offered =menu.filter(item => item.category==='offered') 
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={'our menu'} />
      {/* main cover */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered} />
      {/* dessert menu items */}
      <MenuCategory items={dessert} img={dessertImg}  title={'dessert'}/>
      <MenuCategory items={pizza} img={pizzaImg}  title={'pizza'}/>
      <MenuCategory items={salad} img={saladImg}  title={'salad'}/>
      <MenuCategory items={soup} img={soupImg}  title={'soup'}/>
    </div>
  );
};

export default Menu;