export const metadata = {
  title: "Roadmap | Product Feedback App",
  description: "Product Feedback App Roadmap Page",
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
