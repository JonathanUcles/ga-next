# ga-next
google analytics library for nextjs

Usage 
.env.local
```
NEXT_PUBLIC_GA_ID = 'your UA or GA code'

```

nextjs project /pages/_document.tsx
``` 

import Document, { Html, Head, Main, NextScript } from "next/document";

import { GoogleAnalytics } from "ga-next";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          < GoogleAnalytics />
          <link rel="shortcut icon" href="/favicon.ico" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

```
