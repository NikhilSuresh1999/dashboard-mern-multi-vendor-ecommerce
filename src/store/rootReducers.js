import authReducer from "./Reducers/authReducer";
import  bannerReducer  from "./Reducers/bannerReducer";
import categoryReducer from "./Reducers/categoryReducer";
import chatReducer from "./Reducers/chatReducer";
import  dashboardReducer  from "./Reducers/dashboardReducer";
import  OrderReducer  from "./Reducers/orderReducer";
import  PaymentReducer  from "./Reducers/paymentReducer";
import productReducer from "./Reducers/productReducer";
import sellerReducer from './Reducers/sellerReducer';


const rootReducer ={
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  seller: sellerReducer,
  chat: chatReducer,
  order: OrderReducer,
  payment: PaymentReducer,
  dashboard: dashboardReducer,
  banner: bannerReducer
}

export default rootReducer;