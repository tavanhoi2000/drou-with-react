import { useEffect, useState } from "react";

function Breadcrumb() {
  const [breadcrumbItems, setBreadcrumbItems] = useState(['Home'])
  useEffect(() => {
    const url = window.location.pathname;
    const path = url.split("/");
    const newBreadcrumbItem = ["Home"]
    for (let i = 0; i < path.length; i++) {
      if (path !== "") {
        newBreadcrumbItem.push(path[i])
      }
    }

    console.log(url);
    setBreadcrumbItems(newBreadcrumbItem)
  }, []);

  return (
    // <div className="breadcrumb container">
    //   <ul id="breadcrumb" className="d-flex">
    //     {breadcrumbItems.map((item, index) => {
    //       return (<li key={index}>{item}</li>)
    //     })}
    //   </ul>
    // </div>
    <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    {breadcrumbItems.map((item,i) => 
      <li class="breadcrumb-item" key={i}><a href="#">{item}</a></li>
    )}
  </ol>
</nav>
  );
}

export default Breadcrumb;
