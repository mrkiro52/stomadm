export default function ReviewCard({ review }) {
  const data = review || {
    name: "Иван Иванов",
    photo: "/src/components/ReviewCard/images/review1.jpg",
    text: "Очень доволен! Всё быстро и профессионально.",
    rating: 5.0,
    url: "#",
  };

  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className="review-card"
    >
      <div className="review-card-inner">
        <div className="review-header">
          <img src={data.photo} alt={data.name} className="review-photo" />
          <div className="review-info">
            <p className="review-name">{data.name}</p>
            <div className="review-rating">
              <img src="/components/images/star.png" alt="star" />
              <span>{data.rating}</span>
            </div>
          </div>
        </div>
        <p className="review-text">{data.text}</p>
      </div>
    </a>
  );
}
