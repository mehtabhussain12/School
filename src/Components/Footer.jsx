import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-[#737373] py-16 px-4 lg:px-28">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="font-bold mb-4 text-black">Company Info</h3>
          <ul>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold mb-4 text-black">Legal</h3>
          <ul>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            <li><a href="#" className="hover:underline">Compliance</a></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-bold mb-4 text-black">Features</h3>
          <ul>
            <li><a href="#" className="hover:underline">Feature One</a></li>
            <li><a href="#" className="hover:underline">Feature Two</a></li>
            <li><a href="#" className="hover:underline">Feature Three</a></li>
            <li><a href="#" className="hover:underline">Feature Four</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold mb-4 text-black">Resources</h3>
          <ul>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Guides</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Contact Support</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="font-bold mb-4 text-black">Get In Touch</h3>
          <ul>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Partnerships</a></li>
            <li><a href="#" className="hover:underline">Affiliates</a></li>
            <li><a href="#" className="hover:underline">Media Inquiries</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
