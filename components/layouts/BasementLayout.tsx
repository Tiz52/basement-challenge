import Head from "next/head";
import {FC} from "react";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const BasementLayout: FC<Props> = ({children, title, pageDescription, imageFullUrl}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={pageDescription} name="description" />
        <meta content={title} name="og:title" />
        <meta content={pageDescription} name="og:description" />
        {imageFullUrl && <meta content={imageFullUrl} name="og:image" />}
      </Head>

      <main className="flex flex-col max-w-screen-lg min-h-screen m-auto">{children}</main>

      <footer />
    </>
  );
};
