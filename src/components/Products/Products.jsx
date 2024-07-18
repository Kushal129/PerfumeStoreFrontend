import React from 'react';
import Heading from '../Shared/Heading';
import Img1p from "../../assets/images/Perfume_img/pr1.png";
import Img2p from "../../assets/images/Perfume_img/pr2.png";
import Img3p from "../../assets/images/Perfume_img/pr3.png";
import Img4p from "../../assets/images/Perfume_img/pr4.png";
import Img1a from "../../assets/images/Perfume_img/at1.png";
import Img2a from "../../assets/images/Perfume_img/at2.png";
import Img3a from "../../assets/images/Perfume_img/at3.png";
import Img4a from "../../assets/images/Perfume_img/at4.png";
import ProductCard from '../Products/ProductCard';

const ProductsData = [
  {
    id: 1,
    img: Img1p,
    title: "Product 1",
    price: "100",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2p,
    title: "Product 2",
    price: "200",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3p,
    title: "Product 3",
    price: "300",
    aosDelay: "400",

  },
  {
    id: 4,
    img: Img4p,
    title: "Product 4",
    price: "400",
    aosDelay: "600",
  },
];

const ProductsData2 = [
  {
    id: 1,
    img: Img1a,
    title: "Product 1",
    price: "100",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2a,
    title: "Product 2",
    price: "200",
    aosDelay: "200",
  },

  {
    id: 3,
    img: Img3a,
    title: "Product 3",
    price: "300",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4a,
    title: "Product 4",
    price: "400",
    aosDelay:"600"
  },
];

const Products = () => {
  return (
    <div>
      <div className='container text-primary dark:text-brandWhite'>
        {/* header sectoion  */}
        <Heading
          title="Our Products"
          subtitle="Explore Our Products" 
        />
        {/* body  section  */}
        <ProductCard ProductsData={ProductsData} />
        <ProductCard ProductsData={ProductsData2} />

      </div>
    </div>
  );
};

export default Products;
