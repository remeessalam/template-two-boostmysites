import React, { lazy, memo } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import CallToAction from "../components/CallToAction";

const Banner = lazy(() => import("../components/Website/Banner"));
const TrustWorthySection = lazy(() =>
  import("../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() => import("../components/IndustriesWeServe"));
const HomePageServicesList = lazy(() =>
  import("../components/HomePageServicesList")
);
const GetInTouch = lazy(() => import("../components/GetInTouch"));

const Home = () => {
  return (
    <>
      <Header />
      <Banner />

      <TrustWorthySection />
      <HomePageServicesList />
      <CallToAction />

      <IndustriesWeServe />
      {/* <BestServicesSlider /> */}
      {/* <Testimonials /> */}
      <GetInTouch />
      {/* </Suspense> */}
      <Footer />
    </>
  );
};

export default memo(Home);

// const LoadingFallback = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary"></div>
//     </div>
//   );
// };
