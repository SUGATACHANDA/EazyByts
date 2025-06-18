import dev_image from "../../public/dev_image.png"
const Hero = () => {
    return (
        <section id="home" className="px-8 py-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Sugata is a <span className="text-purple-400">web designer</span> and{' '}
                        <span className="text-purple-400">front-end developer</span>
                    </h1>

                    <p className="text-gray-300 text-lg">
                        He crafts responsive websites where technologies meet creativity
                    </p>

                    <button className="border border-purple-400 text-purple-400 px-6 py-3 hover:bg-purple-400 hover:text-white transition-colors">
                        <a href="/contacts">Contact me!!!</a>
                    </button>
                </div>

                <div className="relative">
                    <div className="relative pb-12">
                        <img
                            src={dev_image}
                            alt="Sugata - Web Designer and Front-end Developer"
                            className="w-full max-w-md mx-auto"
                        />

                        <div className="absolute left-1/2 transform -translate-x-1/2 top-full -mt-6 bg-gray-800 border border-gray-600 px-4 py-2 flex items-center space-x-2">
                            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                            <span className="text-sm">Open for new <span className="font-semibold">oppurtunities</span></span>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-gray-600"></div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-gray-600"></div>
                    <div className="absolute top-1/2 -right-8 w-8 h-8 border-2 border-gray-600"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;