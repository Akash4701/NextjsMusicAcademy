import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Connect from "./Connect.png"; // Adjust the path as necessary

const ConnectImage = () => (
  <div
    style={{
      backgroundImage: `url(${Connect})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1, // Ensure the background is behind the content
      borderRadius: "12px",
    }}
  />
);

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    backgroundImage: <ConnectImage />,
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    backgroundImage: <ConnectImage />,
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    backgroundImage: <ConnectImage />, // Use appropriate component
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    backgroundImage: <ConnectImage />, // Use appropriate component
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    backgroundImage: <ConnectImage />, // Use appropriate component
  },
];

function TestimonialCards() {
  return (
    <div>
      <h1>Hear our harmony: The voices of success</h1>
      <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
    </div>
  );
}

export default TestimonialCards;
