import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Main = styled.main`
  padding: 1em;
  background-color: var(--primary-background-color);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: red;
    transition: all 500ms ease-in-out;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1>Ich bin die Index.js</h1>
        <StyledLink href="/">Ich bin ein StyledLink...</StyledLink>
      </Main>
    </>
  );
}
