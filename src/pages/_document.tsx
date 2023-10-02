import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Run SQL queries, view history, and interact with results in a responsive table."
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* External Stylesheets */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />

        {/* Custom Fonts (if used) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Open Graph and Twitter Card for Social Media */}
        <meta property="og:title" content="SQL Query Runner" />
        <meta
          property="og:description"
          content="Empowering users to run SQL queries and interact with results in a responsive table."
        />
        <meta
          property="og:image"
          content="https://your-website.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@singharshit07" />
        <meta name="twitter:title" content="SQL Query Runner" />
        <meta
          name="twitter:description"
          content="Empowering users to run SQL queries and interact with results in a responsive table."
        />
        <meta
          name="twitter:image"
          content="https://your-website.com/twitter-image.jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
