export const metadata = {
  title: "New Feedback | Product Feedback App",
  description: "Product Feedback App New Feedback Page",
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
