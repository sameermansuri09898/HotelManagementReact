import { Camera } from "lucide-react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Aboutus from "./components/aboutus";
import Hero from "./components/herosection";
import Rooms from "./components/romm";

export default function App() {
  return (
    <>
    <Navbar/>
    <Hero></Hero>
    <Rooms></Rooms>
    <Aboutus></Aboutus>

      <Footer />
    </>
  );
}