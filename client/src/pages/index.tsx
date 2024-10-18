import React from "react";
import Head from "next/head";
import clsx from "clsx";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Form } from "@/components/Form/";
import { PasswdVariants } from "@/components/PasswdVariants";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Password Generator</title>
        <meta name="description" content="Online Password Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={clsx(styles.page, geistSans.variable, geistMono.variable)}
      >
        <main className={styles.main}>
          <Form />
          <PasswdVariants />
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
