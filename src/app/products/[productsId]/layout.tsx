export default function productDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Featured Products and this layout only for products</h2>
    </>
  );
}
