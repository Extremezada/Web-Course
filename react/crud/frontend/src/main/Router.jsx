import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

export default props =>(
    <Routes>
        <Route exact path='/' Component={<Home/>} />
        <Route path='/users' Component={<UserCrud/>} />
        <Route path='*' element={<Home/>} />
    </Routes>
)