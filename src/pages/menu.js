import React from "react";
import { MenuList } from "./menulist";
import MenuItem from "../components/menuitem";
import "../styles/menu.css";

export default function Menu() {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {MenuList.map((item, key) => {
                    return (
                        <MenuItem key={key} image={item.image} name={item.name} price={item.price}/>
                    );
                })}
            </div>

        </div>
    );
}