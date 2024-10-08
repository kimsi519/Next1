import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '정적인 메타데이터',
  description: '정적인 설명',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>Todo App</title>
      </head>
      <body>
        <header>
          <h1>My Todo App</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
