import HomePage from "../page/HomePage/HomePage";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage";
import OrdersPage from "../page/OrdersPage/OrdersPage";
import ProductsPage from "../page/ProductsPage/ProductsPage";
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
    }
]