import Image from "next/image";
import Link from "next/link";
import AppleStore from "@/public/images/AppleStore";
import GooglePlay from "@/public/images/GooglePlay";
import { Menu, Transition } from "@headlessui/react";
import MenuIcon from "@mui/icons-material/Menu";
import { Fragment } from "react";
import { Example } from "./Example";

export default function Navbar() {
  return (
    <div className="z-50">
      <div className=" w-full h-full ">
        <div>
          <Example />
        </div>
      </div>
      <div className="md:flex absolute hidden items-center justify-center z-50 py-4 w-full ">
        <div className="w-full flex items-center ">
          <Image
            src="/Logo.png"
            className="rounded-full ml-56"
            width={100}
            height={100}
          />
        </div>
        <div className="fixed border-[0.001px] border-gray-500 w-auto rounded-full  p-2  flex items-center justify-center gap-4 Navbar">
          <Link href="#">
            <button className="hover:bg-white p-2 px-6 rounded-full buttonNav">
              <span className="text-white">Home</span>
            </button>
          </Link>
          <Link href="#features">
            <button className="hover:bg-white w-auto p-2 px-6 rounded-full buttonNav">
              <span className="text-white">Features</span>
            </button>
          </Link>
          <Link href="#aboutus">
            <button className="hover:bg-white w-auto p-2 px-6 rounded-full buttonNav">
              <span className="text-white">About Us</span>
            </button>
          </Link>

          <Link href="#contact">
            <button className="bg-white p-2 px-6 rounded-full buttonNavContact">
              <span className="text-white">Contact Us</span>
            </button>
          </Link>
        </div>
        <div className="flex w-full justify-end gap-4 mr-4 ">
          <div className="flex items-center justify-end">
            <Link href="https://apps.apple.com/us/app/tatty/id1583097900?ign-itscg=30200&ign-itsct=apps_box_badge">
              <AppleStore className="h-[55px]" />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link href="https://play.google.com/store/apps/details?id=app.tatty&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <GooglePlay className="h-[55px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
