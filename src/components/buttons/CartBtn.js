import { NavLink } from 'react-router-dom';
import { useStateValue } from '~/StateProvider';

function CartBtn() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart({basket?.length})
            </NavLink>
        </div>
    );
}

export default CartBtn;
