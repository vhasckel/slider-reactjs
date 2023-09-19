"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import image1 from "../../public/image01.avif";
import image2 from "../../public/image02.avif";
import image3 from "../../public/image03.avif";
import image4 from "../../public/image04.avif";
import image5 from "../../public/image05.avif";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";

const images = [image1, image2, image3, image4, image5];

export default function Home() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  return (
    <main className={styles.container}>
      <h3>Gallery</h3>
      <div className={styles.main}>
        <motion.div
          ref={carousel}
          className={styles.slider}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className={styles.images}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {images.map((image) => (
              <motion.div className={styles.image} key={image}>
                <Image src={image} alt="image"></Image>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
