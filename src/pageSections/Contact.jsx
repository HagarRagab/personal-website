import { useForm } from "react-hook-form";
import { useAnimate, stagger } from "framer-motion";

import styles from "./Contact.module.css";
import Email from "../assets/icons/email.svg?react";
import Button from "../components/Button";
import Section from "../components/Section";
import ImageComponent from "../components/ImageComponent";
import { hashImgs } from "../utils/hashImgs";

function Contact({ isDarkMood }) {
    const { src, mobSrc, alt, hash } =
        hashImgs.contact[isDarkMood ? "dark" : "light"];
    const {
        register,
        handleSubmit,
        formState: { errors, isLoading },
        reset,
    } = useForm();
    const [scope, animate] = useAnimate();

    async function onSubmit(data) {
        reset();
    }

    return (
        <Section id="contact" className={styles.contact}>
            <header>
                <h2>
                    Get In <span>Touch</span>
                </h2>
                <p>We are here for you. How can we help?</p>
            </header>
            <main>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} ref={scope}>
                        <div data-msg={errors?.name?.message}>
                            <input
                                type="text"
                                placeholder="Your name"
                                aria-label="Enter your name"
                                autoComplete="off"
                                disabled={isLoading}
                                className="name"
                                {...register("name", {
                                    validate: (value) => {
                                        if (value.trim().length < 3) {
                                            animate(
                                                ".name",
                                                { x: [-10, 0, 10, 0] },
                                                {
                                                    type: "spring",
                                                    duration: 0.3,
                                                    delay: stagger(0.1),
                                                }
                                            );
                                            return "Please add a valid name";
                                        }
                                    },
                                })}
                            />
                        </div>
                        <div data-msg={errors?.email?.message}>
                            <input
                                type="text"
                                placeholder="Your email"
                                aria-label="Enter your email"
                                autoComplete="off"
                                disabled={isLoading}
                                className="email"
                                {...register("email", {
                                    validate: (value) => {
                                        const regex =
                                            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
                                        if (!regex.test(value.trim())) {
                                            animate(
                                                ".email",
                                                { x: [-10, 0, 10, 0] },
                                                {
                                                    type: "spring",
                                                    duration: 0.3,
                                                    delay: stagger(0.1),
                                                }
                                            );
                                            return "Add valid email address";
                                        }
                                    },
                                })}
                            />
                        </div>
                        <div data-msg={errors?.message?.message}>
                            <textarea
                                placeholder="Go ahead we are listening..."
                                aria-label="Go ahead we are listening add your message"
                                autoComplete="off"
                                disabled={isLoading}
                                {...register("message", {
                                    validate: (value) => {
                                        if (
                                            value.trim().length < 20 ||
                                            !value
                                        ) {
                                            animate(
                                                "textarea",
                                                { x: [-10, 0, 10, 0] },
                                                {
                                                    type: "spring",
                                                    duration: 0.2,
                                                    delay: stagger(0.05),
                                                }
                                            );
                                            return "At least 20 characters";
                                        }
                                    },
                                })}
                            />
                        </div>
                        <Button style="filled" disabled={isLoading}>
                            Submit
                        </Button>
                    </form>
                    <div className={styles.email}>
                        <Email />
                        <p>email@email.com</p>
                    </div>
                </div>
                <figure>
                    <ImageComponent
                        src={src}
                        mobSrc={mobSrc}
                        alt={alt}
                        hash={hash}
                    />
                </figure>
            </main>
        </Section>
    );
}

export default Contact;
