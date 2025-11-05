import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Carousel from "./Carousel";
import SearchTour from "./SearchTour";
import Testimonials from "./Testimonials";
import HomeTours from "./HomeTours";
import heroData from "../../data/heroData";
import HeroCard from "./HeroCard";
import PopularTours from "./popular/PopularTours";
import WhyUs from "../whyUs/WhyUs";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="div">
      <div className="h-[600px] md:h-[500px] mb-4">
        <Carousel>
          {heroData.map((item, index) => (
            <HeroCard key={index} {...item} />
          ))}
        </Carousel>
      </div>

      <div data-aos="fade-up">
        <SearchTour />
      </div>

      <div data-aos="fade-right">
        <HomeTours />
      </div>

      <div data-aos="fade-left">
        <WhyUs />
      </div>

      <div data-aos="fade-up">
        <Testimonials />
      </div>

      <div data-aos="fade-right">
        <PopularTours />
      </div>
    </div>
  );
}
