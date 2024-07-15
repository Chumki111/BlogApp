import toast from "react-hot-toast";
import { addPosts } from "../api/posts";


const AddBlog = () => {
    const handleSubmit =async(e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const author = form.author.value;
        const content = form.content.value;
        console.log(title,author,content);
        const posts={
            title,author,content
        }
        try{
            await addPosts(posts)
            toast.success('Your Room Added Successfully');
            form.reset();
        }catch(err){
            console.log(err.message);
        }
    }  
   
  return (
    <div>
        <h2 className="text-center text-3xl font-semibold mt-20">Add Your Blog</h2>
        <form className="mt-8 w-full md:[70%] lg:w-1/2 mx-auto bg-white shadow-md rounded-lg p-8 mb-10" onSubmit={handleSubmit}>
       <div className="flex flex-col md:flex-row md:space-x-5">
       <div className="mb-6 flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="block w-full  border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-6 flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="author">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
       </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
            required
            rows="6"
          ></textarea>
        </div>
       
        <button
          type="submit"
          className="w-full bg-zinc-800 text-white py-2 px-4 rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddBlog