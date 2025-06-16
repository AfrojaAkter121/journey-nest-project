import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-[#cfdb80] text-green-950 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 text-center md:text-left">
        {/* App Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">JourneyNest</h2>
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
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Developer Resources
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start flex-wrap gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100092609836093"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-950 p-2 rounded-full text-white hover:bg-gray-100 hover:text-black transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/8801314381390"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-950 p-2 rounded-full text-white hover:bg-gray-100 hover:text-black transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-950 p-2 rounded-full text-white hover:bg-gray-100 hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/AfrojaAkter121"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-950 p-2 rounded-full text-white hover:bg-gray-100 hover:text-black transition"
            >
              <FaGithub />
            </a>
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
