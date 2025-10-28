import { useScroll, useTransform, motion } from "framer-motion";

import styles from "./AboutMe.module.css";
import Section from "../components/Section";
import ImageComponent from "../components/ImageComponent";
import { hashImgs } from "../utils/hashImgs";

function AboutMe({ isDarkMood }) {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 2000, 500], [1, 0.6, 0]);

    const { src, mobSrc, alt, hash } =
        hashImgs.about[isDarkMood ? "dark" : "light"];

    return (
        <Section id="about" className={styles.aboutMe}>
            <motion.div style={{ opacity }}>
                <h2>
                    About <span>Me</span>
                </h2>
                <figure>
                    <ImageComponent
                        src={src}
                        mobSrc={mobSrc}
                        alt={alt}
                        hash={hash}
                    />
                </figure>
                <h3>Frontend Developer</h3>
                <p>
                    Driven and adaptable professional working in software
                    development as a front-end developer. With a strong
                    foundation in design principles and years of self-directed
                    learning in web development, I bring a unique blend of
                    creativity and technical expertise. Eager to create
                    user-focused, visually engaging applications while
                    continuing to grow and contribute in the dynamic field of
                    software development.
                </p>
            </motion.div>
        </Section>
    );
}

export default AboutMe;
