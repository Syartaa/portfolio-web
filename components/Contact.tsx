"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useTheme } from "@/context/ThemeContext";

import SectionTitle from "./SectionTitle";
import SubmitButton from "./SubmitButton";

const Contact = () => {
    const { theme } = useTheme();
    const toastStyle = {style:{backgroundColor: theme === "light" ? "white" : "#192745", border: "1px solid rgb(0 0 0 / 0.1)", color: theme === "light" ? "black" : "white"}}

    const { ref } = useSectionInView("Contact");
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <motion.section id="contact" className="text-center w-[min(100%,38rem)] mb-20 scroll-mt-28 sm:mb-28" ref={ref}
          initial     = {{ opacity: 0 }}
          whileInView = {{ opacity: 1 }}
          transition  = {{ duration: 1 }}
          viewport    = {{ once: true }}
        >
            <SectionTitle>Contact me</SectionTitle>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
              Please contact me directly at <a className="underline" href="mailto:syartapajaziti@gmail.com">syartapajaziti@gmail.com</a> or through this form.
            </p>

            <form className="flex flex-col mt-10 dark:text-black" ref={formRef}
              action={async formData => {
                const { data, error } = await sendEmail(formData);

                if (error) {
                  toast.error(error, toastStyle);
                  return;
                }

                if (formRef.current) {
                  formRef.current.reset();
                }

                toast.success("E-mail sent successfully", toastStyle);
              }}>
                <input className="borderBlack h-14 px-4 rounded-lg outline-none focus:border-black/60 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-95 transition-all"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Your email"
                  maxLength={100}
                  required
                />

                <textarea className="borderBlack h-52 my-3 p-4 rounded-lg outline-none focus:border-black/60 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-95 transition-all"
                  name="text"
                  placeholder="Your message"
                  maxLength={2000}
                  required
                />

                <SubmitButton />
            </form>
        </motion.section>
    );
}
export default Contact;