// /components/blogs/BlogPost.js

const BlogPost = ({ blog }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default BlogPost;
