export const metadata = {
  title: "Edit Feedback | Product Feedback App",
  description: "Product Feedback App Edit Feedback  Page",
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
