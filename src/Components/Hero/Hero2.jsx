
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
export default function Hero2  () {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (

        <>
            {/* Container for demo purpose */}
            <div>
                {/* Section: Design Block */}
                <section className="mb-40">
                    <div
                        className="relative overflow-hidden bg-no-repeat bg-cover"
                        style={{
                            backgroundPosition: "50%",
                            backgroundImage:
                                'url("https://restaurantinteriordesign.eu/wp-content/uploads/2018/04/Hollywood_Roosevelt_Hotel.jpg")',
                            height: "100vh"
                        }}
                    >
                        <div
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                            style={{backgroundColor: "rgba(0, 0, 0, 0.75)"}}
                        >
                            <div className="flex justify-center items-center h-full">
                                <div className="text-center text-white px-6 md:px-12">
                                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                                        DORSIA <br/>
                                        <span className={'text-2xl text-gray-200'}>new york</span>
                                    </h1>
                                    <a
                                        type="button"
                                        className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        href={'#reserve'}
                                    >
                                        Reserve
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
            {/* Container for demo purpose */}
        </>
    )
}