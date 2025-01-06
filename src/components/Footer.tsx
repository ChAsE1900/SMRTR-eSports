import InstaIcon from "../assets/icons/insta.svg"
import XSocial from "../assets/icons/x-social.svg"
import TikTokIcon from "../assets/icons/tiktok.svg"
import YoutubeIcon from "../assets/icons/youtube.svg"
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">&copy; 2025 SMRTR eSports</div>
          <ul className="flex justify-center">
            <Link href="https://x.com/Smrtr_esports"><XSocial/></Link>
            <Link href="https://www.instagram.com/smrtr.gg/"><InstaIcon/></Link>
            <Link href="https://www.tiktok.com/@smrtr.gg"><TikTokIcon/></Link>
            <Link href="https://www.youtube.com/@smrtr_esports"><YoutubeIcon/></Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};
