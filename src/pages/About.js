import { NavLink } from 'react-router-dom';

function About() {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            The About Us page of your website is an essential source of information for all who want to
                            know more about your business. About Us pages are where you showcase your history, what is
                            unique about your work, your company’s values, and who you serve. The design, written
                            content, and visual or video elements together tell an important story about who you are and
                            why you do it. How can you make the most of this integral part of your marketing strategy?
                            In this article, you’ll learn what makes an exceptional About Us page and find 25 about us
                            page examples of the best ones out there to inspire your own About Us page design and
                            content.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">
                            Contact Us
                        </NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img
                            src="https://www.poynter.org/wp-content/uploads/2019/03/shutterstock_446870920-1500x1001.jpg"
                            alt="about us"
                            height="400px"
                            width="600px"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
