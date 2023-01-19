import Chef1 from '../../Assets/chef1.jpeg'
import Chef2 from '../../Assets/chef2.jpeg'
import Chef3 from '../../Assets/chef3.webp'
export default function Team  ()  {
    return(
        <>
            {/* Container for demo purpose */}
            <div className="container my-24 px-6 mx-auto">
                {/* Section: Design Block */}
                <section className="mb-32 text-gray-800 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-white">
                        MEET THE CHEFS
                    </h2>
                    <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
                        <div className="mb-6 lg:mb-0">
                            <div className="bg-white block rounded-lg shadow-lg">
                                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                    <img
                                        src={Chef1}
                                        className="w-full rounded-t-lg"
                                    />
                                    <a href="#!">
                                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                                    </a>
                                    <svg
                                        className="absolute"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1440 320"
                                        style={{ left: 0, bottom: 0 }}
                                    >
                                        <path
                                            fill="#fff"
                                            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h5 className="text-lg font-bold mb-4">Spongebob Squarepants</h5>
                                    <p className="text-gray-500 mb-4">Talented Cook and Burger Flipper</p>

                                </div>
                            </div>
                        </div>
                        <div className="mb-6 lg:mb-0">
                            <div className="bg-white block rounded-lg shadow-lg">
                                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                    <img
                                        src={Chef2}
                                        className="w-full rounded-t-lg"
                                    />
                                    <a href="#!">
                                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                                    </a>
                                    <svg
                                        className="absolute"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1440 320"
                                        style={{ left: 0, bottom: 0 }}
                                    >
                                        <path
                                            fill="#fff"
                                            d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h5 className="text-lg font-bold mb-4">Gordan Ramsey</h5>
                                    <p className="text-gray-500 mb-4">Experienced Chef</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-white block rounded-lg shadow-lg">
                                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                    <img
                                        src={Chef3}
                                        className="w-full rounded-t-lg"
                                    />
                                    <a href="#!">
                                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                                    </a>
                                    <svg
                                        className="absolute"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1440 320"
                                        style={{ left: 0, bottom: 0 }}
                                    >
                                        <path
                                            fill="#fff"
                                            d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h5 className="text-lg font-bold mb-4">Remy The Rat</h5>
                                    <p className="text-gray-500 mb-4">Award Winning Cook</p>
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
