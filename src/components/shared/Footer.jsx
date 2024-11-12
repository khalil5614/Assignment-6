import { contactLinks } from "../../constants";
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-100 py-10">
      <div className="container mx-auto px-4 w-10/12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Brand and Contact Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">
              Md. Ibrahim Khalil
            </h2>
            <p>Mobile Application Developer & Full Stack Developer</p>
            <p className="mt-2">Email: khalil5614@gmail.com</p>
            <p>Phone: +8801719434061</p>
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
              <li>
                <a
                  href="/#about"
                  className="hover:text-white transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="/#experience"
                  className="hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            {contactLinks.map((el, index) => (
              <a
                href={el.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <img className="w-8 h-8" alt="social-icon" src={el.url} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-300 border-t border-gray-600 pt-4">
          <p>
            &copy; {new Date().getFullYear()} Md. Ibrahim Khalil. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );

  //   return (
  //     <footer className="bg-gray-800 text-gray-300 py-8">
  //       <div className="container mx-auto px-4">
  //         <div className="flex flex-col md:flex-row justify-between items-center">
  //           {/* Brand and Contact Info */}
  //           <div className="mb-6 md:mb-0 text-center md:text-left">
  //             <h2 className="text-2xl font-bold text-white">
  //               Md. Ibrahim Khalil
  //             </h2>
  //             <p>Mobile Application Developer & Full Stack Developer</p>
  //             <p className="mt-2">Email: khalil5614@gmail.com</p>
  //             <p>Phone: +8801719434061</p>
  //           </div>

  //           {/* Navigation Links */}
  //           <div className="mb-6 md:mb-0">
  //             <ul className="flex space-x-6">
  //               <li>
  //                 <a href="/#about" className="hover:text-white">
  //                   About Me
  //                 </a>
  //               </li>
  //               <li>
  //                 <a href="/#experience" className="hover:text-white">
  //                   Experience
  //                 </a>
  //               </li>
  //               <li>
  //                 <a href="/projects" className="hover:text-white">
  //                   Projects
  //                 </a>
  //               </li>
  //               <li>
  //                 <a href="/contact" className="hover:text-white">
  //                   Contact
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>

  //           {/* Social Media Icons */}
  //           <div className="flex space-x-4">
  //             {contactLinks.map((el) => (
  //               <a
  //                 href={el.link}
  //                 className="mr-5 cursor-pointer mt-8 hover:scale-125"
  //                 key={el.link}
  //               >
  //                 <img className="w-10 h-10" alt="" src={el.url} />
  //               </a>
  //             ))}
  //           </div>
  //         </div>

  //         <div className="mt-8 text-center text-gray-500">
  //           <p>
  //             &copy; {new Date().getFullYear()} All rights reserved by Md.Ibrahim
  //             Khalil.
  //           </p>
  //         </div>
  //       </div>
  //     </footer>
  //   );
};

export default Footer;
