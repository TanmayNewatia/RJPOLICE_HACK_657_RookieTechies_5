'use client';

import Image from 'next/image'
import React, { useState } from 'react';
import logo from "./images/logo.svg";
import hero from "./images/heroimg.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import verified from "./images/verified.svg";
import { FaArrowRight, FaBars } from "react-icons/fa";
import google from "./images/google.svg";
import surf from "./images/surf.svg";
import services from "./images/services.svg";
import shape from "./images/shape.svg";

export default function Home() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    if (window.innerWidth <= 600) {
      setOpen(!open);
    }
  }
  return (
    <div>
      <header className="flex justify-between items-center">
        <div class="flex justify-between max-[400px]:w-full">
          <div className="flex items-center logo">
            <Image src={logo} alt="RookieTechies" width={50} />
            <p className="ml-2 mb-0">RookieTechies</p>
          </div>
          <button className="menubtn text-lg" onClick={() => { openMenu() }}><FaBars /></button>
        </div>

        <ul className={(open) ? "flex items-center nav justify-between open" : "flex items-center nav justify-between"}>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li className="contact" onclick=""><a href="#">Contact Us</a></li>
        </ul>
      </header>
      <main>
        <section className="hero flex items-center">
          <div className="hero-div">
            <div>
              <div>
                <p className="text-4xl">Empowering Your <strong>Online Experience</strong></p>
                <p className="text-4xl">Where <span style={{ color: "#57007B" }}><strong>Security</strong></span> Meets
                  <span style={{ color: "#7F59B0" }}><strong> Simplicity</strong></span>.
                </p>
              </div>
              <p className="w-4/6 mt-8 text-md">A digital gateway providing curated content and interactive
                experiences
                for users on the World Wide
                Web.</p>
            </div>
            <a href="#" className="hero-button">Let's get started!</a>
          </div>
          <Image src={hero} alt="Hero Image" width={"50%"} />
        </section>
        <section className="services !w-screen my-10">
          <h2 className="text-center text-3xl"><strong>Services we offer</strong></h2>
          <main className="flex flex-wrap gap-5 mx-auto justify-evenly items-center w-10/12 h-full !my-10">
            <div className="card">
              <Image src={services} className="card-img-top"
                alt="Advertisement Analysis" width={50} />
              <div className="card-body">
                <p><strong>Advertisement Analysis</strong></p>
                <p className="card-text">A Website is an extension of yourself and we can help you to
                  express it properly. Your website is your number one marketing asset because we live
                  in a digital age.</p>
              </div>
            </div>
            <div className="card">
              <Image src={services} className="card-img-top"
                alt="Website Authentication" width={50} />
              <div className="card-body">
                <p><strong>Website Authentication</strong></p>
                <p className="card-text">A Website is an extension of yourself and we can help you to
                  express it properly. Your website is your number one marketing asset because we live
                  in a digital age.</p>
              </div>
            </div>
            <div className="card">
              <Image src={services} className="card-img-top"
                alt="Customercare Number Verification" width={50} />
              <div className="card-body">
                <p><strong>Customercare Number Verification</strong></p>
                <p className="card-text">A Website is an extension of yourself and we can help you to
                  express it properly. Your website is your number one marketing asset because we live
                  in a digital age.</p>
              </div>
            </div>
          </main>
        </section>
        <section className="surf flex items-center flex-wrap">
          <Image src={surf} alt="Surf Image" width={"50%"} />
          <div className="surf-div">
            <p className="text-4xl">
              <strong>
                Secure the Surf: Your Trusted Gateway to Verified Websites
              </strong>
            </p>
            <p className="w-5/6 mt-8 text-md">The search bar swiftly verifies the security of the entered URLs,
              ensuring a safe browsing experience by
              checking for SSL encryption and trustworthiness.</p>
          </div>
        </section>
        <section className="recent">
          <input type="text" />
          <div>

          </div>
          <div className="recent-checked flex flex-col justify-center items-center my-10">
            <p className="text-3xl text-center">Recently</p>
            <p className="text-3xl text-center"><strong>Verified Sites</strong></p>
            <Carousel
              opts={{
                align: "start",
              }}
              className="flex justify-center w-10/12 h-8/12"
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="w-10/12 flex justify-center items-center">
                      <CardContent className="flex flex-col aspect-square items-center justify-evenly p-6 w-11/12">
                        <Image src={verified} className="card-img-top" alt="Verified" width={200} />
                        <p className="text-ellipsis flex w-10/12">www.kaggle.com</p>
                        <p className="text-sm text-right flex justify-between w-10/12" style={{ color: "#57007B" }}>Go to Website <span><FaArrowRight /></span></p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section className="shape flex items-center justify-evenly gap-5 my-10">
          <div className="shape-div">
            <div>
              <div>
                <p className="text-4xl"><strong>Shape the Future: Your Voice</strong></p>
                <p className="text-4xl"> <strong>Our Evolution</strong></p>
              </div>
              <p className="w-4/6 mt-8 text-md">Welcome to the Feedback Hub! Your insights are invaluable in sculpting an even better experience for you. Help us fine-tune our services by sharing your thoughts – together, we build excellence</p>
            </div>
            <a href="#" className="hero-button">Give Feedback</a>
          </div>
          <Image src={shape} alt="Shape Image" width={"50%"} />
        </section>
      </main >
      <footer className="mt-10">
        <div className="flex w-screen !h-2/6 justify-evenly">
          <div className="w-3/12">
            <div>
              <Image src={logo} alt="RookieTechies" width={50} />
              <p className="ml-2 mb-0">RookieTechies</p>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Image src={google} alt="Google" width={200} />
          </div>
          <ul>
            <li className="font-bold">Links</li>
            <li className="font-muted">About</li>
            <li className="font-muted">Services</li>
            <li className="font-muted">Case Studies</li>
            <li className="font-muted">Blog</li>
          </ul>
          <p>
            Contact Us: 9887651230
          </p>
          <div className="!h-full flex items-end text-xl">
            <i className="fa-brands fa-facebook p-2"></i>
            <i className="fa-brands fa-instagram p-2"></i>
            <i className="fa-brands fa-twitter p-2"></i>
            <i className="fa-brands fa-linkedin-in p-2"></i>
          </div>
        </div>
        <p className="text-center my-5">&copy; 2023 Rookie Techies. All rights reserved.</p>
      </footer>
    </div >
  )
}
