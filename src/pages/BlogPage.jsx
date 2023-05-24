import Nav from "../components/Nav";

export default function BlogPage(blog) {
    console.log(blog.blog.title);
  return (
    <>
      <Nav />
      <section id="blogPage">
        <div className="container">
          <div className="section_intro">
            <div className="section_title font02 color02">
              {blog.blog.title}
            </div>
          </div>
          <figure style={{ width: "50%", margin: "0 auto" }}>
            <img src={blog.blog.img} alt="" style={{ width: "100%" }} />
          </figure>
          <div>{blog.blog.article}</div>
        </div>
      </section>
    </>
  );
}
