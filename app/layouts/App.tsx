import Head from "next/head";

import Script from "next/script";

const Layout = ({ children }: any) => {
    return (
        <>
            <Head>
                {/* <meta property="og:title" content={page_title} />
                {children.props.meta && (
                    <>
                        {children.props.meta.description && <meta property="og:description" content={children.props.meta.description} />}

                        {meta_image && (
                            <>
                                <meta property="og:image" content={meta_image} />
                                <meta name="twitter:card" content="summary_large_image" />
                            </>
                        )}

                        <meta property="og:type" content={children.props.meta.type} />
                        <meta property="og:url" content={children.props.meta.url} />
                    </>
                )}

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#660099" />
                <meta name="msapplication-TileColor" content="#660099" />
                <meta name="theme-color" content="#660099" />

                <title>{page_title}</title> */}
            </Head>

            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
                <>
                    {/* Google Analytics */}
                    <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} strategy="afterInteractive" />

                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){window.dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                        `}
                    </Script>
                </>
            )}

            <main className="main" role="main">
                {children}
            </main>
        </>
    );
};

export default Layout;
