 import React from "react";
export function MenuCard({ menuData }) {
 /*  const inlineCss = { color: "aqua" }; //css object ki trah lagti h */
return (
    <>
    <section className="main-card--cointainer">
      {
        menuData.map((currentData) => {
         const {
            id,
            image,
            name,
            category,
            price,
            description
          }  = currentData;
          return (
            <>
               <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle ">{id}</span>
                    <span className="card-author subtle">{category}</span>    {/* //style={{color:"red"}}  */}
                    <h2 className="card-title">{name}</h2> 
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">READ</div>
                    <img src={image} alt=" " className="card-media"></img>
                   <span className="card-tag subtle tdr" >Order Now</span>
                   <h1>{price}</h1>
                   <h1 style={{textDecoration:"line-through"}}></h1>
                  </div>
                </div>
              </div> 
            </>
          )
        })
      }
     </section>
    </>
  )
}



























