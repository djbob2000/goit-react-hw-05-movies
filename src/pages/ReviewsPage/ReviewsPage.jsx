import { useFetchReviews } from '../../hooks/UseFetchReviews';

const ReviewsPage = () => {
  const reviews = useFetchReviews();

  return (
    <ul>
      {reviews?.length === 0 && <p>Movie has no review information</p>}

      {reviews?.map(({ id, author, content }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsPage;
