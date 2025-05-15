import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { InfiniteSlider } from './ui/infiniteSlider';
import { SparklesText } from './ui/sparkles-text';
import Image from 'next/image';

const logos = [
  {
    id: "logo-2",
    description: "Figma",
    image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-3",
    description: "Next.js",
    image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-6",
    description: "Supabase",
    image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-8",
    description: "Vercel",
    image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
    className: "h-7 w-auto",
  },
];

export function LogosSlider() {
  return (
    <div className='relative h-[100px] w-full overflow-hidden '>
    <SparklesText text="Trusted by developers worldwide" className='text-4xl text-center' />
      <InfiniteSlider 
        className='flex h-full w-full items-center justify-center' 
        duration={30}
        gap={48}
      >
        {logos.map((logo) => (
          <div 
            key={logo.id} 
            className='flex w-32 items-center justify-center'
          >
            <Image
              src={logo.image}
              alt={logo.description}
              className={logo.className}
              width={100}
              height={100}
            />
          </div>
        ))}
      </InfiniteSlider>
      <ProgressiveBlur
        className='pointer-events-none absolute top-0 left-0 h-full w-[200px]'
        direction='left'
        blurIntensity={1}
      />
      <ProgressiveBlur
        className='pointer-events-none absolute top-0 right-0 h-full w-[200px]'
        direction='right'
        blurIntensity={1}
      />
    </div>
  );
}