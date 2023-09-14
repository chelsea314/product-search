import './globals.css';
import { Inter } from "next/font/google";

// Setting font Inter to be default font for page
const inter = Inter({ 
  subsets: ['latin'],
})

export const metadata = {
  title: 'Shop til You Drop',
  description: 'Search for products and recieve back information about selected product.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
