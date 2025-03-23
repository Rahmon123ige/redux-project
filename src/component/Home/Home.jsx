import React from 'react'
import Product from '../Product/Product'


const Homes = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src='https://www.apple.com/v/iphone/home/bw/images/meta/iphone__kqge21l9n26q_og.png' class="d-block w-100" alt="IPhone" height="500px"/>
              </div>
              <div class="carousel-item">
                      <img src='https://swarajya.gumlet.io/swarajya/2022-09/bf62b16f-fece-47ce-b266-97d5151dd889/Screenshot_2022_09_15_at_11_01_40_AM.png?w=610&q=50&compress=true&format=auto' class="d-block w-100" alt="IPhone" height="500px"/>
              </div>
              <div class="carousel-item">
                  <img src='https://m.media-amazon.com/images/I/61cecOpZrxL._AC_UF1000,1000_QL80_.jpg' class="d-block w-100" alt="IPhone" height="500px"/>
              </div>
              <div class="carousel-item">
                  <img src='https://sa.newtechstore.com/cdn/shop/products/new-apple-iphone-13-128gb-blue-iphone-apple-261752_1200x1200.jpg?v=1652780873' class="d-block w-100" alt="IPhone" height="500px"/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
      </div>
      <Product />

    </div>
  )
}

export default Homes