export default function ProductReview({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = params;

  return (
    <h1>
      product id : {productId} , reviewId : {reviewId}
    </h1>
  );
}
