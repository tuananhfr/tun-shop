function Contact() {
    return (
        <div>
            <div className="container mb-5">
                <div className="row-12 text-center py-4 my-4">
                    <h1>Have Some Question?</h1>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-md 5 d-flex justify-content-center">
                    <img
                        src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/contact-us-pages-sej-5f63d4f927b04-1520x800.png"
                        alt="Contact Us"
                        height="350px"
                        width="600px"
                    />
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label for="exampleForm" className="form-label">
                                Full Name
                            </label>
                            <input type="text" className="form-control" id="exampleForm" placeholder="Jonh Smith" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">
                                Example textarea
                            </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <button type="submit" class="btn btn-outline-primary">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
