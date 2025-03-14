import './ui/global.css';
import { bebas } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className= {`${bebas.className} antialiased`}>{children}
      <footer className='py-10 flex justify-center items-center'> Hecho con amor por mi</footer>
      </body>
    
    </html>
  );
}
