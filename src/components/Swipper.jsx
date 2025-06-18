import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Mr. Robey Alexa",
    role: "CEO, Apexa Agency",
    rating: 4,
    message: "Morem Ipsum Dolor Sit Amet, Consectetur Adipisc Awing Elita Florai Sum Dolor Sit Amet, Consectetur Area Borem Ipsum Dolor Sit Amet, Consectetur.",
    image: "./insta1.jpg",
  },
  {
    name: "Ms. Rachel Greene",
    role: "Marketing Head, CreativeX",
    rating: 5,
    message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    image: "./insta2.jpg",
  },
  {
    name: "John Doe",
    role: "CTO, Technova",
    rating: 3,
    message: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    image: "./insta3.jpg",
  },
  {
    name: "Lara Smith",
    role: "HR, Softwave",
    rating: 5,
    message: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    image: "./insta4.jpg",
  },
];

export default function Swipper() {
  const [selected, setSelected] = useState(0);
  const active = testimonials[selected];

  return (
    <div className="bg-[#fffaf2]   px-4 md:px-10 text-[#10127b] grid grid-cols-2 items-center mx-auto">
        <div data-aos='fade-right' className="flex justify-center">
            <img src="./Swipper.png" alt="" />
        </div>
      <div  className="max-w-3xl">
        <h3 className="text-xl font-bold">{active.name}</h3>
        <p className="text-sm text-gray-500">{active.role}</p>

        <div className="flex  mt-2 mb-4">
          {[...Array(5)].map((_, i) =>
            i < active.rating ? (
              <FaStar key={i} className="text-yellow-500 mx-0.5" />
            ) : (
              <FaRegStar key={i} className="text-yellow-500 mx-0.5" />
            )
          )}
        </div>

        <p className="italic text-gray-700 max-w-md text-md  mb-6">
          “ {active.message} ”
        </p>

        <div className="flex gap-4 mt-6">
          {testimonials.map((t, i) => (
            <img
              key={i}
              src={t.image}
              alt={t.name}
              onClick={() => setSelected(i)}
              className={`w-14 h-14 rounded-full object-cover border-2 cursor-pointer transition ${
                selected === i ? "border-yellow-500 scale-110" : "border-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
