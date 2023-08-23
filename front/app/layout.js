import TopNav from './_components/TopNav'
import Footer from './_components/Footer'

import './_css/TopNav.css'
import './globals.css'
import './_css/Footer.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Argent Bank - Home Page</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
