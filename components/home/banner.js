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
      img.classList.add("w-[150px]", "h-[150px]", "object-cover");
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
        pinType: "transform",},
    });
    gsap.utils.toArray(targets).forEach((target, i) => {
        tl.to(target, {
         x:random(-2000,2000),
         y:random(-1000,1000),
         rotate: random(-700,700),
         scale:0
        },'anim');
    })
    gsap.to(".txt", { scale:0,scrollTrigger: {start:()=>tl.scrollTrigger.end,end:"47%",pin:".txt",pinType:"transform", scrub: 1 } });
  }, []);
const random=(min,max)=>{
    return min + (max - min)*Math.random() ;
}
  return (
    <div>
      <section className="section-1  flex  overflow-hidden justify-center items-center ">
        <div className="flex justify-center items-center text-container">
          <div className="txt uppercase text-black font-normal text-[8rem]">
            Photography
          </div>
        </div>
        <div className="container "></div>
      </section>
      <section className="bg-red-300 "></section>
    </div>
  );
};

export default Banner;
