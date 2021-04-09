import React from 'react';
import {addBreadmid} from "../redux/Action/burgerAction";
import {useDispatch} from "react-redux"

export default function Menu({menu, total, burger}) {
    const dispatch = useDispatch();
    const handleAddBreadmid =(menuItem, amount) =>{

        dispatch(addBreadmid(menuItem, amount));
    }
   
    const renderMenu =(props) =>{
        return Object.entries(menu).map(([menuItem, price], index)=>{
            return(
                
                    <tr key={index}>
                        <td>
                            {menuItem}
                        </td>
                        <td><button onClick ={() =>handleAddBreadmid(menuItem, 1)} className="btn btn-success mr-2">+</button> 
                            {burger[menuItem]}
                        <button onClick ={()=> handleAddBreadmid(menuItem, -1)} className="btn btn-danger ml-2">-</button>
                        </td>
                        <td>{price}</td>
                        <td>{burger[menuItem] * price}</td>
                    </tr>
                
            )
        })
    };
    return (
        <div>
             <table className="table">
                   <thead> 
                       <tr>
                           <th>Thức ăn</th>
                           <th></th>
                           <th>Đơn giá</th>
                           <th>Thành tiền</th>
                       </tr>
                       {renderMenu(menu)}
                   </thead>
                   <tfoot>
                       <tr>
                           <td colSpan="2"></td>
                           <td>Tổng cộng</td>
                           <td>{total}</td>
                       </tr>
                   </tfoot>
               </table>
        </div>
    )
}
