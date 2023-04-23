import React from "react";

function Blog() {
  return (
    <>
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Admin/</span> blog
      </h4>

      {/* <!-- Basic Layout & Basic with Icons --> */}
      <div className="row">
        {/* <!-- Basic with Icons --> */}
        <div className="col-xxl">
          <div className="card mb-4">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h5 className="mb-0"></h5>
              <small className="text-muted float-end"> </small>
            </div>
            <div className="card-body">
              <form>
                <div className=" mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    htmlFor="basic-icon-default-fullname"
                  >
                    Title
                  </label>

                  <div className="input-group">
                    <div className="input-group input-group-merge">
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        id="basic-icon-default-fullname"
                        placeholder="blog title"
                        aria-label="blog title"
                        aria-describedby="basic-icon-default-fullname2"
                      />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-4">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    content
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={23}
                    placeholder="blog content here...."
                  ></textarea>
                </div>
                <div className="row justify-content-end">
                  <div className="col-sm-3">
                    <button type="submit" className="btn px-5 btn-primary">
                      Post
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
