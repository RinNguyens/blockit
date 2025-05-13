import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Cover } from "../ui/cover";

export function AnimatedTestimonialsPeople() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Rin Nguyen",
      designation: "Frontend Developer",
      src: "/rin.png"
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "PHAM VAN LUC",
      designation: "Lead Software Engineer at VNG Corpe",
      src: "/luc.jpg"
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "TRAN DUY NHA",
      designation: "Frontend Dev at Nexon Dev Vina",
      src: "/nha.jpg"
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Manh Tai",
      designation: "UX/UI Designer",
      src: "/tai.jpg"
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
        <Cover>The Company Dream Team</Cover>
        </h4>
       
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
