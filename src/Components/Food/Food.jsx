export default function Food () {
    return(
        <>
            {/* Container for demo purpose */}
            <div className="container my-24 px-6 mx-auto">
                {/* Section: Design Block */}
                <section className="mb-32 text-gray-800">
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n      .zoom:hover img {\n        transform: scale(1.1);\n      }\n    "
                        }}
                    />
                    <h2 className="text-3xl font-bold mb-12 text-center text-white">
                        Things That You Could Eat at Dorsia
                    </h2>
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div
                            className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
                            style={{ backgroundPosition: "50%" }}
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="dark"
                        >
                            <img
                                src="https://summitlife.org/wp-content/uploads/2017/08/Helping-the-Poor-Website.jpg"
                                className="w-full transition duration-300 ease-linear align-middle"
                            />
                            <a href="#!">
                                <div
                                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                                >
                                    <div className="flex justify-start items-end h-full">
                                        <h5 className="text-lg font-bold text-white m-6">
                                            The Poor
                                        </h5>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div
                                        className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                        style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                                    />
                                </div>
                            </a>
                        </div>
                        <div
                            className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
                            style={{ backgroundPosition: "50%" }}
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="dark"
                        >
                            <img
                                src="https://static.wikia.nocookie.net/spongebob/images/2/2f/Krusty_Krab_Training_Video_081.png"
                                className="w-full transition duration-300 ease-linear align-middle"
                            />
                            <a href="#!">
                                <div
                                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                                >
                                    <div className="flex justify-start items-end h-full">
                                        <h5 className="text-lg font-bold text-white m-6">
                                            Krabby Patty
                                        </h5>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div
                                        className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                        style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                                    />
                                </div>
                            </a>
                        </div>
                        <div
                            className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
                            style={{ backgroundPosition: "50%" }}
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="dark"
                        >
                            <img
                                src="https://i1.sndcdn.com/artworks-000602698663-cjk78r-t500x500.jpg"
                                className="w-full transition duration-300 ease-linear align-middle"
                            />
                            <a href="#!">
                                <div
                                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                                >
                                    <div className="flex justify-start items-end h-full">
                                        <h5 className="text-lg font-bold text-white m-6">
                                            Boneless Chicken
                                        </h5>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div
                                        className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                        style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                                    />
                                </div>
                            </a>
                        </div>



                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
            {/* Container for demo purpose */}
        </>
    )
}
