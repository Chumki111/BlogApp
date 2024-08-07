import { useQuery } from "@tanstack/react-query";
import { allPosts } from "../api/posts";

const MyBlog = () => {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => allPosts(),
  });

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold mt-20">My Blog</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {posts?.map((post) => (
            <div
              key={post._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4">By {post.author}</p>
                <p className="text-gray-700 mb-4">
                  {post?.content?.length > 100
                    ? post?.content?.substring(0, 100) + "..."
                    : post.content}
                </p>
                <button className="text-blue-500 hover:text-blue-700 font-semibold">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
