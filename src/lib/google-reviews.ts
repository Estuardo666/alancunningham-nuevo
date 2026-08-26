export interface GoogleReview {
  authorName: string;
  authorPhotoUrl?: string;
  rating: number;
  text: string;
  relativeTime: string;
}

export interface GoogleReviewsPayload {
  placeName: string;
  profileUrl: string;
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
}
