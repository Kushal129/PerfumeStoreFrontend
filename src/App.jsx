import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Attar from './assets/images/Perfume_img/at5.png'
import Perfume from './assets/images/Perfume_img/pr4.png'
import Products from './components/Products/Products';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerData = {
  discount: "30% OFF",
  title: "Hsandy Perfume",
  date: "10 Aug to 25 Aug",
  image: Perfume,
  title2: "Cool Fragrance",
  title3: "Raksha Bandhan Sale",
  title4: "Celebrate Raksha Bandhan with Hsandy Perfume. Limited-time sale! A fresh and sharp scent that's simple and very masculine.",
  bgColor: "#088395",
};

const BannerData2 = {
  discount: "40% OFF",
  title: "kohinoor Attar",
  date: "10 Aug to 20 Aug",
  image: Attar,
  title2: "Woody Attar",
  title3: "Raksha Bandhan Sale",
  title4: "Celebrate Raksha Bandhan with our exclusive Woody Attars. Limited-time sale!",
  bgColor: "#03113F",
};



const App = () => {

  const [orderPopup , setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  
  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset:100,
      });
      AOS.refresh();
    },[]);

  return <div className="dark:bg-bgdark bg-bgcolor duration-200 overflow-hidden"> 
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero  handleOrderPopup={handleOrderPopup}/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Partners/>
      <Footer/>
      <Popup 
      orderPopup={orderPopup}
      handleOrderPopup={handleOrderPopup}
      />

    </div>;
};

export default App;
