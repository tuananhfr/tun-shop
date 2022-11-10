import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useStateValue } from '~/StateProvider';
function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProductDetails = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        };
        getProductDetails();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                </div>
            </>
        );
    };

    const rating = product.rating;
    // we need to store useDispatch
    const [{ basket }, dispatch] = useStateValue();
    const ShowProduct = () => {
        const handleAddCart = (product) => {
            dispatch({
                type: 'ADDITEM',
                item: product,
            });
        };
        const handleRemoveCart = () => {
            dispatch({ type: 'DELITEM', id: product.id });
        };
        return (
            <>
                <div className="col-md-6 d-flex justify-content-center mx auto product">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    {rating.rate <= 1 ? (
                        <p>🌟</p>
                    ) : rating.rate <= 2 ? (
                        <p>🌟🌟</p>
                    ) : rating.rate <= 3 ? (
                        <p>🌟🌟🌟</p>
                    ) : rating.rate <= 4 ? (
                        <p>🌟🌟🌟🌟</p>
                    ) : (
                        <p>🌟🌟🌟🌟🌟</p>
                    )}

                    <hr />
                    <span className="d-flex">
                        <small>$</small>
                        <h2>{product.price}</h2>
                    </span>
                    <p>{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2 me-2" onClick={() => handleAddCart(product)}>
                        Add to Cart
                    </button>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={() => handleRemoveCart(product)}>
                        Remove from Cart
                    </button>
                </div>
            </>
        );
    };

    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
            </div>
        </>
    );
}

export default ProductDetails;
