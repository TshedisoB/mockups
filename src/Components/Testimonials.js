import React from "react";
import { testimonials } from "../data/info";

function Testimonials() {
  return (
    <div className="Testimonials">
      <h3>Testimonials:</h3>
      <div className="Testimonials-container">
        {testimonials.value.map((testimonial) => {
          return (
            <div className="Testimonials-text" key={testimonial.id}>
              <p>
                "{testimonial.value}" - {testimonial.witness}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
