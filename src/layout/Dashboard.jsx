import { NavLink, Outlet } from "react-router-dom";
import {FaShoppingCart,FaCalendar,FaAd, FaHome, FaList, FaSearch} from "react-icons/fa"
import useCart from "../hooks/useCart";
const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex ml-0">
      {/* sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          <li>
            <NavLink to={'/dashboard/userHome'}><FaHome></FaHome>User Home</NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard/reservation'}><FaCalendar></FaCalendar>Reservation</NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart>My Cart <span className="bg-green-500 rounded-full px-2">{cart.length}</span> </NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard/review'}><FaAd></FaAd>Add Review</NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard/review'}><FaList></FaList>My Bookings</NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={'/'}><FaHome></FaHome>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/order/salad'}><FaSearch></FaSearch>Menu</NavLink>
          </li>
        </ul>
      </div>


      {/* dashboard content */}
      <div className="flex-1 px-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;