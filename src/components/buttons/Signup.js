function Signup() {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button
                type="button"
                className="btn btn-outline-primary ms-2"
                data-bs-toggle="modal"
                data-bs-target="#SignUpModal"
            >
                <span className="fa fa-user-plus me-1"></span>Register
            </button>

            {/* <!-- Modal --> */}
            <div
                className="modal fade"
                id="SignUpModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Signup
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google me-2"></span>Sign up With Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span>Sign up With facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">
                                        Username
                                    </label>
                                    <input type="text" className="form-control" id="exampleInput" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail2" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail2"
                                        aria-describedby="emailHelp"
                                    />
                                    <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword2" className="form-label">
                                        Password
                                    </label>
                                    <input type="password" className="form-control" id="exampleInputPassword2" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                                    <label className="form-check-label" htmlFor="exampleCheck2">
                                        Check me out
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
