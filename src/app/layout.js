import './globals.css';
import { Inter } from '@next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '700'] 
})

export const metadata = {
  title: 'Shop til You Drop',
  description: 'Front End Take Home Assessment by Chelsea',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body
      className={inter.className}>{children}</body>
    </html>
  )
}
