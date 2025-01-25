"use client"
import InstaIcon from "../assets/icons/insta.svg"
import XSocial from "../assets/icons/x-social.svg"
import TikTokIcon from "../assets/icons/tiktok.svg"
import YoutubeIcon from "../assets/icons/youtube.svg"
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Legal Links */}
        <div className="space-y-3">
          <Link href="/" className="block hover:text-gray-300 uppercase text-sm font-medium">Home</Link>
          <Link href="/about" className="block hover:text-gray-300 uppercase text-sm font-medium">About us</Link>
          <Link href="https://discord.gg/smrtrgg" className="block hover:text-gray-300 uppercase text-sm font-medium">Contact us</Link>
        </div>
        <div className="text-center lg:pt-10">&copy; 2025 SMRTR eSports</div>
          <ul className="flex justify-center lg:pt-10">
            <Link href="https://x.com/Smrtr_esports"><XSocial/></Link>
            <Link href="https://www.instagram.com/smrtr.gg/"><InstaIcon/></Link>
            <Link href="https://www.tiktok.com/@smrtr.gg"><TikTokIcon/></Link>
            <Link href="https://www.youtube.com/@smrtr_esports"><YoutubeIcon/></Link>
          </ul>
        {/* Newsletter */}
        <div className="max-w-md">
          <h3 className="text-2xl font-bold mb-3">SIGN UP FOR UPDATES</h3>
          <p className="text-gray-300 mb-6">Promotions, new products and sales. Directly to your inbox.</p>
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="My email address"
              className="flex-grow bg-transparent border-b border-white focus:outline-none focus:border-gray-300 pb-2 placeholder-gray-500"
            />
            <button
              type="submit"
              className="uppercase text-sm font-bold hover:text-gray-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
  }
