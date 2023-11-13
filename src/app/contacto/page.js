export const metadata = {
    title: 'Contacto'
}

export default function Page() {
    return (
        <main className="h-screen flex justify-center items-center ml-16">
            <div>
                <form className="flex flex-col">
                    <input type="text" placeholder="Tú nombre" />
                    <input type="text" placeholder="Tú correo" />
                    <input type="text" placeholder="Tú telefono" />
                    <textarea placeholder="Escribenos como podemos ayudarte" />
                    <input type="submit" />
                </form>
            </div>
        </main>
    )
}
