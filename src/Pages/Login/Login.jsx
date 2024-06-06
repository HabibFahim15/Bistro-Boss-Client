import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
const Login = () => {

  
  const [disabled, setDisabled] = useState(true)
  const navigate = useNavigate();
  const location = useLocation()
  const {signIn} = useContext(AuthContext)

  const from = location.state?.form?.pathname || '/'
  console.log(location.state);

  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
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
      navigate(from, {replace: true})
    })
  }

  const handleValidateCaptcha = (e) => {
      const user_captcha_value = e.target.value;
      if(validateCaptcha(user_captcha_value) ){
          setDisabled(false)
      }else{
          setDisabled(true)
      }
  }
  return (
    <>
    <Helmet>
    <title>Bistro Boss || Log In</title>
   </Helmet>
   <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  flex-col md:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card lg:w-1/2  max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
           
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control">
             <LoadCanvasTemplate />
             <input onBlur={handleValidateCaptcha}  type="password" name="captcha" placeholder="Type the Captcha" className="input input-bordered"/>
              <label className="label">
                
               
             </label>
             <label className="label">
             </label>
           </div>
            <div className="form-control mt-6">
              {/* todo false to disabled */}
              <input disabled={false} className="btn btn-primary" type="submit"  value={'Login'} />
            </div>
          </form>
          <p className="pb-8 pl-8"><small>New Here? <Link to={'/signup'}>Create an account</Link> </small></p>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Login;