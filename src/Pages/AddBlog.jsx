import toast from 'react-hot-toast';

import { addPosts } from '../api/posts';

const AddBlog = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const author = form.author.value;
        const image = form.image.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;

        const posts = {
            title,
            author,
            image,
            category,
            shortDescription,
            longDescription
        };

        try {
            await addPosts(posts);
            toast.success('Your Blog Added Successfully');
            form.reset();
        } catch (err) {
            console.error('Error adding blog:', err);
            toast.error('Failed to Add Blog');
        }
    };

    return (
        <div>
            <h2 className="text-center text-3xl font-semibold mt-20">Add Your Blog</h2>
            <form className="mt-8 w-full md:w-3/4 lg:w-1/2 mx-auto bg-white shadow-md rounded-lg p-8 mb-10" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row md:space-x-5">
                    <div className="mb-6 flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
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
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="image">Image URL</label>
                    <input type="url" id="image" name="image" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="category">Category</label>
                    <select id="category" name="category" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500">
                        <option value="technology">Technology</option>
                        <option value="health">Health</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="shortDescription">Short Description</label>
                    <textarea
                        id="shortDescription"
                        name="shortDescription"
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                        rows="3"
                    ></textarea>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="longDescription">Long Description</label>
                    <textarea
                        id="longDescription"
                        name="longDescription"
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
    );
};

export default AddBlog;