import React from "react";
import { MenuList } from "./menulist";

export default function Menu() {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {MenuList.map((menuitem, key) => {
                    return <div>{menuitem.name}</div>
                })}
            </div>

        </div>
    );
}