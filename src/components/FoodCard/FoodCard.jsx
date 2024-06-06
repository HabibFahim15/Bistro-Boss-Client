
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
  const {name, image, price, recipe, _id}= item;
  const {user} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure =useAxios()
  const [ refetch]= useCart()


  const hanldeAddToCard = () =>{
    if(user && user.email){
      // send cart Item to the database
      
      const cartItem ={
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res =>{
        console.log(res.data);
        if(res.data.insertedId){
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: `${name} added to your cart`
          });
        }
        // refetch cart to update the cart items counts
        refetch()
      })

    }else{
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
         // send to the login page
         navigate('/login',{state: {form: location}})
        }
      });
    }
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-3 py-1">${price}</p>
  <div className="card-body text-center flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div 
    onClick={hanldeAddToCard}
    className="card-actions justify-end">
      <button className="btn bg-slate-100  btn-outline border-orange-400 border-0 hover:bg-orange-400 hover:border-orange-400 border-b-4 mt-4">Add to Cart</button>
    </div>
  </div>
</div>
  );
};

export default FoodCard;