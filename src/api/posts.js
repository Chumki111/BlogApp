import axiosSecure from ".";

export const addPosts = async (posts) => {
    const { data } = await axiosSecure.post(`/api/posts`, posts);
    return data;
};
export const allPosts =async()=>{
    const {data} = await axiosSecure(`/api/posts`) ;
    return data;
}