import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Whitepaper from "./components/Whitepaper.jsx";
import Future from "./components/Future.jsx";
import Blog from "./components/Blog.jsx";

function App() {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <NavBar />
            <Hero />
            {/*<Whitepaper />*/}
            {/*<Future />*/}
            {/*<Blog />*/}
            <About />
            <Features />
            <Story />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;