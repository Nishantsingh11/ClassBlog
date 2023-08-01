import React from "react";
import { useParams } from "react-router-dom";
import articles from "./ArticalConent.js";
import Articale from "./Articale.jsx";
// now we are making recomended artical section
const ArticalDeatiles = () => {
  const params = useParams();

  const articale = articles.find((articale) => articale.name === params.name);
  if (!articale) return <h1>Artical does not exist!</h1>;
  const otherArticales = articles.filter((articale) => articale.name !== params.name)
  return (
    <div className="container mx-auto mt-10">
      <h1 className="font-bold mb-4 text-2xl">
        Artical Deatiles of {articale.title}
      </h1>
      <img src={articale.thumbnail} alt="at" />
      <p>
        Artical Deatiles of {articale.content}
      </p>

      <h1 className="font-bold text-2xl mt-2">Reacomded ariticals</h1>
      <Articale articles={otherArticales} />
    </div>
  );
};

export default ArticalDeatiles;
