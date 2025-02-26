import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Updated testimonials array with data from the CSV
const testimonials = [
  {
    id: 1,
    name: 'Team Cybershadows',
    text: 'Great learning opportunity',
  },
  {
    id: 2,
    name: 'Team Enoxis',
    text: 'You people are doing great, so excited for THE VISHWACTF25',
  },
  {
    id: 3,
    name: 'Team Secure Mavericks',
    text: 'It was a very good experience to begin my ctf path with on the way to solve challenges learnt some new tools.',
  },
  {
    id: 4,
    name: 'Team MKBNJ',
    text: 'Had an amazing experience and got to learn a lot. Keep more coming!!',
  },
  {
    id: 5,
    name: 'Team Kakashi',
    text: 'It was very good experience, and I learned a lot from it.',
  },
  {
    id: 6,
    name: 'Umair Shaikh Shabiul Hasan',
    text: 'If anybody interested in this participate it is good to gain the knowledge of cyber security',
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSelect = (event: any) => {
    // Assuming the event contains the index or you can derive it
    // For example, if the event has a `selectedIndex` property
    setActiveIndex(event.selectedIndex);
  };

  return (
    <div className="bg-black text-white p-16 relative">
      {/* Carousel */}
      <Carousel
        onSelect={handleSelect}
        className="w-full max-w-6xl mx-auto relative z-20"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="text-center">
              <div className="border border-red-800 bg-red-600 bg-opacity-20 p-8 rounded-lg shadow-lg mx-4">
                <p className="text-2xl italic">"{testimonial.text}"</p>
                <p className="mt-6 text-3xl font-bold">{testimonial.name}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black bg-white hover:bg-gray-200" />
        <CarouselNext className="text-black bg-white hover:bg-gray-200" />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;