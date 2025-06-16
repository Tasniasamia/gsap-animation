"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Banner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.to(".img-container", {
      scale: 36,
      scrollTrigger: {
        trigger: ".video-section",
        start: "top top",
        end: "bottom center",
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  return (
    <div>
      <section className="video-section">
        <div className="video-container">
          <video src="/project2/flower.mp4" autoPlay loop muted></video>
        </div>
        <div className="img-container">
          <Image
            src="/project2/window.png"
            alt="window"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
      </section>

      <section className="section">
        <div className="boxes-container">
          {/* Box 1 */}
          <div className="columns box1">
            <div className="col col-1">
              <img src="/project2/1.jpeg" alt="img1" />
              <img src="/project2/2.jpeg" alt="img2" />
            </div>
            <div className="col-2">
              <h1>Carolina</h1>
              <span>28 October 2021</span>
              <div className="line"></div>
              <div className="text-box">
                <p>
                  This series is excellently showing that ordinary portrait
                  photography still can be inspiring for you.
                </p>
                <p>
                  Check the shots of beautiful Caroline in hat with red and
                  green lights.
                </p>
              </div>
            </div>
            <div className="col col-3">
              <img src="/project2/3.webp" alt="img3" />
              <img src="/project2/4.jpeg" alt="img4" />
              <img src="/project2/5.jpeg" alt="img5" />
            </div>
          </div>

          {/* Box 2 */}
          <div className="columns box2">
            <div className="col col-1">
              <img src="/project2/p1.jpeg" alt="p1" />
              <img src="/project2/p2.webp" alt="p2" />
            </div>
            <div className="col-2">
              <h1>Soul Dance</h1>
              <span>17 September 2021</span>
              <div className="line"></div>
              <div className="text-box">
                <p>
                  Beautiful dance of Hanna in neon lights with retro effect.
                  Pink lights, pretty women and sensuality.
                </p>
                <p>
                  Inspiring vibes and invisible beautiful soul on this shots.
                </p>
              </div>
            </div>
            <div className="col col-3">
              <img src="/project2/p3.jpeg" alt="p3" />
              <img src="/project2/p4.jpeg" alt="p4" />
              <img src="/project2/p5.jpeg" alt="p5" />
            </div>
          </div>

          {/* Box 3 */}
          <div className="columns box3">
            <div className="col col-1">
              <img src="/project2/b1.jpeg" alt="b1" />
              <img src="/project2/b2.webp" alt="b2" />
              <img src="/project2/b3.jpeg" alt="b3" />
              <img src="/project2/b4.jpeg" alt="b4" />
            </div>
            <div className="col-2">
              <h1>80's Vibes</h1>
              <span>1 September 2021</span>
              <div className="line"></div>
              <div className="text-box">
                <p>
                  Retro nostalgia can be sweet and sour at the same time.
                  Christina helped us make photos that will give you these
                  feelings.
                </p>
                <p>
                  Drop in past times with this collection of 80's styled photos.
                </p>
              </div>
            </div>
            <div className="col col-3">
              <img src="/project2/b5.webp" alt="b5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
