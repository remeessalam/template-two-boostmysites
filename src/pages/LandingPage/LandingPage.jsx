import React, { lazy, memo } from "react";
import Header from "../../components/LandingPage/Header";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../constants";
import Footer from "../../components/LandingPage/Footer";
import CallToAction from "../../components/CallToAction";

const GetInTouch = lazy(() => import("../../components/GetInTouch"));
const Testimonials = lazy(() => import("../../components/Testimonials"));
const HomePageServicesList = lazy(() =>
  import("../../components/HomePageServicesList")
);
const TrustWorthySection = lazy(() =>
  import("../../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() =>
  import("../../components/IndustriesWeServe")
);
const BrandLogos = lazy(() => import("../../components/BrandLogos"));
const Portfolio = lazy(() => import("../../components/Portfolio"));
const Banner = lazy(() => import("../../components/LandingPage/Banner"));

const LandingPage = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  const servicesList = isWebDevelopment
    ? webDevelopmentServices
    : appDevelopmentServices;
  return (
    <>
      <Header />
      <Banner page={page} />
      <GetInTouch />

      <TrustWorthySection />

      <section
        id="services"
        className="w-screen py-[5rem] min-h-[70vh] flex justify-center relative"
      >
        <div className="blue-bg-shape -z-10 left-[-5%] rotate-45 -translate-y-1/2"></div>
        <div className="blue-bg-shape -z-10 right-[-5%] rotate-45 top-1/2 -translate-y-1/2"></div>
        <div className="wrapper flex flex-col items-center gap-5 z-10">
          <h1
            data-aos="fade-up"
            className="heading text-center max-w-6xl whitespace-pre-line capitalize"
          >
            {/* We provide the Best IT solution services */}
            {isWebDevelopment
              ? "Your website is your digital storefront;\n Make sure it reflects your brand’s essence."
              : "In the age of smartphones, a mobile app is the key to customer engagement."}
          </h1>
          <p data-aos="fade-up" className="text-center max-w-6xl description">
            {isWebDevelopment
              ? "We believe that a great website should not only look good but also function flawlessly, driving conversions and providing measurable results."
              : "Each app we develop is a powerful tool designed to improve productivity, fostering greater engagement and empowering your company to thrive in an increasingly mobile-focused landscape."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 mt-4">
            {servicesList.map((item) => (
              <div
                data-aos="fade-up"
                className="relative group shadow-2xl group py-[4rem] md:py-[8rem] flex items-center overflow-hidden rounded-xl p-5"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  decoding="async"
                  width="550"
                  height="500"
                  className="absolute group-hover:scale-125 transition-all duration-500 w-full h-full inset-0 z-0 object-cover"
                />
                <div className="absolute w-full h-full inset-0 z-0 bg-black/65"></div>
                {/* <div className="mb-5 w-[12rem] h-[12rem] p-3 rounded-full bg-primary/20 flex items-center justify-center">
                  <img
                    loading="lazy"
                    src={item.icon}
                    alt="icon"
                    className="w-[7rem] grayscale object-contain"
                  />
                </div> */}
                <div className="flex flex-col gap-2 items-center relative text-white z-10">
                  <h6 className="font-medium text-center text-3xl">
                    {item.title}
                  </h6>
                  <p className=" text-lg text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomePageServicesList />
      <CallToAction />
      <IndustriesWeServe />
      <Portfolio />
      {/* <WorkingProcess /> */}

      <CallToAction />
      <Testimonials />
      <GetInTouch />
      <BrandLogos />
      <Footer />
    </>
  );
};

export default memo(LandingPage);
