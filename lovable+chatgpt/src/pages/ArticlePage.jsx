// src/pages/ArticlePage.jsx
import { useParams } from "react-router-dom";

export default function ArticlePage() {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Title and Meta */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold mb-3">Article {id} Title Goes Here</h1>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <span>By Author Name</span>
          <span>August 19, 2025</span>
          <span>5 min read</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full h-80 bg-gray-300 rounded-lg mb-8 flex items-center justify-center">
        <span className="text-gray-600">Main Image Placeholder</span>
      </div>

      {/* Article Body */}
      <article className="prose max-w-none mb-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          condimentum, orci nec sollicitudin gravida, nunc nisl tincidunt mi,
          eget egestas sem justo sed lorem.
        </p>
        <p>
          Aenean finibus orci a orci tincidunt, sed feugiat sem fermentum.
          Maecenas lacinia, erat non bibendum congue, ex nulla pulvinar erat,
          vitae posuere purus erat nec libero.
        </p>
        <p>
          Duis at orci et augue vulputate tincidunt. Suspendisse potenti.
          Pellentesque euismod metus sed facilisis faucibus.
        </p>
      </article>

      {/* Two side-by-side images */}
      <div className="grid grid-cols-2 gap-6 mb-10">
        <div className="h-56 bg-gray-300 rounded flex items-center justify-center">
          <span className="text-gray-600">Image Placeholder</span>
        </div>
        <div className="h-56 bg-gray-300 rounded flex items-center justify-center">
          <span className="text-gray-600">Image Placeholder</span>
        </div>
      </div>

      {/* Comments Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">User1:</span> Great article, very
              insightful!
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">User2:</span> Looking forward to
              more on this topic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
