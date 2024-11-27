import { useState } from 'react'
import { Leaf, Mail, Phone, MapPin, ChevronDown, Droplet, Recycle, Heart, Sun, Facebook, Twitter, Instagram, Award } from 'lucide-react'
import LOGO from '../../public/logo/Logo_HEXACOL.png'
import FILTRO from '../../public/filtro.png'
import FILTRO_HEX from '../../public/FILTRO_HEX.jpg'

import PRODUCT_1 from '../../public/products/img1.jpg'
import PRODUCT_2 from '../../public/products/img2.jpg'
import PRODUCT_3 from '../../public/products/img3.jpg'
import PRODUCT_4 from '../../public/products/img4.jpg'


export default function MainPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeAccordion, setActiveAccordion] = useState(null)

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id)
    }
    const features = [
        "Agua hidrogeno alcalina",
        "Elimina bacterias, clor, pesticidas",
        "4 filtros en uno solo",
        "Elimina el 99.9% de metales pesados",
        "Agua mineral",
        "Certificado mundialmente",
        "Cartuchos lavables  para garantizar mejor calidad de agua"
    ]
    const certificates = [
        {
            name: "FDA",
            description: "",
        },
        {
            name: "WATER QUALITY",
            description: "",
        },
        {
            name: "ISO 9001",
            description: "",
        },
        {
            name: "ISO 14001",
            description: "",
        },
        {
            name: "KFDA",
            description: "",
        },
    ]

    return (
        <div className="min-h-screen">
            <header className="fixed top-0 z-50 flex items-center w-full bg-blue-800 text-white">
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    {/* <h1 className="text-2xl font-bold">Natural harmony</h1> */}
                    <a className="pl-16 2xl:p-0" href="/"><img className="w-full h-10 scale-125" src={LOGO} alt="" /></a>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            <li>
                                <a
                                    href="#home"
                                    className="relative group mx-2 px-1 2xl:mx-4 2xl:px-2 hover:cursor-pointer">
                                    <span> Inicio</span>
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all" />
                                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all" />
                                </a></li>
                            <li>
                                <a
                                    href="#product"
                                    className="relative group mx-2 px-1 2xl:mx-4 2xl:px-2 hover:cursor-pointer">
                                    <span> Producto</span>
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all" />
                                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all" />
                                </a>
                            </li>
                            <li> <a
                                href="#contact"
                                className="relative group mx-2 px-1 2xl:mx-4 2xl:px-2 hover:cursor-pointer">
                                <span> Contacto</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all" />
                                <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all" />
                            </a></li>
                        </ul>
                    </nav>
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <ChevronDown className={`transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                </div>
                {isMenuOpen && (
                    <nav className="md:hidden">
                        <ul className="container mx-auto px-4 py-2 space-y-2">
                            <li><a href="#home" className="block hover:underline">Inicio</a></li>
                            <li><a href="#product" className="block hover:underline">Producto</a></li>
                            <li><a href="#contact" className="block hover:underline">Contacto</a></li>
                        </ul>
                    </nav>
                )}
            </header>

            <main className='mt-14'>
                <section id="home" className="container mx-auto py-16">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                            <div className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center w-full max-w-[500px] xl:max-w-[550px] lg:order-last">
                                <img
                                    src={FILTRO}
                                    alt="Water filter"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-4">
                                    <h1 className="text-3xl font-semibold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Agua Alcalina, Mejor vida
                                    </h1>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Conoce las propiedades y beneficios de los filtros Hexacol,
                                        agua alcalina que favorece la hidratación, equilibra tu cuerpo y mejora tu calidad de vida.

                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <a target="_blank" href="https://www.instagram.com/filtroshexacol_hexagon/" className="text-white bg-gradient-to-r from-blue-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-3 text-center me-2 mb-2">
                                        Conoce más
                                    </a>
                                    {/* <a href="#" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
                                        Learn More
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="features" className="py-16 bg-gray-200">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Porque Hexacol?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <Droplet className="mx-auto text-blue-900 w-12 h-12 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">100% Agua Alcalina</h3>
                                {/* <p>Hecho con la naturaleza , ingredientes organicos y saludables</p> */}
                            </div>
                            <div className="text-center">
                                <Recycle className="mx-auto text-blue-900 w-12 h-12 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                                {/* <p>Ayuda al medio ambiente desde su creación hasta su producción, reduce el impacto ambiental</p> */}
                            </div>
                            <div className="text-center">
                                <Heart className="mx-auto text-blue-900 w-12 h-12 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Para todos</h3>
                                {/* <p>Proteje y cuida tu piel , no importa cual sea, es para todos los tipos de piel, incluso la sensible</p> */}
                            </div>
                            <div className="text-center">
                                <Sun className="mx-auto text-blue-900 w-12 h-12 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Cuida tu salud</h3>
                                {/* <p>Cada jabón es hecho con dedicación y amor junto con la naturaleza</p> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="product" className="py-16  overflow-hidden">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                            Nuestro Filtro Hexacol
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                                <img
                                    src={FILTRO_HEX}
                                    alt="Filtro Hexacol"
                                    className="relative w-full max-w-[500px] mx-auto transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">
                                        Agua Alcalina
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Nuestro filtro está fabricado con la más alta tecnología, cuidadosamente diseñado para proporcionar agua pura y saludable para toda la familia. Libre de contaminantes y con un sistema avanzado de filtración, amigable con el medio ambiente y perfecto para uso diario.
                                    </p>
                                </div>
                                <ul className="grid gap-4 text-xl">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center space-x-3 group">
                                            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center group-blue:bg-green-200 transition-colors">
                                                <Droplet className="w-4 h-4 text-blue-600" />
                                            </span>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-6">
                                    <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-105 active:scale-95">
                                        Compra Ahora
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="products" className='py-12 bg-gradient-to-br from-blue-100 to-blue-50'>
                    <h1 className='text-3xl font-bold mb-8 text-center'>Nuestros productos</h1>
                    <p className='px-20'>
                        En  Hexacol, somos especialistas en sistemas de potabilización de agua diseñados para transformar tu entorno y garantizar la calidad del agua que utilizas cada día. Ofrecemos una amplia gama de productos innovadores para satisfacer tus necesidades: </p>
                    <p className='px-20 mt-2'>Filtro de cocina, filtro de ducha, filtros de lava manos, dispensadores sin botellon, filtros industriales, sedimentadores</p>
                    <section id="grid-items" className='container mx-auto pt-8 px-2 lg:px-4 '>
                        <div className="grid grid-cols-3 grid-rows-2 gap-4">
                            <div className="row-span-2">
                                <a href="#"
                                    className="group relative flex h-[368px] items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[400px] lg:h-[528px]">
                                    <img src={PRODUCT_1} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>
                                    {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span> */}

                                </a>
                            </div>
                            <div >
                                <a href="#"
                                    className="group relative flex h-44 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-48 lg:h-64">
                                    <img src={PRODUCT_2} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>
                                </a>
                            </div>
                            <div className="col-span-2 col-start-2 row-start-2">
                                <a href="#"
                                    className="group relative flex h-44 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-48 lg:h-64">
                                    <img src={PRODUCT_3} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>
                                </a>
                            </div>
                            <div className="col-start-3 row-start-1">
                                <a href="#"
                                    className="group relative flex h-44 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-48 lg:h-64">
                                    <img src={PRODUCT_4} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Nuestas Certificaciones</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {certificates.map((cert, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-center mb-4">
                                        <Award className="w-8 h-8 text-blue-500 mr-3" />
                                        <h3 className="text-xl font-semibold">{cert.name}</h3>
                                    </div>
                                    <p className="text-gray-600">{cert.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20 bg-blue-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Contactanos</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div>
                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block mb-1">Nombre</label>
                                        <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-1">Email</label>
                                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded" required />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block mb-1">Mensaje</label>
                                        <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded" required></textarea>
                                    </div>
                                    <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                                        Enviar
                                    </button>
                                </form>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">Información de contacto</h3>
                                <div className="space-y-4">
                                    <p className="flex items-center">
                                        <Mail className="mr-2" />
                                        <span>hexacolfiltros@gmail.com</span>
                                    </p>
                                    <p className="flex items-center">
                                        <Phone className="mr-2" />
                                        <span>+57 301 3808307</span>
                                    </p>
                                    <p className="flex items-center">
                                        <MapPin className="mr-2" />
                                        <span>Colombia</span>
                                    </p>
                                </div>
                                {/* <div className="space-y-2">
                                    <h4 className="font-semibold">Preguntas Frecuentes</h4>
                                    <div>
                                        <button
                                            className="flex justify-between items-center w-full text-left py-2 border-b"
                                            onClick={() => toggleAccordion('faq1')}
                                        >
                                            <span>Los jabones tienen fecha de caducidad?</span>
                                            <ChevronDown className={`transform transition-transform ${activeAccordion === 'faq1' ? 'rotate-180' : ''}`} />
                                        </button>
                                        {activeAccordion === 'faq1' && (
                                            <p className="py-2">Si, todos nuestros jabones tienen fecha de caducidad porque sus ingredientes son 100% naturales.</p>
                                        )}
                                    </div>
                                    <div>
                                        <button
                                            className="flex justify-between items-center w-full text-left py-2 border-b"
                                            onClick={() => toggleAccordion('faq2')}
                                        >
                                            <span>Cuanto dura cada jabón?</span>
                                            <ChevronDown className={`transform transition-transform ${activeAccordion === 'faq2' ? 'rotate-180' : ''}`} />
                                        </button>
                                        {activeAccordion === 'faq2' && (
                                            <p className="py-2">Con el cuidado correcto, nuestro jabón suele durar entre 2 - 3 semanas con un uso diario</p>
                                        )}
                                    </div>
                                </div> */}
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold mb-4">Síguenos</h3>
                                <div className="flex space-x-4">
                                    {/* <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                                        <Facebook size={24} />
                                    </a>
                                    <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                                        <Twitter size={24} />
                                    </a> */}
                                    <a href="_blank" href="https://web.whatsapp.com/send?phone=+573013808307" className="text-green-600 hover:text-green-800 transition-colors">
                                        <Phone size={24} />
                                    </a>
                                    <a target="_blank" href="https://www.instagram.com/filtroshexacol_hexagon/" className="text-pink-600 hover:text-pink-800 transition-colors">
                                        <Instagram size={24} />
                                    </a>
                                </div>
                                <div className="mt-6">
                                    <h4 className="font-semibold mb-2">Síguenos para más novedades</h4>
                                    <p className="text-sm text-gray-600">Mantente al día con nuestras últimas ofertas, productos y correrias.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-blue-800 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Hexacol. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    )


}