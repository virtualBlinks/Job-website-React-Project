import React from 'react'
import Postjobscard from '../postjob/Postjobscard'

function Content() {
    return (
        <>
            <div className='content'>
                <div className="contentsearch">
                    <label for="search"><i className="bi bi-search"></i></label>
                    <input id='search' className='search' type="text" placeholder='Search job categories' />
                </div>
                <div className='contentinner'>
                    <div className='jobcategories' >
                        <h6> <a href="">Information Technology (IT)</a></h6>
                        <h6> <a href="">Healthcare</a></h6>
                        <h6> <a href="">Education</a></h6>
                        <h6> <a href="">Finance</a></h6>
                        <h6> <a href="">Marketing</a></h6>
                        <h6> <a href="">Engineering</a></h6>
                        <h6> <a href="">Human Resources (HR)</a></h6>
                        <h6> <a href="">Customer Service</a></h6>
                        <h6> <a href="">Sales</a></h6>
                        <h6> <a href="">Administration</a></h6>
                        <h6> <a href="">Manufacturing</a></h6>
                        <h6> <a href="">Retail</a></h6>
                        <h6> <a href="">Hospitality</a></h6>
                        <h6> <a href="">Consulting</a></h6>
                        <h6> <a href="">Legal</a></h6>
                        <h6> <a href="">Design</a></h6>
                        <h6> <a href="">Research and Development (R&D)</a></h6>
                        <h6> <a href="">Construction</a></h6>
                        <h6> <a href="">Media and Communications</a></h6>
                        <h6> <a href="">Transportation and Logistics</a> </h6>
                    </div>
                    <div>
                        <div id="carouselExampleSlidesOnly" className="carousel slmain slide" data-bs-ride="carousel">
                            <div class="carousel-inner slm">
                                <div class="carousel-item active">
                                    <img src="../sliderimgs/jobposrer (3).png" className="d-block sl" alt="..." />
                                </div>
                                <div class="carousel-item sll">
                                    <img src="../sliderimgs/jobposrer (4).png" className="d-block sl" alt="..." />
                                </div>
                                <div class="carousel-item sll">
                                    <img src="../sliderimgs/jobposrer (5).png" className="d-block sl" alt="..." />
                                </div>
                                <div class="carousel-item sll">
                                    <img src="../sliderimgs/jobposrer (6).png" className="d-block sl" alt="..." />
                                </div>
                                <div class="carousel-item sll">
                                    <img src="../sliderimgs/jobposrer (7).png" className="d-block sl" alt="..." />
                                </div>
                                <div class="carousel-item sll">
                                    <img src="../sliderimgs/jobposrer (8).png" className="d-block sl" alt="..." />
                                </div>
                                <div class="carousel-item sll">
                                    <img src="../sliderimgs/jobposrer (9).png" className="d-block sl" alt="..." />
                                </div>
                                <div class="carousel-item sll">
                                    <img src="../sliderimgs/jobposrer (10).png" className="d-block sl" alt="..." />
                                </div>
                                <div class="carousel-item sll">
                                    <img src="../sliderimgs/jobposrer (11).png" className="d-block sl" alt="..." />
                                </div>
                                <div class="carousel-item sll">
                                    <img src="../sliderimgs/jobposrer (1).png" className="d-block sl" alt="..." />
                                </div>
                                <div class="carousel-item sll">
                                    <img src="../sliderimgs/jobposrer (2).png" className="d-block sl" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='jobposting'>
                        <Postjobscard/>
                    </div>
                    <div className="jobcategoriess">
                        <img className='three' src="../sliderimgs/jobflags (3).png" alt="" />
                        <img className='two' src="../sliderimgs/jobflags (2).png" alt="" />
                        <img className='one' src="../sliderimgs/jobflags (1).png" alt="" />
                        <div className='mt-5'>
                            <h4>Socials</h4>
                            <div className='d-flex gap-5 mt-4 socials'>
                                <img src="../sliderimgs/Facebook.png" alt="" />
                                <img src="../sliderimgs/Instagram.png" alt="" />
                                <img src="../sliderimgs/Twitter.png" alt="" />
                                <img src="../sliderimgs/LinkedIn.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='footerjobpost'>
                <div className='foott'>
                    <div><img className='ftarrow' src="../sliderimgs/footer (1).png" alt="" /></div>
                    <div> <img className='ftback' src="../sliderimgs/footer (2).png" alt="" /></div>
                    <span className='textfooter'>H-Resource Agency</span>
                </div>
            </div>

        </>
    )
}

export default Content