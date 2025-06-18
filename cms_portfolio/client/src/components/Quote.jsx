const Quote = () => {
    return (
        <section className="px-8 py-16 max-w-4xl mx-auto">
            <div className="relative">
                <div className="border border-gray-600 p-8 relative">
                    <div className="absolute -top-3 left-4 bg-gray-900 px-2">
                        <span className="text-2xl text-gray-400">"</span>
                    </div>

                    <p className="text-xl text-center mb-4">
                        We're all stories, in the end.
                    </p>

                    <div className="absolute -bottom-3 right-4 bg-gray-900 px-2">
                        <span className="text-2xl text-gray-400">"</span>
                    </div>
                </div>

                <div className="text-right mt-4">
                    <span className="text-gray-400">- Steven Moffat</span>
                </div>
            </div>
        </section>
    );
};

export default Quote;