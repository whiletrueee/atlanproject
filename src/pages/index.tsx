import Head from "next/head";
import * as React from "react";
import AuthLogin from "@/components/auth/Auth.Login";
import DummySidePanel from "@/components/dummySidePanel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Data Grid Dashboard</title>
        <meta name="description" content="Dashboard for Analyst" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex dashboard">
        <DummySidePanel />
        <AuthLogin />
      </div>
    </>
  );
}
