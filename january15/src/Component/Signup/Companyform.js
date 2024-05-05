import React,{useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";



export const Companyform = () => {
  const [details, setDetails] = useState([]);
  let navigate = useNavigate();


  useEffect(() => {
    axios
      .get("http://localhost:2021/companysignup")
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
            companyEmail:"",
            registrationNumber:"",
            companyName:"",
            password:"",
            confirmPassword:"",
        },

        validationSchema:yup.object({
            companyEmail: yup.string()
            .email("Invalid email")
            .matches(/^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email address")
            .required("Email is required"),

            registrationNumber:yup.string().required("This field is required").max(8,"maximum of 8 characters"),
            companyName:yup.string().required("This field is required"),
            password: yup .string().matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{\":;'?/>,.<])(?=.*\S).{8,}$/,
            "password example - James01@"
        ).required("Password is required"),
              confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
              .required("Confirm Password is required"),
          }),

        onSubmit:(value) => {           
              let user = details.find((detail) => detail.companyEmail === value.companyEmail || detail.registrationNumber === value.registrationNumber);
              if (user) {
                   let errorMessage = "";
                if (user.companyEmail === value.companyEmail) {
                    errorMessage = "Email is already registered.";
                } else {
                    errorMessage = "Registration number is already in use.";
                }
                toast.error(errorMessage);
                formik.resetForm();
            
              } else {
                try {
                  axios
                    .post("http://localhost:2021/companysignup", value)
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
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className=" center-text-align signupcontent col-4 shadow-lg mx-auto">
                <form onSubmit={formik.handleSubmit}>
                <h3 className='create'>Create Company Account.</h3>
               <div className="d-flex justify-content-center">
                <div className='inputcover'>
                        <input className={formik.touched.companyEmail && formik.errors.companyEmail? "is-invalid form-control": formik.touched.companyEmail && !formik.errors.companyEmail? "is-valid form-control": "form-control"} onChange={formik.handleChange} required type="email" placeholder="Company Email" name="companyEmail" onBlur={formik.handleBlur}value={formik.values.companyEmail}/>
                       {formik.touched.companyEmail&&<small className="smally">{formik.errors.companyEmail}</small>}

                        <input className={formik.touched.registrationNumber&&formik.errors.registrationNumber?" is-invalid mt-4 form-control" : formik.touched.registrationNumber&&!formik.errors.registrationNumber? "is-valid mt-4 form-control":"mt-4 form-control"} onChange={formik.handleChange}  required type="text" placeholder="Registration Number" name="registrationNumber" onBlur={formik.handleBlur} value={formik.values.registrationNumber} />
                        {formik.touched.registrationNumber&&<small className="smally">{formik.errors.registrationNumber}</small>}

                        <input className={formik.touched.companyName&&formik.errors.companyName?" is-invalid mt-4 form-control" : formik.touched.companyName&&!formik.errors.companyName? "is-valid mt-4 form-control":"mt-4 form-control"}   onChange={formik.handleChange}  required type="text" placeholder="Company Name" name="companyName" onBlur={formik.handleBlur} value={formik.values.companyName} />
                       {formik.touched.companyName&&<small className="smally">{formik.errors.companyName}</small>}

                        <input className={formik.touched.password&&formik.errors.password?" is-invalid mt-4 form-control" : formik.touched.password&&!formik.errors.password? "is-valid mt-4 form-control":"mt-4 form-control"}   onChange={formik.handleChange}  required type="password" placeholder="Password" name="password" onBlur={formik.handleBlur} value={formik.values.password} />
                        {formik.touched.password&&<small className="smally">{formik.errors.password}</small>}


              
                        <input className={formik.touched.confirmPassword&&formik.errors.confirmPassword?" is-invalid mt-4 form-control" : formik.touched.confirmPassword&&!formik.errors.confirmPassword? "is-valid mt-4 form-control":"mt-4 form-control"}  onChange={formik.handleChange}  required type="password" placeholder="Confirm Password" name="confirmPassword" onBlur={formik.handleBlur} value={formik.values.confirmPassword} />
                        {formik.touched.confirmPassword&&<small className="smally">{formik.errors.confirmPassword}</small>}

                </div> 
                </div>  
                <Link className='already' to="/signin">Already have an account?</Link>                 
                 <button type="submit" className='signupbut' href="">Sign Up</button>

                    <div className='gandf '>

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

   {/* **************notes************
   
    {formik.touched.confirmPassword?<small className="small">{formik.errors.confirmPassword}</small>:""}
   
   */}

    </>
  );
};
export default Companyform;
