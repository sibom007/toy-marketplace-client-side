import useTitle from "../../Hooks/useTitle";

const Blog = () => {
    useTitle("Blog")
    return (
        <div className="mt-5 text-3xl">

            <h1> 1 : A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources,You can store the access token and refresh token in the server-side session</h1>
            <h1 className="mt-5 mb-5">2 : SQL databases are vertically scalable, while NoSQL databases are horizontally scalable</h1>
            <h1 className="mt-5 mb-5">3 : NestJS is a framework for developing modern server-side applications in Node. js</h1>
            <h1 className="mt-5 mb-5">4 : Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.</h1>
            
        </div>
    );
};

export default Blog;