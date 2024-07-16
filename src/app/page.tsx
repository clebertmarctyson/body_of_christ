import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { time } from "console";

const subjects = [
  {
    title: "Guide By The Holy Spirit",
    description:
      "Learn how to be guided by the Holy Spirit. The Holy Spirit is our helper, our comforter, and our guide.",
    image: "/images/subject_1.jpg",
  },
  {
    title: "The Power of Prayer",
    description:
      "Prayer is the key to unlock the supernatural power of God. Learn how to pray effectively and see the power of God manifest in your life.",
    image: "/images/subject_2.jpg",
  },
  {
    title: "The Power of the Blood",
    description:
      "The blood of Jesus is the most powerful substance in the universe. Learn how to apply the blood of Jesus to your life and see the miraculous power of God at work.",
    image: "/images/subject_3.jpg",
  },
];

const events = [
  {
    title: "Night Prayer Meeting",
    description: "Join us for a night of prayer and worship.",
    date: "Tuesday, 20th July 2021",
    time: "8:00 PM",
    location: "219-16 Linden Blvd, Cambria Heights, NY 11411",
  },
  {
    title: "Sunday Service",
    description: "Join us for a powerful Sunday service.",
    date: "Sunday, 25th July 2021",
    time: "10:00 AM",
    location: "219-16 Linden Blvd, Cambria Heights, NY 11411",
  },
  {
    title: "Bible Study",
    description: "Join us for a powerful Bible study.",
    date: "Wednesday, 28th July 2021",
    time: "7:00 PM",
    location: "Online",
  },
];

const Home = () => {
  return (
    <section>
      {/* Hero */}
      <div className="w-full h-96 flex flex-col justify-center bg-black">
        <h2 className="text-center">
          <span className="text-2xl text-white font-bold">
            Experience God's
          </span>
          <br />
          <span className="text-5xl text-white font-bold">
            Presence & Power
          </span>
        </h2>
      </div>

      {/* Banner */}
      <div className="container flex flex-wrap items-center justify-between py-4 px-8 gap-4 bg-gray-200">
        <div className="flex flex-col text-center sm:text-left">
          <h2 className="uppercase text-sm">Upcoming Event</h2>
          <p className="text-lg font-bold">
            "The Law Demands, But Grace Supplies." - 1 John 1:9
          </p>
        </div>
        <Button className="w-full sm:w-auto">
          <Link href="/">Envent Details</Link>
        </Button>
      </div>

      {/* Subjects */}
      <div className="flex flex-wrap items-center justify-center py-16 px-8 gap-8 bg-white">
        {subjects.map((subject, index) => (
          <div key={index} className="w-full sm:w-72 flex flex-col">
            <div className="w-full h-48 rounded-md">
              <Image
                src={subject.image}
                alt={subject.title}
                width={300}
                height={200}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4 flex flex-col gap-2 text-justify">
              <h3 className="text-lg font-bold">
                {subject.title.length > 20
                  ? subject.title.substring(0, 20) + "..."
                  : subject.title}
              </h3>
              <p>
                {subject.description.length > 100
                  ? subject.description.substring(0, 100) + "..."
                  : subject.description}
              </p>
              <Button
                className="w-full border border-black"
                variant={"outline"}
              >
                <Link href="/">Learn More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Events */}
      <div className="flex flex-col gap-4 bg-gray-200 p-8">
        <h2 className="text-center text-2xl font-bold mb-4">
          Events & Programs
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {events.map((event, index) => (
            <div className="w-56 flex flex-col text-center gap-1" key={index}>
              <h2 className="uppercase text-xs font-bold">{event.date}</h2>
              <p className="font-bold">{event.title}</p>
              <p>{event.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
