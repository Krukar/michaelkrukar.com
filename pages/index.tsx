import Layout from "@Layouts/Index";

const Page = () => <Layout />;

export async function getStaticProps() {
    return {
        props: {},
        revalidate: 60,
    };
}

export default Page;
