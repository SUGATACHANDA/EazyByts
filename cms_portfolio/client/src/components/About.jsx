import dev_image from "../../public/dev_image.png"
const About = () => {
    return (
        <section id="about-me" className="px-8 py-20 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">
                <span className="text-purple-400">#</span>about-me
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                        Hello, i'm Sugata!
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        I'm a self-taught front-end developer based in Kolkata, India. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                    </p>

                    <button className="border border-purple-400 text-purple-400 px-6 py-3 hover:bg-purple-400 hover:text-white transition-colors">
                        <a href="/about-me">
                            Read more {'->'}
                        </a>
                    </button>
                </div>

                <div className="relative">
                    <img
                        src={dev_image}
                        alt="Sugata working on computer"
                        className="w-full max-w-md mx-auto"
                    />

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 grid grid-cols-5 gap-1 opacity-50">
                        {[...Array(25)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-gray-600"></div>
                        ))}
                    </div>

                    <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-gray-600"></div>
                    <div className="absolute top-1/3 -right-8 w-12 h-12 border-2 border-gray-600"></div>
                </div>
            </div>
        </section>
    );
};

export default About;