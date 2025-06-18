import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-[#10127b] pt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
        {/* Logo & Description */}
        <div>
          <div className="text-2xl font-bold flex items-center mb-4">
            <span>APexa</span>
          </div>
          <p className="text-gray-500 mb-4">
            Felis consequat magnis fames sagittis ultrices plosadales porttitor quisque ultice tempor turpis.
          </p>
          <div className="flex gap-3 mt-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube].map((Icon, i) => (
              <button key={i} className="bg-gray-200 p-2 rounded hover:bg-yellow-400 text-[#10127b]">
                <Icon />
              </button>
            ))}
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-bold mb-3">Information</h3>
          <div className="w-8 h-1 bg-yellow-400 mb-4"></div>
          <p className="flex items-center gap-2 text-sm mb-2">
            <FaPhoneAlt className="text-lg" /> +123 888 9999
          </p>
          <p className="flex items-center gap-2 text-sm mb-2">
            <FaEnvelope className="text-lg" /> info@apexa.com
          </p>
          <p className="flex items-start gap-2 text-sm">
            <FaMapMarkerAlt className="text-lg mt-1" />
            Sydney Harbour Bridge Circular City of Sydney, Australia.
          </p>
        </div>

        {/* Top Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Top Links</h3>
          <div className="w-8 h-1 bg-yellow-400 mb-4"></div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>How it’s Work</li>
            <li>Partners</li>
            <li>Testimonials</li>
            <li>Case Studies</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Instagram Posts */}
        <div>
          <h3 className="text-lg font-bold mb-3">Instagram Posts</h3>
          <div className="w-8 h-1 bg-yellow-400 mb-4"></div>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <img
                key={i}
                src={`./insta${i + 1}.jpg`}
                alt={`insta${i}`}
                className="rounded-md object-cover w-full h-20"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#f0f7fb] py-6 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600 text-center md:text-left">
          Copyright © Apexa | All Right Reserved<br />
          Support Terms & Conditions Privacy Policy.
        </div>

        {/* Newsletter Signup */}
        <form className="flex w-full md:w-auto gap-2 items-center">
          <label className="text-[#10127b] font-bold">Newsletter SignUp!</label>
          <input
            type="email"
            placeholder="E-Mail Type . . ."
            className="rounded-full px-5 py-2 text-sm outline-none text-gray-700 bg-white w-full md:w-64"
          />
          <button className="bg-[#10127b] hover:bg-[#1c2294] text-white px-6 py-2 rounded-full text-sm font-bold">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </footer>
  );
}
