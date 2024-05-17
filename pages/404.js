import Layout from "../components/layout";
import Link from "next/link";

const custom404 = () => (
  <Layout>
    <div className="text-center">
      <h1>404</h1>
      <p>
        Esta pagina no existe. Por favor, retorna a <Link href="/">Home</Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
