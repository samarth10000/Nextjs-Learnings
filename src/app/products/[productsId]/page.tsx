import { Metadata } from "next";

type Props = {
  params: { productsId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = params.productsId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${id}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  const { productsId } = params;
  return (
    <div>
      <h1>Details about product : {productsId}</h1>
    </div>
  );
}
