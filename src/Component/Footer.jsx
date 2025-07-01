import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import Newsletter from "./Newsletter";
import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

export default function Footer() {
  const { isDark } = useContext(ThemeContext);

  return (
    <footer
      className={`py-10 mt-16 transition-all ${
        isDark
          ? "bg-[#1a1a2e] text-gray-200"
          : "bg-[#cfdb80] text-green-950"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 text-center md:text-left">
        {/* App Info */}
        <div>
          <h2
            className={`text-3xl font-bold mb-4 ${
              isDark ? "text-[#DB2777]" : "text-[#D7E95D]"
            }`}
          >
            JourneyNest
          </h2>
          <p className="text-sm leading-relaxed">
            Your trusted travel companion — helping you discover hidden gems,
            epic adventures, and unforgettable experiences. Whether you're
            planning your first solo trip or your tenth getaway, we bring you
            destination guides, tips, and stories that inspire. 🌿
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className={`hover:underline ${
                  isDark ? "hover:text-[#DB2777]" : ""
                }`}
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:underline ${
                  isDark ? "hover:text-[#DB2777]" : ""
                }`}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:underline ${
                  isDark ? "hover:text-[#DB2777]" : ""
                }`}
              >
                Developer Resources
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start flex-wrap gap-4">
            {[FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition ${
                    isDark
                      ? "bg-[#7f1d5d] text-white hover:bg-[#D7E95D] hover:text-black"
                      : "bg-green-950 text-white hover:bg-gray-100 hover:text-black"
                  }`}
                >
                  <Icon />
                </a>
              )
            )}
          </div>
          <div className="mt-6">
            <Newsletter />
          </div>
        </div>
      </div>

      <p className="text-center mt-10 text-sm px-4">
        &copy; 2025 PassionPoint. All rights reserved.
      </p>
    </footer>
  );
}
