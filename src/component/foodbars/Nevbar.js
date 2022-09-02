import React from "react";
export function Navbar({ filterItem, menuList }) {
  const css ={
    color:"blue",
    backgroundColor:"aqua"
  }
  const fontSize={
    fontSize:"50px",
    color:"cyan",
    textShadow:"5px 5px 5px red"
   }
  return (
    <>
      <nav className="navbar">
        <div className="header">
        <marquee style={{ textTransform: "uppercase" }} ><h1 style={fontSize}>Welcome To Amaraj Food Corner</h1></marquee>
        </div>
       
        <div className="btn-group">
          {
            menuList.map((category) => {
              return (
               <button style={css} className="btn-group__item" onClick={() => filterItem(category)}>
                  {category}</button>
              )
            })
          }
        </div>
      </nav>

    </>
  )
} 





