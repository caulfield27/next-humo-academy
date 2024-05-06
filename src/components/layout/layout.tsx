import { Flex } from "antd";
import Sidebar from "../sidebar/sidebar";
import React from "react";

const Layouts = ({children}:{children:React.ReactNode}) => {
    return (
        <div className='app-container'>
            <Sidebar/>
            <div className="pages-content">
                {children}    
            </div>
            
        </div>  
        
    );
}
 
export default Layouts;