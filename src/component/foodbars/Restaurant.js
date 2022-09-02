

//import React, { useState } from "react";
import React from "react";
import Menu from './menuApi.js';
import { MenuCard } from "./MenuCard.js";
import { Navbar } from "./Nevbar.js";

let uniqueList = [...new Set(Menu.map((element) => {
  return element.category;
})
), 'All']
//console.log(uniqueList);

function Restaurant() {
  const [menuList, setMenuList] = React.useState(uniqueList);
  const [menuData, setMenuData] = React.useState(Menu);

  const filterItem = (data) => {
    if (data === 'All') {
      setMenuData(Menu);
      return 0;
    }
    const updatedData = Menu.filter((e) => {
      return e.category === data;
    })
    //console.log(updatedData)
    setMenuData(updatedData);
  }

  //console.log(menuData)
  //let css={
  //   color:"green"
  //  }
  //  style={css} 
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />

      <MenuCard menuData={menuData} />
    </>
  )
}
export { Restaurant };




