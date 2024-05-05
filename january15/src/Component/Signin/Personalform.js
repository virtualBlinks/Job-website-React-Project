import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                toast.error("Failed to fetch data");
            });
    }, []);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string()
                .email("Invalid email")
                .required("Email is required"),
            password: yup.string()
                .required("Password is required")
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{\":;'?/>,.<])(?=.*\S).{8,}$/,
                    "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
                ),
        }),
        onSubmit: async (values) => {
            const user = details.find(detail => detail.email === values.email && detail.password === values.password);
            if (user) {
                toast.success("Signed in successfully");
                setTimeout(() => {
                  navigate("/generalpersonal") 
                }, 5000);          
                formik.resetForm()
            } else {
                toast.error("Invalid credentials");
            }
            formik.resetForm();
        },
    });

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="signincontent shadow-lg mx-auto col-4">
                        <form onSubmit={formik.handleSubmit}>
                            <h3 className='create2'>Sign in to Personal Account.</h3>
                            <div className="d-flex  justify-content-center">
                                <div className='inputcover'>
                                    <input
                                        className={formik.touched.email && formik.errors.email ? "is-invalid mt-4 form-control" : formik.touched.email && !formik.errors.email ? "is-valid mt-4 form-control" : "mt-4 form-control"}
                                        onChange={formik.handleChange}
                                        required
                                        type="email"
                                        placeholder="Email"
                                        name='email'
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && <small className='smally'>{formik.errors.email}</small>}

                                    <input
                                        className={formik.touched.password && formik.errors.password ? "is-invalid mt-4 form-control" : formik.touched.password && !formik.errors.password ? "is-valid mt-4 form-control" : "mt-4 form-control"}
                                        onChange={formik.handleChange}
                                        required
                                        type="password"
                                        placeholder="Password"
                                        name='password'
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    {formik.touched.password && <small className='smally'>{formik.errors.password}</small>}
                                </div>
                            </div>
                            <div className='linksholder'>
                                <a className='forgot' href="">Forgot Password?</a>
                                <Link className='back' to="/signup">Create Account</Link>
                                <button type="submit" className='signinbut'>Sign In</button>
                            </div>
                            <div className='gandff'>
                                <p>_______Or Sign in with_______</p>
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
    )
}
export default Personalform;
