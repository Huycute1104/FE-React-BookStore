import AdminPage from "../page/AdminPage/AdminPage";
import HomePage from "../page/HomePage/HomePage";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage";
import OrdersPage from "../page/OrdersPage/OrdersPage";
import ProductDetailPage from "../page/ProductDetailPage/ProductDetailPage";
import ProductsPage from "../page/ProductsPage/ProductsPage";
import SignInPage from "../page/SignInPage/SignInPage";
import SignUpPage from "../page/SignUpPage/SignUpPage";
import TypeProductPage from "../page/TypeProductPage/TypeProductPage";

export const routes =[
    {
        path:'/',
        page:HomePage,
        isShowHeader:true

    },
    {
        path:'/products',
        page:ProductsPage,
        isShowHeader:true
    },
    {
        path:'/signup',
        page:SignUpPage,
        isShowHeader:true
    },
    {
        path:'/signin',
        page:SignInPage
    },
    {
        path:'/productdetail',
        page:ProductDetailPage,
        isShowHeader:true
    },
    {
        path:'/type',
        page:TypeProductPage,
        isShowHeader:true
    },
    {
        path:'/orders',
        page:OrdersPage,
        isShowHeader:true
    },
    {
        path:'*',
        page:NotFoundPage
    },
    {
        path:'/admin',
        page:AdminPage
    }
]