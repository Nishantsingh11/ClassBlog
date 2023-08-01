{/* <>
{articles.map((article) => (
  <div className="p-4 md:w-1/2 ">
    <div className="h-full border-2 border-gray-200 rounded-lg">
      <Link to={`articaldetatil/${article.name}`}>
        <img
          src={article.thumbnail}
          alt="Thumbnail"
          className="object-cover object-center"
        />
      </Link>
    </div>
    <div className="p-6">
      <Link to={`articaldetatil/${article.name}`}>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          {article.title}
        </h1>
      </Link>
      <p className="leading-relaxed mb-3">
        {article.content[0].substring(0, 150)}...
      </p>
      <div className="flex items-center flex-wrap ">
        <Link
          to={`articaldetatil/${article.name}`}
          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
))}
</> */}