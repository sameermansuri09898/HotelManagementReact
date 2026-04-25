import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Top 10 Luxury Hotels You Must Experience",
    author: "Admin",
    date: "April 20, 2026",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    excerpt:
      "Discover the finest luxury hotels offering world-class amenities, comfort, and unforgettable experiences.",
  },
  {
    id: 2,
    title: "How Hotel Management Systems Improve Efficiency",
    author: "Admin",
    date: "April 18, 2026",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    excerpt:
      "Learn how modern hotel management systems streamline bookings, customer service, and operations.",
  },
  {
    id: 3,
    title: "Best Food Delivery Trends in 2026",
    author: "Admin",
    date: "April 16, 2026",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    excerpt:
      "Explore how food delivery services are evolving with faster delivery, cloud kitchens, and AI.",
  },
  {
    id: 4,
    title: "How to Choose the Perfect Hotel for Your Stay",
    author: "Admin",
    date: "April 14, 2026",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    excerpt:
      "A complete guide to selecting the right hotel based on budget, location, and amenities.",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Hotel & Food Insights
        </h1>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Stay updated with the latest trends in hotel management, travel,
          and food delivery services.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden grid md:grid-cols-2">
          <img
            src={posts[0].image}
            alt={posts[0].title}
            className="w-full h-64 md:h-full object-cover"
          />
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {posts[0].title}
              </h2>
              <div className="flex items-center text-gray-500 text-sm mb-4 gap-4">
                <span className="flex items-center gap-1">
                  <User size={16} /> {posts[0].author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} /> {posts[0].date}
                </span>
              </div>
              <p className="text-gray-600">{posts[0].excerpt}</p>
            </div>
            <button className="mt-6 flex items-center gap-2 text-blue-600 font-medium hover:underline">
              Read More <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(1).map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>

              <div className="flex items-center text-gray-500 text-sm mb-3 gap-4">
                <span className="flex items-center gap-1">
                  <User size={14} /> {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {post.date}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {post.excerpt}
              </p>

              <button className="flex items-center gap-2 text-blue-600 text-sm font-medium hover:underline">
                Read More <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}