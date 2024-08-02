import image from "../assets/image.png";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px", overflow: "hidden" }}>
      <img
        src={src?src:image}
        className="card-img-top"
        style={{
          height: "200px",
          width: "100%",

        }}
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">
          {title.length > 50 ? `${title.slice(0, 50)}...` : title}
        </h5>
        <p className="card-text">
          {description
            ? (description.length > 90 ? `${description.slice(0, 90)}...` : description)
            : "It is information about something that has just happened."
          }
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
