// pages/_document.js
import Document, { Head, Main, NextScript } from "next/document";

const pagesWithoutReact = ["/"];

export default class MyDocument extends Document {
  render() {
    const { __NEXT_DATA__ } = this.props;
    return (
      <html>
        <Head></Head>
        <body>
          <Main />
          {!pagesWithoutReact.includes(__NEXT_DATA__.page) ? (
            <NextScript />
          ) : null}
        </body>
      </html>
    );
  }
}
