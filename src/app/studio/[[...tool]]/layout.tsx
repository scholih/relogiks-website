export const metadata = {
  title: 'Relogiks CMS',
  description: 'Content management for Relogiks',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
