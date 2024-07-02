import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
      Made with 💗 By <span></span>
  <span 
    className="text-red-500 font-Family-'cursive' font-bold" 
    style={{ color: '#FFFF00', fontWeight: 'bold', textShadow: '2px 2px 4px #000000' }}
  >
    ARIF
  </span>
  
        <br />
        2024 &copy; Design By AK,s inc. All rights reserved🧿
      </div>
    </div>
  );
};

export default AppLayout;
