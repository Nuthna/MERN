import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
function Corousal() {
  return (
    <>
    <br/><br/>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2024/09/Flipkart-Big-Billion-Days-Sale-2024.png?ssl=1&quality=80&w=f" className="d-block w-100" alt="..." style={{ height: "300px",width:"100px", objectFit:"contain"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://technosports.co.in/wp-content/uploads/2023/04/Copy-of-Yellow-Orange-Minimalist-Exclusive-Furniture-Instagram-Post-1080-%C3%97-700-px-1200-%C3%97-700-px_page-0001.jpg" className="d-block w-100" alt="..." style={{ height: "300px",width:"100px", objectFit: "contain"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://www.pc-tablet.co.in/wp-content/uploads/2024/08/Flipkart-Independence-Day-Sale.jpg" className="d-block w-100" alt="..." style={{ height: "300px",width:"100px", objectFit: "contain"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Corousal