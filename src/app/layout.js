import './globals.css';
import { Inter } from "next/font/google";

// Setting font Inter to be default font for page
const inter = Inter({ 
  subsets: ['latin'],
})

export const metadata = {
  title: 'Product Search',
  description: 'Search for an array of different products from different categories. Recieve information regarding selected product.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
