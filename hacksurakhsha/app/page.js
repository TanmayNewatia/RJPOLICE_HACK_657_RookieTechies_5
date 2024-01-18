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
import Feedback from './components/feedback';
import Modal from "react-modal";
import ReactDOM from 'react-dom';
import { IoIosCloseCircle } from "react-icons/io";
import { FaQuestion } from "react-icons/fa";
import Report from './components/report';
import { supabase } from './supabase';
import data from './data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from "./images/img1.jpeg";
import  img2  from "./images/img2.jpeg";
import  img3 from "./images/img3.jpeg";
import  img4 from "./images/img4.jpeg";
import  img5 from "./images/img5.jpeg";
import  img6 from "./images/img6.jpeg";
import  img7 from "./images/img7.jpeg";
import  img8 from "./images/img8.jpeg";
import  img9 from "./images/img9.jpeg";
import  img10 from "./images/img10.jpeg";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    background: "linear-gradient(321deg, rgba(87,0,123,1) 0%, rgba(157,128,195,1) 100%)",
    borderRadius: "30px",
    height: "90%",
    overflowY: "scroll",
    overflowX: "hidden"
  },
};

const customStyles2 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    background: "linear-gradient(321deg, rgba(87,0,123,1) 0%, rgba(157,128,195,1) 100%)",
    borderRadius: "30px",
    height: "70%",
    overflow: "hidden",
    minWidth: "380px",
    maxWidth: "600px"
  },
};

const customStyles3 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    background: "linear-gradient(321deg, rgba(87,0,123,1) 0%, rgba(157,128,195,1) 100%)",
    borderRadius: "30px",
    height: "70%",
    overflow: "hidden",
    minWidth: "380px",
    maxWidth: "600px"
  },
};

export default function Home() {
  const val = [{ "0": img1, "1": img2, "2": img3, "3": img4, "4": img5, "5": img6, "6": img7, "7": img8, "8": img9, "9": img10 }]
  const [open, setOpen] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);
  const [modalIsOpen3, setIsOpen3] = React.useState(false);
  const [org, setOrg] = React.useState("");
  const [service, setService] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [result, setResult] = useState(0);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal3() {
    setIsOpen3(true);
  }

  function closeModal3() {
    setIsOpen3(false);
  }

  const openMenu = () => {
    if (window.innerWidth <= 600) {
      setOpen(!open);
    }
  }

  const customerVerification = async () => {
    let ele = document.getElementById("customercare").value;
    for (let i = 0; i < data.length; i++) {
      if (data[i]["contact_number"] == ele) {
        setOrg(data[i]["organization"]);
        setService(data[i]["service"]);
        setContact(data[i]["contact_number"]);
        setResult(1);
        setIsOpen3(1);
        break;
      }
    }
    if (result == 0) {
      toast("Customer Care Number is not verified!")
    }
  }
  return (
    <div>
      <header className="flex justify-between items-center">
        <div className="flex justify-between max-[400px]:w-full">
          <div className="flex items-center logo">
            <Image src={logo} alt="RookieTechies" width={50} />
            <p className="ml-2 mb-0">RookieTechies</p>
          </div>
          <button className="menubtn text-lg" onClick={() => { openMenu() }}><FaBars /></button>
        </div>

        <ul className={(open) ? "flex items-center nav justify-between open" : "flex items-center nav justify-between"}>
          <li><a href="#">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li className="contact"><a href="#">Contact Us</a></li>
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
        <section id="services" className="services !w-screen my-10">
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
            <form className="w-8/12 flex justify-center items-center">
              <input type="text" placeholder='Paste the URL Here' style={{ padding: "10px", borderRadius: "10px" }} />
              <button className="text-2xl p-3"><FaQuestion /></button>
            </form>
            <form className="w-8/12 flex justify-center items-center">
              <input id="customercare" type="text" placeholder='Paste the Customer Care Number Here' style={{ padding: "10px", borderRadius: "10px" }} />
              <p className="text-2xl p-3 cursor-pointer" onClick={() => { customerVerification() }} ><FaQuestion /></p>
              <Modal
                isOpen={modalIsOpen3}
                onRequestClose={closeModal3}
                style={customStyles3}
                contentLabel="ResultModal"
              >
                <button style={{ position: "fixed", left: "94%", top: "20px", fontSize: "30px", color: "white" }} onClick={closeModal3}><IoIosCloseCircle /></button>
                <div className='flex justify-evenly items-center w-full h-full flex-col'>
                  <h3 class="text-2xl font-bold text-white">Customer Care Number is Verified!</h3>
                  <div className="flex w-full justify-evenly">
                    <h4 className="text-white font-semibold">Organization</h4>
                    <h5 className="text-white font-semibold" id="org">{org}</h5>
                  </div>
                  <div className="flex w-full justify-evenly">
                    <h4 className="text-white font-semibold">Service</h4>
                    <h5 className="text-white font-semibold" id="service">{service}</h5>
                  </div>
                  <div className="flex w-full justify-evenly">
                    <h4 className="text-white font-semibold">Contact Number</h4>
                    <h5 className="text-white font-semibold" id="contact">{contact}</h5>
                  </div>
                </div>
              </Modal>
              <ToastContainer />
            </form>

            <div>

            </div>
          </div>
        </section>
        <section className="recent flex flex-col">
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
          <button className="report-btn" onClick={openModal2}>Report a Website</button>
          <Modal
            isOpen={modalIsOpen2}
            onRequestClose={closeModal2}
            style={customStyles2}
            contentLabel="ReportModal"
          >
            <button style={{ position: "fixed", left: "90%", top: "20px", fontSize: "30px", color: "white" }} onClick={closeModal2}><IoIosCloseCircle /></button>
            <Report />
          </Modal>
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
            <p className="hero-button cursor-pointer my-2" onClick={() => { openModal(); }}>Give Feedback</p>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="FeedbackModal"
            >
              <button style={{ position: "fixed", left: "94%", top: "20px", fontSize: "30px", color: "white" }} onClick={closeModal}><IoIosCloseCircle /></button>
              <Feedback />
            </Modal>
          </div>
          <Image src={shape} alt="Shape Image" width={"50%"} />
        </section>
        <section className="recent flex flex-col">
          <div className="recent-checked flex flex-col justify-center items-center my-10">
            {/* <p className="text-3xl text-center">Fun Awareness</p> */}
            <p className="text-3xl text-center"><strong>Fun Awareness</strong></p>
            <Carousel
              opts={{
                align: "start",
              }}
              className="flex justify-center w-10/12 h-8/12"
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
            >
              <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="w-10/12 flex justify-center items-center">
                      <CardContent className="flex flex-col aspect-square items-center justify-evenly p-6 w-11/12">
                        <Image src={img1} className="card-img-top" alt="Verified" width={300} height={300} />

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
