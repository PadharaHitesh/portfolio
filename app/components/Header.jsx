import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
                name="description"
                content="Personal Portfolio"
            />
            <meta
                name="keywords"
                content="portfolio template, portfolio, personal template, responsive portfolio, personal, themeforest, html portfolio template, css3, html5"
            />
            <title>Hitesh Padhara | Full Stack Developer</title>
            <Link href="/images/logos/favicon.ico" rel="icon" ></Link>
            <Link rel="apple-touch-icon" href="/images/logos/touch-icon-iphone.png" ></Link>
            <Link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/images/logos/apple-touch-icon-152x152.png"
            ></Link>
            <Link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/images/logos/apple-touch-icon-180x180.png"
            ></Link>
            <Link
                rel="apple-touch-icon"
                sizes="167x167"
                href="/images/logos/apple-touch-icon-152x152.png"
            ></Link>
            <Link rel="preconnect" href="https://fonts.googleapis.com" ></Link>
            <Link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" ></Link>
            <Link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            ></Link>
            <Link
                href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            ></Link>
            <link href="css/plugins.css" rel="stylesheet" type="text/css" />
            <link href="css/styles.css" rel="stylesheet" type="text/css" />
    </>
  )
}

export default Header