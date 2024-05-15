"use client"
import QuestSidebar from "./guestSidebar/questSidebar";
import LogedSidebar from "./userSidebar/userSidebar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAuth from "@/src/store/features/auth/auth";


const Sidebar = () => {
    const {isAuth, checkIsAuth, setCurrentUser} = useAuth((state)=> state)

    useEffect(()=>{
        const logedUSer = localStorage.getItem('loggedInUser')
        if(logedUSer){
            checkIsAuth(Boolean(logedUSer))
            setCurrentUser(JSON.parse(logedUSer))
        }
        
        
        
    },[isAuth])


    return ( 
        isAuth ? <LogedSidebar/> : <QuestSidebar/>
    );
}
 
export default Sidebar;