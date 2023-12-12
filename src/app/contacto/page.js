import ContactForm from "@/components/form/contactForm";
import { performRequest } from "../../../lib/datocms";

export const metadata = {
    title: "Ressonar | Contacto",
    description: "Ressonar films | Pagina de contacto",
};

const CONTACTO_QUERY = `
    query contacto {
        contacto {
            title
            parrafo
        }
    }
`;
// poner correo ressonarfilms@gmail.com
export default async function Page() {
    const {
        data: { contacto },
    } = await performRequest({ query: CONTACTO_QUERY });

    return (
        <main className="pt-16 md:ml-16 md:pt-0 h-screen flex justify-center items-center">
            <div className="flex flex-col gap-6 justify-center items-center">
                <h3 className="font-bold text-center md:text-start text-4xl">
                    {contacto.title}
                </h3>
                <div className="w-full px-4 md:w-1/2">
                    <p className="text-justify md:text-left">
                        {contacto.parrafo}
                    </p>
                </div>
                <div className="w-full px-4 md:w-1/2">
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
