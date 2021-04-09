import React from 'react';
import {useSelector} from "react-redux";

import BreadMid from './BreadMid';
import Menu from './Menu';

export default function BaiTapBurger() {
    
    const {burger, menu, total } = useSelector((state) => state.burger);
    
    return (
        <div className="container">
        <h1 className="text-center display-4 text-success">Bài tập Burger</h1>
        <div className="row">
            <div className="col-sm-7">
                <h3 className="text-center text-danger">Bánh burger của bạn</h3>
                <BreadMid burger={burger}/>
            </div>
            <div className="col-sm-5">
                <h3 className="text-center text-primary">Chọn thức ăn</h3>
                <Menu menu={menu} total ={total} burger={burger}/>
               
            </div>
        </div>
    </div>
    )
}

