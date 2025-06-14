import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#cfdb80] text-green-950 py-10  mt-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* App Info */}
        <div>
          <p className="text-sm">
            <span className="text-3xl">JourneyNest</span> <br /> is your trusted
            travel companion — helping you discover hidden gems, epic
            adventures, and unforgettable experiences around the globe. Whether
            you're planning your first solo trip or your tenth getaway, we bring
            you destination guides, tips, and stories that inspire you to pack
            your bags and explore. 🌿 Let's turn every journey into a beautiful
            memory, together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 ml-10">Quick Links</h3>
          <ul className="space-y-2 text-sm ml-10">
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
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100092609836093"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-950 p-2 rounded-full text-white hover:bg-gray-100 hover:text-black"
            >
              <FaFacebookF />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/8801314381390"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-950 p-2 rounded-full text-white hover:bg-gray-100 hover:text-black"
            >
              <FaWhatsapp />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
             className="bg-green-950 p-2 rounded-full text-white hover:bg-gray-100 hover:text-black"
            >
              <FaLinkedinIn />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AfrojaAkter121"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-950 p-2 rounded-full text-white hover:bg-gray-100 hover:text-black"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center mt-20 text-sm">
        &copy; 2025 PassionPoint. All rights reserved.
      </p>
    </footer>
  );
}
