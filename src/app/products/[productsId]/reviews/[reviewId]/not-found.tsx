"use client";

import { usePathname } from "next/navigation";

export default function Notfoundreview() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      <h1>the review is not found for {productId}</h1>
      <h1>
        the review limit is passed this limit is 1000 but you write {reviewId}{" "}
        reviews{" "}
      </h1>
    </div>
  );
}
