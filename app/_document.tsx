import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/_next/static/css/app-layout.css"
          as="style"
        />
        <link rel="stylesheet" href="/_next/static/css/app-layout.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
