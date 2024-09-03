import ProfileImage from '@/components/common/Profile';
import { useEffect, useState } from 'react';

interface User {
  image: string | null;
  nickname: string;
}

interface Review {
  user: User;
  id: number;
  content: string;
}

interface ReviewResponse {
  list: Review[];
}

interface ReviewsPageProps {
  teamId: string;
  productId: string;
}

const ReviewsPage: React.FC<ReviewsPageProps> = ({ teamId, productId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://mogazoa-api.vercel.app/${teamId}/products/${productId}/reviews`
        );
        const data: ReviewResponse = await response.json();
        setReviews(data.list);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };

    fetchReviews();
  }, [teamId, productId]);

  return (
    <div className="container mx-auto grid grid-cols-2 gap-4 p-4">
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className="flex items-center gap-4">
            <ProfileImage
              image={review.user.image}
              nickname={review.user.nickname}
            />
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default ReviewsPage;
