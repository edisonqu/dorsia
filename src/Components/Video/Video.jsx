import React from "react";
import Edison from './EdisonBezos.gif'
import Modal, {Button} from "../Button/Button";

export const Video = () => (
    <>
        {/* Container for demo purpose */}
        <div className="container my-24 px-6 mx-auto">
            {/* Section: Design Block */}
            <section className="mb-32 text-gray-800 background-radial-gradient">
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n        .background-radial-gradient {\n          background-color: hsl(10, 44%, 3%);\n          background-image: radial-gradient(650px circle at 0% 0%,\n              hsl(10, 44%, 3%) 15%,\n              hsl(10, 44%, 3%) 35%,\n              hsl(10, 44%, 3%) 75%,\n              hsl(10, 44%, 3%) 80%,\n              transparent 100%),\n            radial-gradient(1250px circle at 100% 100%,\n              hsl(10, 44%, 3%) 15%,\n              hsl(10, 44%, 3%) 35%,\n              hsl(10, 44%, 3%) 75%,\n              hsl(33, 44%, 21%) 80%,\n              transparent 100%);\n        }\n      "
                    }}
                />
                <div className="px-6 py-12 md:px-12 text-center lg:text-left">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                            <div className="mt-12 lg:mt-0">
                                <h1
                                    className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                                    style={{ color: "hsl(218, 81%, 95%)" }}
                                >
                                    Are you ready <br />
                                    <span style={{ color: "hsl(188, 3%, 98%)" }}>
                    to reserve a table?
                  </span>
                                </h1>
                                <p className="text-lg" style={{ color: "hsl(218, 81%, 95%)" }}>
                                    We are always full. We seek priority guests through business cards and book them only. Please present your business card like shown in the video.

                                </p>
                                <br/>
                                <Modal/>

                            </div>
                            <div className="mb-12 lg:mb-0">
                                <div
                                    className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                                    style={{ paddingTop: "56.25%" }}
                                >

                                    {/*<iframe className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"*/}
                                    {/*                                                src="https://www.youtube.com/embed/Gd6B2StzNN0"*/}
                                    {/*        title="YouTube video player" frameBorder="0"*/}
                                    {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                                    {/*        allowFullScreen></iframe>*/}

                                    <img className="absolute top-0 right-0 bottom-0 left-0 w-full h-full" src={Edison}
                                            ></img>
                                </div>
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
