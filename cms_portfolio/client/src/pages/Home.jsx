import About from "../components/About";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Quote from "../components/Quote";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Sidebar />
            <div className="ml-16">
                <Header />
                <main>
                    <Hero />
                    <Quote />
                    <Projects />
                    <Skills />
                    <About />
                    <Contacts />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Home;