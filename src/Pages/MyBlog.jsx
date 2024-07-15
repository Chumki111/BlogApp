import { useQuery } from "@tanstack/react-query"
import { allPosts } from "../api/posts"


const MyBlog = () => {
    const {data:posts} = useQuery({
        queryKey:['posts'],
        queryFn:async () => allPosts()
    })
  return (
    <div>
         <h2 className="text-center text-3xl font-semibold mt-20">Add Your Blog</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts?.map(post => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MyBlog