import Header from "components/common/Header";
import Footer from "components/common/Footer";
import CodeBlock from "components/common/CodeBlock";
import { loaders } from "components/loader";
import "styles/components/common/container.scss";
import { styleModel } from "models/styleModel";

const LoaderPage = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        {loaders.map((loader: styleModel, index: number) => (
          <CodeBlock style={loader} key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
};
export default LoaderPage;
