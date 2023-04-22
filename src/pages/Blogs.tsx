import { Link } from "react-router-dom";
import img1 from "../assets/img/elements/1.jpg";
import img11 from "../assets/img/elements/11.jpg";
import img12 from "../assets/img/elements/12.jpg";
import img13 from "../assets/img/elements/13.jpg";
import img17 from "../assets/img/elements/17.jpg";
import img18 from "../assets/img/elements/18.jpg";
import img19 from "../assets/img/elements/19.jpg";
import img2 from "../assets/img/elements/2.jpg";
import img20 from "../assets/img/elements/20.jpg";
import img4 from "../assets/img/elements/4.jpg";
import img5 from "../assets/img/elements/5.jpg";
import img7 from "../assets/img/elements/7.jpg";
function Blogs() {
  return (
    <>
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Admin /</span> Blogs
      </h4>
      <div className="row mb-5">
        {[
          img1,
          img11,
          img12,
          img12,
          img17,
          img13,
          img18,
          img19,
          img2,
          img20,
          img4,
          img5,
          img7,
        ].map((imgPath, i) => {
          return <BlogCard key={i} imgPath={imgPath} />;
        })}
      </div>
    </>
  );
}
function BlogCard({ imgPath }: { imgPath: string }) {
  return (
    <div className="col-md-6 col-lg-4 mt-4">
      <div className="card">
        <img className="card-img-top" src={imgPath} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <Link to="" className="card-link">
            Edit
          </Link>
          <Link to="" className="card-link text-danger">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Blogs;
