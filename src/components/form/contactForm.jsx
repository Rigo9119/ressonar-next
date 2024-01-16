"use client";
import { useRef, useState } from "react";
import emailjs from "email-js";

const ContactForm = () => {
    const contactForm = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        comment: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        emailjs
            .sendForm(
                process.env.NEXT_EMAILJS_SERVICE_ID,
                process.env.NEXT_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_EMAILJS_PUBLIC_KEY,
            )
            .then(
                (result) => {
                    console.log(result);
                },
                (error) => {
                    console.log(error);
                },
            );
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form
            ref={contactForm}
            onSubmit={handleSubmit}
            name="emailForm"
            className="flex flex-col gap-4 justify-center items-center"
        >
            <input
                className="px-4 py-2 w-full border rounded border-color-black"
                type="text"
                placeholder="Tu nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                className="px-4 py-2 w-full border rounded border-color-black"
                type="text"
                placeholder="Tu correo"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                className="px-4 py-2 w-full border rounded border-color-black"
                type="text"
                placeholder="Tu telefono"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
            />
            <textarea
                className="px-4 py-2 w-full border rounded border-color-black"
                placeholder="¿Qué tienes en mente?"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
            />
            <button
                className="border w-1/2 rounded bg-green-500 px-4 py-2"
                type="submit"
            >
                Enviar
            </button>
        </form>
    );
};

export default ContactForm;
