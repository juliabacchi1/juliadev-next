"use client";

import Button from "./Button";
import { Card } from "./blog/Card";
import { Cards } from "./blog/data/DataCards";

export default function BlogSection() {
  return (
    <section id="blog" className="w-full min-h-screen text-gray-800 px-6">
      <div className="flex flex-col items-center px-2 sm:px-0">
        <h2 className="text-4xl md:text-6xl mb-8">Blog</h2>
        <div className="mt-16 flex md:justify-center">
          <Button
            variant="default"
            className="w-3/4 md:w-full md:max-w-[200px]"
            onClick={() => {
              const section = document.getElementById("hero");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            home
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {Cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              bgColor={card.bgColor}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
