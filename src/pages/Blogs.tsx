import img5 from "../assets/img/elements/5.jpg";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import { deleteBlog, getBlogs } from "../api";
import { useInView } from "react-intersection-observer";
import { BASE_URL } from "../utils/constants";
interface Blog {
  id: string;
  img: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
function Blogs() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [deleteModalId, setDeleteModalId] = useState<string>();
  const { data, fetchNextPage, isLoading, isError, error } = useInfiniteQuery(
    ["blogs"],
    ({ pageParam = 1 }) => {
      return getBlogs(pageParam);
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length) {
          return pages.length + 1;
        }
      },
    }
  );
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  return (
    <>
      <DeleteConfirmationModal id={deleteModalId} />
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Admin /</span> Blogs
      </h4>
      <ul className="nav nav-pills flex-column flex-md-row mb-3">
        <li className="nav-item">
          <Link to="/blog" className="nav-link active">
            <i className="bx bx-plus me-1"></i> Post
          </Link>
        </li>
      </ul>
      <div className="row mb-5">
        {data?.pages.map((blogs: Blog[]) => {
          return blogs.map((blog: Blog) => {
            return (
              <BlogCard
                key={blog.id}
                blog={blog}
                setDeleteModalId={setDeleteModalId}
              />
            );
          });
        })}
      </div>
      <div ref={ref}></div>
    </>
  );
}
function BlogCard({
  blog,
  setDeleteModalId,
}: {
  blog: Blog;
  setDeleteModalId: Dispatch<SetStateAction<string | undefined>>;
}) {
  return (
    <div className="col-md-6 col-lg-4 mt-4">
      <div className="card">
        <img
          className="card-img-top"
          style={{ height: "329px" }}
          src={BASE_URL + blog.img}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          {/* TODO fix the number of words limit and elipses */}
          <p className="card-text">{blog.content}</p>
        </div>
        <div className="card-body">
          <Link to={`/blog/${blog.id}`} className="card-link">
            Edit
          </Link>
          <button
            type="button"
            className="card-link text-danger"
            data-bs-toggle="modal"
            onClick={() => setDeleteModalId(blog.id)}
            style={{ backgroundColor: "transparent", border: "none" }}
            data-bs-target="#modalToggle"
            // className=" "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
function DeleteConfirmationModal({ id }: { id: string | undefined }) {
  const mutation = useMutation("delete-blog", () => deleteBlog(id as string));
  const queryClient = useQueryClient();
  if (mutation.isSuccess) {
    (async () => {
      await queryClient.refetchQueries("blogs");
    })();
  }
  // console.log(id);
  return (
    <div
      className="modal fade"
      id="modalToggle"
      aria-labelledby="modalToggleLabel"
      tabIndex={-1}
      style={{ display: "none" }}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h4>Are sure you want to delete this blog?</h4>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => mutation.mutate()}
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blogs;
