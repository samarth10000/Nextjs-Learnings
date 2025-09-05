import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};
export default function Blog() {
  return (
    <div>
      <h1>blog is the parent route for First and Second route </h1>
    </div>
  );
}
