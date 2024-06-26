import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const {createUser,updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate()


  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name , data.photoURL)
      .then(() =>{
        console.log('user profile info updated');
        reset()
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });
        navigate('/')
      })
      .catch(error => console.log(error))
    })
  }

  return (
   <>
   <Helmet>
    <title>Bistro Boss || Sign UP</title>
   </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text"  {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text"  {...register("photoURL", { required: true })} placeholder="PhotoURL" className="input input-bordered" />
              {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password"  {...register("password",
               { required: true,
                maxLength: 20,
                 minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                  })} name="password" placeholder="password" className="input input-bordered" />
              {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>} 
              { errors.password?.type === "maxLength" &&<span className="text-red-600">Password must be Maximum 20 Carecter</span>}
              {
                errors.password?.type === 'minLength' && <span className="text-red-600">Password must be Minimum 6 Carecters</span>
              }
              {
                errors.password?.type === "pattern" && <span className="text-red-600">Password must be One uppercase one lowercase one number and one special carecter</span>
              }
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input  className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="pb-8 pl-8"><small>Already have a Account <Link to={'/login'}>Please Login</Link></small></p>
        </div>
      </div>
    </div>
   </>
  );
};

export default SignUp;