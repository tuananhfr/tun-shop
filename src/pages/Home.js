import Products from '~/pages/Products';

function Home() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://img.ltwebstatic.com/images3_ach/2022/10/20/1666251672661fe525b3580e58067488d987fc1c8c.jpg"
                            className="d-block w-100"
                            alt="collection de fete"
                            height="500px"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.ltwebstatic.com/images3_ach/2022/11/07/1667803422a10135aa3c881e0a09c37825a2b01074.jpg"
                            className="d-block w-100"
                            alt="accessoires"
                            height="500px"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://m.media-amazon.com/images/I/71a6X5EbYQL._SX3000_.jpg"
                            className="d-block w-100"
                            alt="electric"
                            height="500px"
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Products />
        </div>
    );
}

export default Home;
