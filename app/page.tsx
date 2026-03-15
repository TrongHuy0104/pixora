import Hero from "@/modules/hero";
import Features from "@/modules/features";
import Pricing from "@/modules/pricing";
import Editor from "@/modules/editor";
import Footer from "@/components/footer";

export default function Home() {
  return <div>
    <Hero />
    <Features />
    <Pricing />
    <Editor />
    <Footer />
  </div>;
}