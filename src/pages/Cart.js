import { NavLink } from 'react-router-dom';
import { useStateValue } from '~/StateProvider';

function Cart() {
    const [{ basket }, dispatch] = useStateValue();
    const cartItems = (cartItem) => {
        const handleClose = (item) => {
            dispatch({ type: 'DELITEM', id: item.id });
        };
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button
                        onClick={() => handleClose(cartItem)}
                        className="btn-close float-end"
                        aria-label="Close"
                    ></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <div className="d-flex">
                                <small>$</small>
                                <p className="lead fw-bold">{cartItem.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    };
    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary w-25 mx-auto">
                        Proceed To Checkout
                    </NavLink>
                </div>
            </div>
        );
    };
    return (
        <div>
            {basket?.length === 0 && emptyCart()}
            {basket?.length !== 0 && basket?.map(cartItems)}
            {basket?.length !== 0 && button()}
        </div>
    );
}

export default Cart;
