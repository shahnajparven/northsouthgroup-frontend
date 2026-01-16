import { FaFacebookF , FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/northsouthgroupbd", color: "hover:bg-blue-600" },
    { icon: <FaXTwitter  />, href: "https://x.com/nsgroupbd", color: "hover:bg-blue-400" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/northsouthgroupbd/", color: "hover:bg-blue-700" },
    { icon: <FaInstagram />, href: "https://www.instagram.com", color: "hover:bg-pink-500" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/channel/UCXFv3Z_4RYqThJIYSU8o85A", color: "hover:bg-red-600" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        {/* Copyright */}
        <div className="text-center md:text-left text-sm">
          ©{" "}
          <a href="#1" className="hover:underline font-semibold">
            North South Group {currentYear}
          </a>
          . All Rights Reserved.
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialIcons.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 transition-transform duration-300 transform hover:scale-110 ${item.color}`}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

