import React from 'react'

export default function BreadMid({ burger }) {
    const renderBreadMid =(props) =>{
        return Object.entries(burger).map(([propsBurger, value], item) =>{
            let breadMid =[];
            for(let i = 0; i < value; i++){
                breadMid.push(<div key={i} className={propsBurger}></div>)
            }
            return breadMid;
         });
         
     };
     
    return (
        <div>
            <div className="breadTop"></div>
                {renderBreadMid(burger)}
            <div className="breadBottom"></div>
         </div>
    )
}
