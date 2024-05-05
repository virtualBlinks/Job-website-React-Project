import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
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

    const formik = useFormik({
        initialValues: {
            companyEmail: "",
            registrationNumber: "",
            password: "",
        },
        validationSchema: yup.object({
            companyEmail: yup.string()
                .email("Invalid email")
                .required("Email is required"),
            registrationNumber: yup.string()
                .required("Registration number is required")
                .max(8, "Maximum of 8 characters"),
            password: yup.string()
                .required("Password is required")
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{\":;'?/>,.<])(?=.*\S).{8,}$/,
                    "Password example: James01@"
                ),
        }),
        onSubmit: async (values) => {
            const user = details.find(detail => detail.companyEmail === values.companyEmail && detail.registrationNumber === values.registrationNumber && detail.password === values.password);
            if (user) {
                toast.success("Signed in successfully");  
                setTimeout(() => {
                  navigate("/generaljob") 
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
                            <h3 className='create2'>Sign in to Company Account.</h3>
                            <div className="d-flex justify-content-center">
                                <div className='inputcover'>
                                    <input
                                        className={formik.touched.companyEmail && formik.errors.companyEmail ? "is-invalid form-control" : formik.touched.companyEmail && !formik.errors.companyEmail ? "is-valid form-control" : "form-control"}
                                        onChange={formik.handleChange}
                                        required
                                        type="email"
                                        placeholder="Company Email"
                                        name="companyEmail"
                                        onBlur={formik.handleBlur}
                                        value={formik.values.companyEmail}
                                    />
                                    {formik.touched.companyEmail && <small className="smally">{formik.errors.companyEmail}</small>}

                                    <input
                                        className={formik.touched.registrationNumber && formik.errors.registrationNumber ? "is-invalid mt-4 form-control" : formik.touched.registrationNumber && !formik.errors.registrationNumber ? "is-valid mt-4 form-control" : "mt-4 form-control"}
                                        onChange={formik.handleChange}
                                        required
                                        type="text"
                                        placeholder="Registration Number"
                                        name="registrationNumber"
                                        onBlur={formik.handleBlur}
                                        value={formik.values.registrationNumber}
                                    />
                                    {formik.touched.registrationNumber && <small className="smally">{formik.errors.registrationNumber}</small>}

                                    <input
                                        className={formik.touched.password && formik.errors.password ? "is-invalid mt-4 form-control" : formik.touched.password && !formik.errors.password ? "is-valid mt-4 form-control" : "mt-4 form-control"}
                                        onChange={formik.handleChange}
                                        required
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    {formik.touched.password && <small className="smally">{formik.errors.password}</small>}
                                </div>
                            </div>
                            <div className='linksholder'>
                                <Link className='forgot' to="/forgot-password">Forgot Password?</Link>
                                <Link className='back' to="/signup">Create Account</Link>
                                <button className='signinbut' type="submit">Sign In</button>
                            </div>
                            <div className='gandff'>
                                <p>___________Or Sign in with___________</p>
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

export default Companyform;
