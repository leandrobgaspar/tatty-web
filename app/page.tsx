"use client";
import Image from "next/image";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import InfoIcon from "@mui/icons-material/Info";
import FastForwardIcon from "@mui/icons-material/FastForward";
import TimerIcon from "@mui/icons-material/Timer";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";

import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Link from "next/link";
import AppleStore from "@/public/images/AppleStore";
import GooglePlay from "@/public/images/GooglePlay";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <div className="flex md:flex-row flex-col   w-full h-full Gradient">
        <div className=" w-full md:text-start mt-16 text-center p-4 md:p-0  h-[725px] flex flex-col md:ml-20 md:justify-center md:mt-20">
          <h1 className="md:text-6xl text-4xl text-[#CD235E]">
            Escape the message
          </h1>
          <h1 className="md:text-6xl text-4xl text-[#CD235E]">mayhem.</h1>
          <h1 className="md:text-4xl text-xl text-gray-400">
            Focus on your art!
          </h1>
          <div className="md:mt-10 md:w-[500px]">
            <span className="text-gray-400">
              Streamline your tattoo requests, get instant cost estimates, and
              schedule appointments seamlessly.
            </span>
          </div>
          <div className="md:hidden flex w-full gap-4 justify-center ">
            <div className="flex items-center justify-center">
              <Link href="https://apps.apple.com/us/app/tatty/id1583097900?ign-itscg=30200&ign-itsct=apps_box_badge">
                <AppleStore className="h-[40px]" />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Link href="https://play.google.com/store/apps/details?id=app.tatty&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <GooglePlay className="h-[40px]" />
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/banner.png"
          width={800}
          height={800}
          className="md:absolute md:flex hidden right-0"
        />
        <Image
          src="/banner.png"
          objectFit="cover"
          layout="fill"
          className="md:hidden w-full h-full mt-56 "
        />
      </div>
      <div className="flex-row  w-full h-full ">
        <Carousel />
      </div>
      <div id="features" className="h-full w-full items-center justify-center text-center bg-black ">
        <h1 className="text-6xl text-[#CD235E] md:mt-0 mt-44 font-bold">
          Features
        </h1>
        <div className="space-y-8 md:p-20 p-4 my-10 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="flex rounded-3xl  relative p-10 py-20 shadow-[inset_1px_1px_1px_1px_#ffffff20] flex-col items-center justify-center text-center">            
            <div className="z-10">
              <div className="rounded-full  flex items-center mb-10 justify-center">
                <div className="rounded-full absolute hover:animate-ping w-auto p-20 z-50 border-[1px]  border-[#302876]  flex items-center justify-center" />
                <div className=" border-[1px] border-[#ffffff15] p-[8px] rounded-3xl">
                  <div className="flex justify-center orangeIcon p-10 items-center  w-10 h-10 rounded-3xl ">
                    <InfoIcon className="h-12 w-12" />
                  </div>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Informations
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Quickly gathers all info needed for tattoo using simple intake
                form
              </p>
            </div>
          </div>
          <div className="flex rounded-3xl  relative p-10 py-20 shadow-[inset_1px_1px_1px_1px_#ffffff20] flex-col items-center justify-center text-center">
            <div className="rounded-full  flex items-center mb-10 justify-center">
              <div className="rounded-full absolute hover:animate-ping w-auto p-20 z-50 border-[1px]  border-[#302876]  flex items-center justify-center" />
              <div className=" border-[1px] border-[#ffffff15] p-[8px] rounded-3xl">
                <div className="flex justify-center purpleIcon p-10 items-center  w-10 h-10 rounded-3xl ">
                  <FastForwardIcon className="h-12 w-12" />
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Practicality
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Eliminates back and forth between you and client
            </p>
          </div>
          <div className="flex rounded-3xl  relative p-10 py-20 shadow-[inset_1px_1px_1px_1px_#ffffff20] flex-col items-center justify-center text-center">
            <div className="rounded-full  flex items-center mb-10 justify-center">
              <div className="rounded-full absolute hover:animate-ping w-auto p-20 z-50 border-[1px]  border-[#302876]  flex items-center justify-center" />
              <div className=" border-[1px] border-[#ffffff15] p-[8px] rounded-3xl">
                <div className="flex justify-center blueIcon p-10 items-center  w-10 h-10 rounded-3xl ">
                  <TimerIcon className="h-12 w-12" />
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Your Time
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Offer each client up to 3 dates/times to choose from
            </p>
          </div>
          <div className="flex rounded-3xl  relative p-10 py-20 shadow-[inset_1px_1px_1px_1px_#ffffff20] flex-col items-center justify-center text-center">
            <div className="rounded-full  flex items-center mb-10 justify-center">
              <div className="rounded-full absolute hover:animate-ping w-auto p-20 z-50 border-[1px]  border-[#302876]  flex items-center justify-center" />
              <div className=" border-[1px] border-[#ffffff15] p-[8px] rounded-3xl">
                <div className="flex justify-center orangeIcon p-10 items-center  w-10 h-10 rounded-3xl ">
                  <ChatIcon className="h-12 w-12" />
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Notifications
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Clients receive text msg notifications when you respond to a
              request
            </p>
          </div>
          <div className="flex rounded-3xl  relative p-10 py-20 shadow-[inset_1px_1px_1px_1px_#ffffff20] flex-col items-center justify-center text-center">
            <div className="rounded-full  flex items-center mb-10 justify-center">
              <div className="rounded-full absolute hover:animate-ping w-auto p-20 z-50 border-[1px]  border-[#302876]  flex items-center justify-center" />
              <div className=" border-[1px] border-[#ffffff15] p-[8px] rounded-3xl">
                <div className="flex justify-center purpleIcon p-10 items-center  w-10 h-10 rounded-3xl ">
                  <NotificationAddIcon className="h-12 w-12" />
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Easily respond
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Quickly and easily respond using simple response form
            </p>
          </div>
          <div className="flex rounded-3xl  relative p-10 py-20 shadow-[inset_1px_1px_1px_1px_#ffffff20] flex-col items-center justify-center text-center">
            <div className="rounded-full  flex items-center mb-10 justify-center">
              <div className="rounded-full absolute hover:animate-ping w-auto p-20 z-50 border-[1px]  border-[#302876]  flex items-center justify-center" />
              <div className=" border-[1px] border-[#ffffff15] p-[8px] rounded-3xl">
                <div className="flex justify-center blueIcon p-10 items-center  w-10 h-10 rounded-3xl ">
                  <AppRegistrationIcon className="h-12 w-12" />
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Integrations
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Tatty syncs to your I cal/google calendar
            </p>
          </div>
        </div>
        <div id="aboutus" className="w-full">
          <div className="flex items-center w-full h-full md:p-10 md:px-20 p-4 bg-gradient-to-r from-black via-neutral-800 to-black justify-center text-center flex-col">
            <div className="bg-[#474747] py-1 px-4 shadow-black shadow-2xl rounded-lg">
              <span>About us</span>
            </div>
            <div className="md:px-72 p-0 mt-10 text-2xl text-gray-100">
              Tatty is a simple way for tattoo artists to review and respond to
              submissions and set appointments, eliminating the “back and forth”
              between you and your clients.
            </div>
            <div className="w-full h-full mt-20">
              <div className="md:flex  w-full h-full  relative rounded-lg border-white border-[1px] items-start justify-start">
                <div className=" flex flex-col gap-6 h-full md:w-1/2 items-start text-start p-[40px]">
                  <div className="mb-4">
                    <Image
                      src="/Logo.png"
                      width={100}
                      height={150}
                      alt="Picture of the author"
                    />
                  </div>
                  <p className="text-gray-100">
                    Hey, I'm <span className="artist-name">Paul Krugman</span>,
                    and I've poured my soul into the tattoo industry for years.
                    I get it – the thrill of turning stories into art, the deep
                    connection between artists and their canvas.
                  </p>

                  <p className="text-gray-100">
                    But the endless messages, the scheduling puzzle – they stole
                    time from my true passion. That's why I birthed{" "}
                    <span className="brand-name">Tatty</span> – a solution
                    crafted by an artist, for artists.
                  </p>

                  <p className="text-gray-100">
                    <span className="brand-name">Tatty</span> frees us to focus
                    on the masterpiece, not the management. Imagine clients
                    describing their dream tattoo, knowing the cost, and booking
                    with ease. No more back-and-forth, just creative flow.
                  </p>

                  <p className="text-gray-100">
                    And clients? They step into a world where their visions
                    matter, where getting inked is as joyful as it should be.
                  </p>

                  <p className="text-gray-100">
                    <span className="brand-name">Tatty</span> blends art with
                    tech, syncing schedules, handling deposits – all so you can
                    give your all to what moves you: tattooing stories onto
                    skin.
                  </p>

                  <p className="text-gray-100">
                    Join me. Let's make ink dreams come true, one{" "}
                    <span className="brand-name">Tatty</span> connection at a
                    time.
                  </p>
                  <div className="flex flex-col mt-10 gap-4">
                    <span className="text-xl font-bold text-gray-100 ">
                      Paul Krugman
                    </span>
                    <span className="text-[#696464]">CEO at Tatty</span>
                  </div>
                </div>
                <div className="w-auto md:flex hidden absolute right-0  bottom-0 h-full">
                  <Image
                    src="/paul.png"
                    objectFit="contain"
                    alt="Picture of the author"
                    width={653}
                    height={800}
                    className="h-full w-full"
                  />
                </div>
                <div className="w-full relative md:hidden  flex  items-center justify-center text-center h-[440px]">
                  <Image
                    src="/paul.png"
                    objectFit="cover"
                    alt="Picture of the author"
                    layout="fill"
                    className="absolute w-full h-full top-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="w-full">
          <div className="flex relative items-start w-full h-full  bg-gradient-to-r from-black via-neutral-900 to-black  md:p-10 md:px-20 px-4 py-10 justify-start  flex-col">
            <div className=" w-full flex items-center justify-center">
              <div className="bg-[#474747] py-1 px-4 shadow-black shadow-2xl rounded-lg">
                <span className="text-gray-100">Contact us</span>
              </div>
            </div>

            <div className="w-full text-start h-full">
              <h1 className="md:w-[720px] w-full text-start  text-gray-100 mt-10 md:text-2xl text-lg ">
                Tatty is a simple way for tattoo artists to review and respond
                to submissions and set appointments, eliminating the “back and
                forth” between you and your clients.
              </h1>
              <h1 className="text-xl font-bold mt-8 text-[#CD235E]">Address</h1>

              <h1 className="text-lg mt-4 text-gray-100">P.O. Box 5072 </h1>
              <h1 className="text-lg text-gray-100">Covina Ca 91723</h1>
              <h1 className="text-xl font-bold mt-2 text-[#CD235E]">E-mail</h1>

              <h1 className="text-lg text-gray-100">support@tatty.app</h1>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="md:flex relative items-start w-full h-full  GradientFooterSection  border-t-[1px] border-gray-900 md:p-10 md:px-20 justify-start  flex-col">
            <div className="w-full h-full md:flex">
              <div className="w-full h-full hidden md:flex">
                <Image
                  src="/Logo.png"
                  className="rounded-full mt-4"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-full h-full justify-center md:hidden flex">
                <Image
                  src="/Logo.png"
                  className="rounded-full mt-4"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-full h-full gap-4 flex md:justify-end md:mt-0 mt-4 justify-center">
                <div className="flex items-center justify-end">
                  <Link href="https://apps.apple.com/us/app/tatty/id1583097900?ign-itscg=30200&ign-itsct=apps_box_badge">
                    <AppleStore className="md:h-[55px] h-[40px]" />
                  </Link>
                </div>
                <div className="flex items-center justify-center">
                  <Link href="https://play.google.com/store/apps/details?id=app.tatty&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                    <GooglePlay className="md:h-[55px] h-[40px]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:mt-32 mt-4 md:flex justify-center text-center items-center">
              <div className="w-full flex flex-col md:items-start md:justify-start md:text-start ">
                <h1 className="text-gray-500">Stay connected</h1>
                <h1 className="text-gray-500">All rights reserved ©2024</h1>
              </div>
              <div className="w-full md:gap-10 gap-4 md:mt-0 mt-10 text-[#CD235E] flex md:items-end md:justify-end md:text-end items-center justify-center">
                <Link href="https://access.tatty.app/privacy-policy">
                  <h1>Privacy Policy</h1>
                </Link>
                <Link href="https://access.tatty.app/terms-of-service">
                  <h1>Terms of Use</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
