import React,{useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";



export const Personalform = () => {
  const [details, setDetails] = useState([]);  
  let navigate = useNavigate();


  useEffect(() => {
    axios
      .get("http://localhost:2021/personalsignup")
      .then((res) => {
        console.log(res);
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    let formik = useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
        },

        validationSchema:yup.object({
          firstName:yup.string().required("This field is required"),
          lastName:yup.string().required("This field is required"),
            email: yup.string()
            .email("Invalid email")
            .matches(/^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email address")
            .required("Email is required"),
          
            password: yup .string().matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{\":;'?/>,.<])(?=.*\S).{8,}$/,
            "password example - James01@"
        ).required("Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
        .required("Confirm Password is required"),
          }),

        onSubmit:(value) => {           
              let user = details.find((detail) => detail.email === value.email);
              if (user) {
                   let errorMessage = "";
                if (user.email === value.email) {
                    errorMessage = "Email is already registered.";
                } 
                toast.error(errorMessage);
                formik.resetForm();
            
              } else {
                try {
                  axios
                    .post("http://localhost:2021/personalsignup", value)
                    .then((res) => {
                      console.log(res);
                      toast.success("signed up successful");
                      setTimeout(() => {
                        navigate("/signin") 
                      }, 5000);          
                      formik.resetForm()                    
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                } catch (error) {
                  toast.error("error occured while signing up");
                  formik.resetForm();
                }
              }
          },
    })
    // validate:(values)=>{
    //   let errors = {}
    //   if (values.firstName =="") {
    //     errors.firstName = "This field is required"
    //   }
    //   if (values.lastName =="") {
    //     errors.lastName = "This field is required"
    //   }
    //   if (values.email =="") {
    //     errors.email = "This field is required"
    //   }
    //   if (values.password =="") {
    //     errors.password = "This field is required"
    //   }
    //   if (values.confirmPassword =="") {
    //     errors.confirmPassword = "This field is required"
    //   }
    //   return errors
    // }
  
  console.log(formik.errors);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
            <div className=" center-text-align signupcontent backpersonal col-4 shadow-lg mx-auto">
                <form onSubmit={formik.handleSubmit}>
                <h3 className='create'>Create Personal Account.</h3>
               <div className="d-flex justify-content-center">
                <div className='inputcover'>
             
                        <input className={formik.touched.firstName&&formik.errors.firstName?" is-invalid mt-4 form-control" :formik.touched.firstName && !formik.errors.firstName ? "is-valid mt-4 form-control":"form-control"}  onChange={formik.handleChange} required type="text" placeholder="First Name" name='firstName' onBlur={formik.handleBlur}  value={formik.values.firstName}/>
                        {formik.touched.firstName &&<small className='smally'>{formik.errors.firstName}</small>}

                        <input className={formik.touched.lastName&&formik.errors.lastName?" is-invalid mt-4 form-control":formik.touched.lastName && !formik.errors.lastName? "is-valid mt-4 form-control" : "mt-4 form-control"}  onChange={formik.handleChange} required type="text" placeholder="Last Name" name='lastName' onBlur={formik.handleBlur} value={formik.values.lastName} />
                        {formik.touched.lastName &&<small className='smally'>{formik.errors.lastName}</small>}

                        <input className={formik.touched.email&&formik.errors.email?" is-invalid mt-4 form-control" :formik.touched.email && !formik.errors.email? "is-valid mt-4 form-control" : "mt-4 form-control"}  onChange={formik.handleChange} required type="email" placeholder="Email" name='email' onBlur={formik.handleBlur}  value={formik.values.email}/>
                        {formik.touched.email &&<small className='smally'>{formik.errors.email}</small>}

                        <input className={formik.touched.password&&formik.errors.password?" is-invalid mt-4 form-control" :formik.touched.password && !formik.errors.password? "is-valid mt-4 form-control" : "mt-4 form-control"}  onChange={formik.handleChange} required type="password" placeholder="Password" name='password'onBlur={formik.handleBlur} value={formik.values.password} />
                        {formik.touched.password &&<small className='smally'>{formik.errors.password}</small>}

                        <input className={formik.touched.confirmPassword&&formik.errors.confirmPassword?" is-invalid mt-4 form-control" :formik.touched.confirmPassword && !formik.errors.confirmPassword? "is-valid mt-4 form-control" : "mt-4 form-control"}  onChange={formik.handleChange} required type="password" placeholder="Confirm Password" name='confirmPassword'onBlur={formik.handleBlur} value={formik.values.confirmPassword} />
                        {formik.touched.confirmPassword &&<small className='smally'>{formik.errors.confirmPassword}</small>}

                </div> 
                </div>  
                <Link className='already' to="/signin">Already have an account?</Link>                 
                 <button type='submit' className='signupbut' href="">Sign Up</button>
                    <div className='gandf'>

                        <p>______Or Sign Up with______</p>
                        <div className='gf'>
                            <a className='text-danger' href=""><i className="fa-brands fa-google"></i></a>
                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
    <ToastContainer />

    </>
  );
};

export default Personalform;
