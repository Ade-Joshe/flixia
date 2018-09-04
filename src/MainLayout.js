import React from 'react';
import Footer from "./Pages/components/footer";
import Header from './Pages/components/header';
 
 const MainLayout = (props) => {
    return(
        <div>
            <Header />
                {props.children}
             <Footer/>
      </div>
    )
 }
 
 export default MainLayout;