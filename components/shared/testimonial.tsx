import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Company A',
    text: 'This is an amazing product! It has completely transformed our workflow.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO, Company B',
    text: 'The support team is fantastic. They are always ready to help!',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Product Manager, Company C',
    text: 'Highly recommend this service. It’s been a game-changer for us.',
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
                <p className="text-lg text-gray-300">{testimonial.role}</p>
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