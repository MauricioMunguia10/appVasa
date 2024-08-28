import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <React.Fragment>
      <Head>
        <title>About | MMG</title>
      </Head>
      <div>
        <Link href="/home">Go to Home page</Link>
      </div>
    </React.Fragment>
  );
}
