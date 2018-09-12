import React, { Component } from 'react';
import Header from './Pages/Admin/AdminHeader';
import Sidebar from './Pages/Admin/AdminSidebar';

 const AdminLayout = (props) => {
    return(
        <div>
            <Header />
             <Sidebar/>
                {props.children}
      </div>
    )
 }
 
 export default AdminLayout;