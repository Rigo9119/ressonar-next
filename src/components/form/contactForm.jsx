"use client";
import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        comment: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 justify-center items-center"
        >
            <input
                className="px-4 py-2 w-full border rounded border-color-black"
                type="text"
                placeholder="Tú nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                className="px-4 py-2 w-full border rounded border-color-black"
                type="text"
                placeholder="Tú correo"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                className="px-4 py-2 w-full border rounded border-color-black"
                type="text"
                placeholder="Tú telefono"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
            />
            <textarea
                className="px-4 py-2 w-full border rounded border-color-black"
                placeholder="Escribenos como podemos ayudarte"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
            />
            <input
                className="border w-1/2 rounded bg-green-500 px-4 py-2"
                type="submit"
            />
        </form>
    );
};

export default ContactForm;
