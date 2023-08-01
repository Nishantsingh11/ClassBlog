import articles from "./ArticalConent.js";
import Articale from "./Articale.jsx";

const ArticalLIst = () => {
  console.log(articles);
  return (
    <>
      <h1 className="font-bold mt-6  text-2xl text-gray-800">Articals</h1>
      <div>
        <Articale articles = {articles} />
      </div>
    </>
  )
}

export default ArticalLIst