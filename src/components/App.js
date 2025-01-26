import React from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blogData"; 

function App() {
  const { name, image, about, posts } = blogData;

  return (
    <div className="App"> {/* Ensure this class is on the root div */}
      <header> {/* Ensure this element exists */}
        <h1>{name}</h1>
      </header>
      <aside>
        <About image={image} about={about} />
      </aside>
      <main>
        <ArticleList posts={posts} />
      </main>
    </div>
  );
}

export default App;

