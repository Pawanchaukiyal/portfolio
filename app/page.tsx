import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden sm:px-10 p-4 mx-auto">
    <div className="max-w-7xl w-full">
    <FloatingNav 
    navItems={[
      {name: "Home", link: "/", icon: <FaHome/>}	
    ]}
    />
    <Hero/>
    <Grid/>
    </div>
   </main>
  );
}
