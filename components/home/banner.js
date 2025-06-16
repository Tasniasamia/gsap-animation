"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { use, useEffect } from "react";

const Banner = () => {
  let images = [
    { id: 1, img: "/1.jpeg" },
    { id: 2, img: "/2.jpeg" },
    { id: 3, img: "/3.jpeg" },
    { id: 4, img: "/4.jpeg" },
    { id: 5, img: "/5.jpeg" },
    { id: 6, img: "/6.jpeg" },
  ];
  useEffect(() => {
    images?.forEach((image) => {
      const img = document.createElement("img");
      img.classNameList.add("w-[150px]", "h-[150px]", "object-cover");
      img.src = image.img;
      document.querySelector(".container").appendChild(img);
    });
    let targets = document.querySelector(".container").querySelectorAll("img");
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-1",
        start: "top top",
        end: "bottom center",
        scrub: 1,
        pin: true,
        pinType: "transform",
      },
    });
    gsap.utils.toArray(targets).forEach((target, i) => {
      tl.to(
        target,
        {
          x: random(-2000, 2000),
          y: random(-1000, 1000),
          rotate: random(-700, 700),
          scale: 0,
        },
        "anim"
      );
    });
    gsap.to(".txt", {
      scale: 0,
      scrollTrigger: {
        start: () => tl.scrollTrigger.end,
        end: "47%",
        pin: ".txt",
        pinType: "transform",
        scrub: 1,
      },
    });
    gsap.utils.toArray(".box-1").forEach((box, i) => {
      gsap.from(box, {
        y: 150,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: box,
          start: "top 90%", // when top of box hits 90% of viewport
          end: "top 60%",
          scrub: true,
        },
      });
    });
  }, []);
  const random = (min, max) => {
    return min + (max - min) * Math.random();
  };
  return (
    <div>
      <section classNameName="section-1  flex  overflow-hidden justify-center items-center ">
        <div classNameName="flex justify-center items-center text-container">
          <div classNameName="txt uppercase text-black font-normal text-[8rem]">
            Photography
          </div>
        </div>
        <div classNameName="container "></div>
      </section>
      <section className="w-full box-1 h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to My Section
          </h1>
          <p className="text-lg text-gray-600">
            This is a simple section created using Tailwind CSS.
          </p>
        </div>
      </section>
      {/* <!-- Section 1 --> */}
      <section className="w-full box-1 h-screen bg-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Section One</h1>
          <p className="text-lg text-blue-600">
            This is the first section of the page.
          </p>
        </div>
      </section>

      {/* <!-- Section 2 --> */}
      <section className="w-full box-1 h-screen bg-green-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Section Two</h1>
          <p className="text-lg text-green-600">
            This is the second section of the page.
          </p>
        </div>
      </section>

      {/* <!-- Section 3 --> */}
      <section className="w-full h-screen box-1 bg-yellow-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-800 mb-4">Section Three</h1>
          <p className="text-lg text-yellow-600">
            This is the third section of the page.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
