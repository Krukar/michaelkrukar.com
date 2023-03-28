import Head from "next/head";

import Script from "next/script";

const Layout = ({ children }: any) => {
    return (
        <>
            <Head>
                <meta property="og:title" content="Krukar" />
                <meta property="og:description" content="Full Stack Consultant/New Media Artist" />
                <meta property="og:image" content="/meta.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://michaelkrukar.com" />

                <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ea002a" />
                <meta name="msapplication-TileColor" content="#ea002a" />
                <meta name="theme-color" content="#ea002a" />

                <title>Krukar</title>
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

                            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                                page_path: window.location.pathname,
                            });
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
