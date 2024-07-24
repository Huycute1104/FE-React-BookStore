import HomePage from "../page/HomePage/HomePage";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage";
import OrdersPage from "../page/OrdersPage/OrdersPage";
import ProductDetailPage from "../page/ProductDetailPage/ProductDetailPage";
import ProductsPage from "../page/ProductsPage/ProductsPage";
import SignInPage from "../page/SignInPage/SignInPage";
import SignUpPage from "../page/SignUpPage/SignUpPage";
import CartPage from "../page/CartPage/Cart.jsx";
import Success from "../page/CheckOut/Success.jsx";
import Fail from "../page/CheckOut/Fail.jsx";
import MyOrder from "../page/MyOrderPage/MyOrder.js";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/products",
    page: ProductsPage,
    isShowHeader: true,
  },
  {
    path: "/signup",
    page: SignUpPage,
    isShowHeader: true,
  },
  {
    path: "/signin",
    page: SignInPage,
  },
  {
    path: "/product/:id",
    page: ProductDetailPage,
    isShowHeader: true,
  },

  {
    path: "/checkout",
    page: OrdersPage,
    isShowHeader: true,
  },
  {
    path: "/cart",
    page: CartPage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
  {
    path: "/success",
    page: Success,
    isShowHeader: true,
  },
  {
    path: "/fail",
    page: Fail,
    isShowHeader: true,
  },
  {
  path: "/my-orders",
  page: MyOrder,
  isShowHeader: true,
},
];
