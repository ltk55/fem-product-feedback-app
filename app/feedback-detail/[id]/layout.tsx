export const metadata = {
  title: "Feedback Detail | Product Feedback App",
  description: "Product Feedback App Feedback Detail Page",
};

export default function NewFeedbackLayout({
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
