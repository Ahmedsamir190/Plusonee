import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  let year = new Date().getFullYear();
  const [date, setdate] = useState(year);
  return (
    <footer className="bg-white">
      <div className="p-4">
        <div className="container">
          <div>
            <div className="footer-content">
              <div className="subscribe">
                <h6>subscribe for newsletter</h6>
                <AiOutlineMail className="fs-1 mail-icon" />
              </div>

              <div className="condition ">
                <h5 className="pb-4">info</h5>
                <ul className="p-0 ">
                  <li>FAQ</li>
                  <li>RETURNS</li>
                  <li>CONTACT</li>
                </ul>
              </div>
              <div className="terms">
                <h5 className="pb-4 ">policy</h5>
                <ul className="p-0 ">
                  <li>TERMS</li>
                  <li>PRIVACY</li>
                  <li>COOKIE</li>
                </ul>
              </div>
              <div>
                <p>Lets stay connected</p>
                <div className="social-icons">
                  <FaFacebook className="facebook" />
                  <FaTwitter className="twitter" />
                  <FaLinkedin className="linkedin" />
                  <FaYoutube className="youtube" />
                  <FaInstagram className="instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">
        Copy right © {date} By Plus one All Rights Reserved
      </p>
    </footer>
  );
}
export default Footer;
