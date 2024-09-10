import Layout from "../components/layout";
import { posts } from "../data/profileData";

const Post = ({ post }) => {
  if (!post) {
    return <div>Post no encontrado</div>;
  }

  return (
    <Layout title={post.title} footer={false}>
      <div className="text-center">
        <img
          src={post.imageURL}
          alt=""
          style={{ width: "50%" }}
          className="img-fluid"
        />
        <p className="p-4">{post.content}</p>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { title: post.title },
  }));

  return {
    paths,
    fallback: false, // Si todas las rutas posibles están generadas estáticamente
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.title === params.title);

  return {
    props: {
      post: post || null,
    },
  };
}

export default Post;
