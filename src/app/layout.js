import './styles/globals.scss'

export const metadata = {
  title: 'MusicRank',
  description: 'Rank your favorite music.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
