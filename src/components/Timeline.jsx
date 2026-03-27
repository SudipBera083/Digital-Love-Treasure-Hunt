// src/pages/Timeline.jsx
import PageWrapper from "../components/PageWrapper";
import TimelineCard from "../components/TimelineCard";

const data = [
  {
    id: 1,
    title: "2019 – The Beginning",
    caption: "Where everything started 💖",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
  },
  // add more...
];

export default function Timeline() {
  return (
    <PageWrapper>
      <div className="p-6 md:p-16">
        <h1 className="text-4xl font-display mb-10">Our Journey</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((item) => (
            <TimelineCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}