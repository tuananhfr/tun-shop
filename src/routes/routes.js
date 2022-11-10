import config from '~/config';

// Pages
import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import About from '~/pages/About';
import Products from '~/pages/Products';
import ProductDetails from '~/pages/ProductDetails';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },

    { path: config.routes.about, component: About },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.products, component: Products },
    { path: config.routes.productsDetails, component: ProductDetails },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.checkout, component: Checkout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
