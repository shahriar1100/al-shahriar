import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (
    <div className="bg-[#050414] min-h-screen w-full overflow-x-hidden relative text-white selection:bg-purple-500 selection:text-white">
      {/* Ambient background glowing blur blobs */}
      <BlurBlob position={{ top: '25%', left: '20%' }} size={{ width: '400px', height: '400px' }} />
      <BlurBlob position={{ top: '65%', left: '80%' }} size={{ width: '350px', height: '350px' }} />

      {/* Subtle tech grid background */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:16px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full pt-16 sm:pt-20">
        <Navbar />
        <main className="w-full">
          <About />
          <Skills />
          <Experience />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
