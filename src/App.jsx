import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
// import ThemeSettings from "./components/ThemeSettings";
// import ThemeSettingButton from "./components/ThemeSettingButton";
import Search from "./components/Search";

import Dashboard from "./pages/SuperAdmin/Dashboard";

import ProductAdmin from "./pages/SuperAdmin/Admin/ProductAdmin/ProductAdmin";
import OrderAdmin from "./pages/SuperAdmin/Admin/OrderAdmin/OrderAdmin";
import SalesAdmin from "./pages/SuperAdmin/Admin/SalesAdmin/SalesAdmin";

import OrderList from "./pages/SuperAdmin/Order/OrderList";
import OrderDetails from "./pages/SuperAdmin/Order/OrderDetails";

import ProductAdminUpdate from "./pages/SuperAdmin/Admin/ProductAdmin/ProductAdminUpdate";
import ProductAdminAdd from "./pages/SuperAdmin/Admin/ProductAdmin/ProductAdminAdd";
import ProductAdminView from "./pages/SuperAdmin/Admin/ProductAdmin/ProductAdminView";

import OrderAdminAdd from "./pages/SuperAdmin/Admin/OrderAdmin/OrderAdminAdd";
import OrderAdminUpdate from "./pages/SuperAdmin/Admin/OrderAdmin/OrderAdminUpdate";
import OrderAdminView from "./pages/SuperAdmin/Admin/OrderAdmin/OrderAdminView";

import SalesAdminAdd from "./pages/SuperAdmin/Admin/SalesAdmin/SalesAdminAdd";
import SalesAdminUpdate from "./pages/SuperAdmin/Admin/SalesAdmin/SalesAdminUpdate";
import SalesAdminView from "./pages/SuperAdmin/Admin/SalesAdmin/SalesAdminView";

import SuperAdminProfileView from "./pages/SuperAdmin/Profile/SuperAdminProfileView";
import SuperAdminProfileUpdate from "./pages/SuperAdmin/Profile/SuperAdminProfileUpdate";

import Product from "./pages/SuperAdmin/Product/Product";
import AddProduct from "./pages/SuperAdmin/Product/AddProduct";
import ViewProduct from "./pages/SuperAdmin/Product/ViewProduct";
import UpdateProduct from "./pages/SuperAdmin/Product/UpdateProduct";
import Category from "./pages/SuperAdmin/Product/Category";
import Discount from "./pages/SuperAdmin/Product/Discount";
import AddDiscount from "./pages/SuperAdmin/Product/AddDiscount";
import ViewDiscount from "./pages/SuperAdmin/Product/ViewDiscount";
import UpdateDiscount from "./pages/SuperAdmin/Product/UpdateDiscount";
import CustomerList from "./pages/SuperAdmin/Customer/CustomerList";
import Shipping from "./pages/SuperAdmin/Order/Shipping";
import CustomerDetails from "./pages/SuperAdmin/Customer/CustomerDetails";
import SalesCustomerList from "./pages/SuperAdmin/Sales/SalesCustomerList";
import SalesCustomerDetails from "./pages/SuperAdmin/Sales/SalesCustomerDetails";
import SalesOrderList from "./pages/SuperAdmin/Sales/SalesOrderList";
import SalesOrderDetails from "./pages/SuperAdmin/Sales/SalesOrderDetails";

import ProductAdminDashboard from "./pages/ProductAdmin/ProductAdminDashboard";
import ProductSideNav from "./components/ProductSideNav";
import ProductAdminProfileView from "./pages/ProductAdmin/Profile/ProductAdminProfileView";
import ProductAdminProfileUpdate from "./pages/ProductAdmin/Profile/ProductAdminProfileUpdate";
import PADiscount from "./pages/ProductAdmin/Product/PADiscount";
import PAAddDiscount from "./pages/ProductAdmin/Product/PAAddDiscount";
import PAViewDiscount from "./pages/ProductAdmin/Product/PAViewDiscount";
import PAUpdateDiscount from "./pages/ProductAdmin/Product/PAUpdateDiscount";
import PACategory from "./pages/ProductAdmin/Product/PACategory";
import PAProduct from "./pages/ProductAdmin/Product/PAProduct";
import PAAddProduct from "./pages/ProductAdmin/Product/PAAddProduct";
import PAViewProduct from "./pages/ProductAdmin/Product/PAViewProduct";
import PAUpdateProduct from "./pages/ProductAdmin/Product/PAUpdateProduct";

import OrderSideNav from './components/OrderSideNav';
import OrderAdminDashboard from './pages/OrderAdmin/OrderAdminDashboard';
import OrderAdminProfileView from './pages/OrderAdmin/Profile/OrderAdminProfileView';
import OrderAdminProfileUpdate from './pages/OrderAdmin/Profile/OrderAdminProfileUpdate';
import OrderAdminOrder from './pages/OrderAdmin/Order/OrderAdminOrder';
import OrderAdminViewOrder from './pages/OrderAdmin/Order/OrderAdminViewOrder';
import OrderAdminShipping from './pages/OrderAdmin/Order/OrderAdminShipping';

import SalesSideNav from './components/SalesSideNav';
import SalesDashboard from './pages/SalesAdmin/SalesDashboard';
import SalesAdminOrder from './pages/SalesAdmin/Sales/SalesAdminOrder';
import SalesAdminOrderDetails from './pages/SalesAdmin/Sales/SalesAdminOrderDetails';
import SalesAdminCustomerList from './pages/SalesAdmin/Sales/SalesAdminCustomerList';
import SalesAdminCustomerdetails from './pages/SalesAdmin/Sales/SalesAdminCustomerdetails';
import SalesAdminProfileAdminView from './pages/SalesAdmin/Profile/SalesAdminProfileView';
import SalesAdminProfileUpdate from './pages/SalesAdmin/Profile/SalesAdminProfileUpdate';
import AdminLogin from './components/Login/AdminLogin';
import Subcategory from './pages/SuperAdmin/Product/Subcategory';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* ----------------------SUPER-ADMIN---------------------------- */}
          <Route path="/" element={<><SideNav /> <Dashboard /><Search /><Footer /></>}/>
          <Route path="/superadminprofile-view/" element={<><SideNav /><SuperAdminProfileView /><Search /><Footer /></>}/>
          <Route path="/superadminprofile-update" element={<><SideNav /><SuperAdminProfileUpdate /><Search /><Footer /></>}/>
          <Route path="/productadmin" element={<><SideNav /><ProductAdmin /><Search /><Footer /></>} />
          <Route path="/productadmin-add" element={<><SideNav /><ProductAdminAdd /><Search /><Footer /></>} />
          <Route path="/productadmin-update/:id" element={<><SideNav /><ProductAdminUpdate /><Search /><Footer /></>} />
          <Route path="/productadmin-view/:id" element={<><SideNav /><ProductAdminView /><Search /><Footer /></>} />
          <Route path="/orderadmin" element={<><SideNav /><OrderAdmin /><Search /><Footer /></>} />
          <Route path="/orderadmin-add" element={<><SideNav /><OrderAdminAdd /><Search /><Footer /></>} />
          <Route path="/orderadmin-update/:id" element={<><SideNav /><OrderAdminUpdate /><Search /><Footer /></>} />
          <Route path="/orderadmin-view/:id" element={<><SideNav /><OrderAdminView /><Search /><Footer /></>} />
          <Route path="/salesadmin" element={<><SideNav /><SalesAdmin /><Search /><Footer /></>} />
          <Route path="/salesadmin-add" element={<><SideNav /><SalesAdminAdd /><Search /><Footer /></>} />
          <Route path="/salesadmin-update" element={<><SideNav /><SalesAdminUpdate /><Search /><Footer /></>} />
          <Route path="/salesadmin-view" element={<><SideNav /><SalesAdminView /><Search /><Footer /></>} />
          <Route path="/products" element={<><SideNav /><Product /><Search /><Footer /></>} />
          <Route path="/categories" element={<><SideNav /><Category /><Search /><Footer /></>} />
          <Route path="/subcategories" element={<><SideNav /><Subcategory /><Search /><Footer /></>} />
          <Route path="/discount" element={<><SideNav /><Discount /><Search /><Footer /></>} />
          <Route path="/addproduct" element={<><SideNav /><AddProduct /><Search /><Footer /></>} />
          <Route path="/viewproduct" element={<><SideNav /><ViewProduct /><Search /><Footer /></>} />
          <Route path="/updateproduct" element={<><SideNav /><UpdateProduct /><Search /><Footer /></>} />
          <Route path="/viewdiscount" element={<><SideNav /><ViewDiscount /><Search /><Footer /></>} />
          <Route path="/updatediscount" element={<><SideNav /><UpdateDiscount /><Search /><Footer /></>} />
          <Route path="/adddiscount" element={<><SideNav /><AddDiscount /><Search /><Footer /></>} />
          <Route path="/orderlist" element={<><SideNav /><OrderList /><Search /><Footer /></>} />
          <Route path="/orderdetails" element={<><SideNav /><OrderDetails /><Search /><Footer /></>} />
          
          <Route path="/shipping" element={<><SideNav /><Shipping /><Search /><Footer /></>} />
          <Route path="/customerlist" element={<><SideNav /><CustomerList /><Search /><Footer /></>} />
          <Route path="/customerdetails" element={<><SideNav /><CustomerDetails /><Search /><Footer /></>} />
          <Route path="/sales-customerlist" element={<><SideNav /><SalesCustomerList /><Search /><Footer /></>} />
          <Route path="/sales-customerdetails"element={<><SideNav /><SalesCustomerDetails /><Search /><Footer /></>}/>
          <Route path="/sales-orderlist" element={<><SideNav /><SalesOrderList /><Search /><Footer /></>} />
          <Route path="/sales-orderdetails"belement={<><SideNav /><SalesOrderDetails /><Search /><Footer /></>} />
          {/* ------------------------ SUPER-ADMIN-END----------------------------- */}


          {/* --------------------------PRODUCT-ADMIN------------------------------- */}
          <Route path="/productadmin-dashboard" element={<><ProductSideNav /><ProductAdminDashboard /><Search /><Footer /></>}/>
          <Route path="/productadminprofile-view"element={<><ProductSideNav /><ProductAdminProfileView /><Search /><Footer /></>}/>
          <Route path="/productadminprofile-update" element={<><ProductSideNav /><ProductAdminProfileUpdate /><Search /><Footer /></>}/>
          <Route path="/productadmin-discount" element={<><ProductSideNav/><PADiscount/><Search /><Footer /></>}/>
          <Route path="/productadmin-add-discount" element={<><ProductSideNav/><PAAddDiscount/><Search /><Footer /></>}/>
          <Route path="/productadmin-view-discount" element={<><ProductSideNav/><PAViewDiscount/><Search /><Footer /></>}/>
          <Route path="/productadmin-update-discount" element={<><ProductSideNav/><PAUpdateDiscount/><Search /><Footer /></>}/>
          <Route path="/productadmin-category" element={<><ProductSideNav/><PACategory/><Search /><Footer /></>}/>         
          <Route path="/productadmin-products" element={<><ProductSideNav/><PAProduct/><Search /><Footer /></>}/>
          <Route path="/productadmin-add-products" element={<><ProductSideNav/><PAAddProduct/><Search /><Footer /></>}/>
          <Route path="/productadmin-view-products" element={<><ProductSideNav/><PAViewProduct/><Search /><Footer /></>}/>
          <Route path="/productadmin-update-products" element={<><ProductSideNav/><PAUpdateProduct/><Search /><Footer /></>}/>
        {/* -------------------------PRODUCT-ADMIN-END--------------------------- */}


        {/* ---------------------------------ORDER-ADMIN------------------------- */}
          <Route path="/orderadmin-dashboard" element={<><OrderSideNav/> <OrderAdminDashboard/><Search /><Footer /></>} />
          <Route path="/orderadmin-view" element={<><OrderSideNav/> <OrderAdminProfileView/><Search /><Footer /></>} />
          <Route path="/orderadmin-update" element={<><OrderSideNav/> <OrderAdminProfileUpdate/><Search /><Footer /></>} />
          <Route path="/orderadmin-order" element={<><OrderSideNav/> <OrderAdminOrder/><Search /><Footer /></>} />
          <Route path="/orderadmin-view-order" element={<><OrderSideNav/> <OrderAdminViewOrder/><Search /><Footer /></>} />
          <Route path="/orderadmin-shipping" element={<><OrderSideNav/> <OrderAdminShipping/><Search /><Footer /></>} />
        {/* ------------------------------ORDER-ADMIN-END------------------------ */}


        {/* ---------------------------------SALES-ADMIN------------------------- */}
          <Route path="/salesadmin-dashboard" element={<><SalesSideNav/><SalesDashboard /><Search /><Footer /></>} />
          <Route path="/salesadmin-order" element={<><SalesSideNav/><SalesAdminOrder /><Search /><Footer /></>} />
          <Route path="/salesadmin-orderdetails" element={<><SalesSideNav/><SalesAdminOrderDetails /><Search /><Footer /></>} />
          <Route path="/salesadmin-customerlist" element={<><SalesSideNav/><SalesAdminCustomerList /><Search /><Footer /></>} />
          <Route path="/salesadmin-customerdetails" element={<><SalesSideNav/><SalesAdminCustomerdetails /><Search /><Footer /></>} />
          <Route path="/salesadmin-profileview" element={<><SalesSideNav/><SalesAdminProfileAdminView /><Search /><Footer /></>} />
          <Route path="/salesadmin-profileupdate" element={<><SalesSideNav/><SalesAdminProfileUpdate /><Search /><Footer /></>} />
        {/* -------------------------------SALES-ADMIN-END------------------------ */}

          <Route path="/login" element={<AdminLogin/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
