import React from "react";
import "../index.css";

function Header({handleFilter}){
   
    return(

        <>
        <div className="header_container">
            <h1 className="header_title pb-4">SnapShot</h1>
            <form className="search_form">
            <input onChange ={(event)=>handleFilter(event.target.value)} className="input_form" placeholder="Search.."/>
            <button className="search_btn"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <nav  className="header-nav">
                <ul className="list_items">
                    <li className="list_item"><a onClick={()=>handleFilter("mountain")}>Mountains</a></li>
                    <li className="list_item"><a onClick={()=>handleFilter("beach")}>Beaches</a></li>
                    <li className="list_item"><a onClick={()=>handleFilter("birds")}>Birds</a></li>
                    <li className="list_item"><a onClick={()=>handleFilter("food")}>Food</a></li>
                </ul>
            </nav>
        </div>
        </>
    );
}

export default Header;