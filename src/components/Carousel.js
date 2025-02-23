import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../css/embla.css";

function EmblaCarousel({ list = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla">
      <div class="embla_viewport" ref={emblaRef}>
        <div className="embla__container">
          {list.map((f, index) => (
            <div key={index} className="embla__slide">
              {f}
            </div>
          ))}
          {/* <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div> */}
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
}
export default EmblaCarousel;
