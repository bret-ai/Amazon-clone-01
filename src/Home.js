import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="FIFA 21 Ultimate Edition - PlayStation 4"
            price={59.99}
            rating={5}
            id="1234567891"
            image="https://m.media-amazon.com/images/I/81rxMnWOgJL._AC_UY218_.jpg"
          />
          <Product
            title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
            price={600}
            rating={5}
            id="1234567892"
            image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_SY200_.jpg"
          />
          <Product
            title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
            price={40.99}
            rating={4}
            id="1234567893"
            image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="EVOLIVE Ultra Soft Fashion Microfiber Reversible Single Comforter All Season (Navy/Light Blue, Queen)"
            price={32.99}
            rating={5}
            id="1234567894"
            image="https://m.media-amazon.com/images/I/91oO5NkgqFL._AC_UY218_.jpg"
          />
          <Product
            title="iPhone Charger Cable, 3 Pack 6FT Durable Nylon Braided USB Fast Long Cords Lightning Cable iPhone Charging Cable Compatible iPhone 11/XS/Max/X/XR/8/7/6s/6/5/iPad/iPod"
            price={6.99}
            rating={3}
            id="1234567895"
            image="https://m.media-amazon.com/images/I/61vnW0cAMvL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="Listerine Total Care Anticavity Fluoride Mouthwash, 6 Benefit Mouthwash to Help Kill 99% of Germs that Cause Bad Breath, Prevent Cavities, Strengthen Enamel & More, Fresh Mint Flavor, 1 L"
            price={6.57}
            rating={4}
            id="1234567896"
            image="https://images-na.ssl-images-amazon.com/images/I/41z2VjDm1fL._AC_US160_.jpg"
          />
          <Product
            title="TruSkin Vitamin C Serum for Face, Topical Facial Serum with Hyaluronic Acid & Vitamin E, 1 fl oz"
            price={19.99}
            rating={4}
            id="1234567897"
            image="https://images-na.ssl-images-amazon.com/images/I/51qaU3SJpfL._AC_US160_.jpg"
          />
          <Product
            title="Philips Norelco MG3750 Multigroom All-In-One Series 3000, 13 attachment trimmer"
            price={19.95}
            rating={5}
            id="1234567898"
            image="https://images-na.ssl-images-amazon.com/images/I/51s7FUpMbHL._AC_US160_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="Philips Computer Monitors 328E9FJAB 32in curved frameless monitor, Quad HD 2K, 122.6% sRGB, FreeSync, VESA, 4Yr Advance Replacement Warranty, Black"
            price={297.34}
            rating={4}
            id="1234567899"
            image="https://m.media-amazon.com/images/I/812NthnBPNL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
