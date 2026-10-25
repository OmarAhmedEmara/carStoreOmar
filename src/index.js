
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import App from './App';
import { createBrowserRouter , RouterProvider } from 'react-router';
import { AllData } from './Data/AllData';
import AllCart from './Cart/AllCart';
import ScrollToTop from 'react-scroll-to-top';
import "./css/style.css";
import AllCarFinance from './CarFinance/AllCarFinance';
import AllHowItWorks from './HowItWorks/AllHowItWorks';
import SellOrtradeIn from './SellOrTradeIn/SellOrtradeIn';
import AllFindYourCar from './FindYourCar/AllFindYourCar';
import AllSingleCar from './SingleCar/AllSingleCar';

axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'true';


var ahmed = createBrowserRouter([
    {
      path:"/",
      element : <App/>
    },
     {
      path:"Carsfinance",
      element : <AllCarFinance/>
    },
     {
      path:"HowItWorks",
      element : <AllHowItWorks/>
    },
    {
      path:"SellOrTradeIn",
      element : <SellOrtradeIn/>
    },
    {
      path:"FindCars",
      element : <AllFindYourCar/>
    },
     {
      path:"singlecars/:id",
      element : <AllSingleCar/>
    },



     {
      path:"cart",
      element : <AllCart/>
    }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <AllData>
    <ScrollToTop/>
   <RouterProvider router={ahmed}/>

 </AllData>
 
);


