import React from 'react';
import { FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt ,FaFacebook} from 'react-icons/fa';

const FooterLinks = [
  {
    title: 'Home',
    links: '/#',
  },
  {
    title: 'About',
    links: '/#about',
  },
  {
    title: 'Contact',
    links: '/#contact',
  },
  {
    title: 'Blog',
    links: '/#blog',
  },

];


const Footer = () => {
  return (
    <div className='dark:bg-bgdark'>
      <div className='container'>
        <div className='grid md:grid-cols-3 pb-20 pt-5' >
          {/* Company Details  */}
          <div className='py-8 px-4'>
            <a
              href="#"
              className="text-primary hover:text-brandBlue dark:text-bgcolor
               dark:hover:text-brandlightcyan font-semibold text-2xl uppercase sm:text-3xl duration-200">HK Fragrance
            </a>
            <p className='text-primary dark:text-brandWhite lg:pr-24 pt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quisquam maiores vel voluptatum quod reprehenderit maxime, officia blanditiis nisi eaque cupiditate nulla magnam?
            </p>
            <p className='text-primary dark:text-brandWhite mt-4'>
              Made with ❤️ by HK-Devlopment
            </p>
            <a href="#" target='_blank' className='inline-block dark:bg-primarylight bg-primary/90 text-brandWhite py-2 px-4 mt-4 text-sm rounded-full'>
              Visit our YouTube Channel
            </a>
          </div>

          {/* Footer Links  */}
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4'>
              <h1 className='text-primary dark:text-brandWhite font-bold text-xl sm:text-left mb-3 '>Important Links</h1>
              <ul className='space-y-3 '>
                {
                  FooterLinks.map(
                    (data, index) => (
                      <li key={index}>
                        <a
                          href={data.links} className='text-primarylight hover:text-brandBlue dark:text-bgcolor
                            dark:hover:text-brandlightcyan font-semibold text-sm duration-300'>
                          {data.title}
                        </a>
                      </li>
                    ))}
              </ul>
            </div>

            {/* Second col links  */}
            <div className='py-8 px-4'>
              <h1 className='text-primary dark:text-brandWhite font-bold text-xl sm:text-left mb-3 '>Quick Links</h1>
              <ul className='space-y-3 '>
                {
                  FooterLinks.map(
                    (data, index) => (
                      <li key={index}>
                        <a
                          href={data.links} className='text-primarylight hover:text-brandBlue dark:text-bgcolor
                            dark:hover:text-brandlightcyan font-semibold text-sm duration-300'>
                          {data.title}
                        </a>
                      </li>
                    ))}
              </ul>
            </div>

            {/* Company Address  */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
              <h1 className='text-primary dark:text-brandWhite font-bold text-xl sm:text-left mb-3 '>Address</h1>
              <div>
                <div className='flex items-center gap-3 text-primary hover:text-brandBlue dark:text-brandWhite dark:hover:text-brandlightcyan'>
                  <FaLocationArrow />
                  <p>Surat , Gujrat - India</p>
                </div>
                <div className='flex items-center gap-3 mt-6 text-primary hover:text-brandBlue dark:text-brandWhite dark:hover:text-brandlightcyan'>
                  <FaMobileAlt />
                  <p>+91 90000000099</p>
                </div>
                {/* Social Links  */}
                <div className='flex items-center gap-3 mt-6 '>
                  <a href="#">
                    <FaInstagram className='text-2xl text-primary hover:text-brandBlue dark:text-brandWhite dark:hover:text-brandlightcyan duration-300' />
                  </a>
                  <a href="#">
                    <FaFacebook className='text-2xl text-primary hover:text-brandBlue dark:text-brandWhite dark:hover:text-brandlightcyan duration-300' />
                  </a>
                  <a href="#">
                    <FaLinkedin className='text-2xl text-primary hover:text-brandBlue dark:text-brandWhite dark:hover:text-brandlightcyan duration-300' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};
export default Footer;
