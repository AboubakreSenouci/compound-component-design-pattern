import { PostCard } from "./components/card-post";

function App() {
  return (
    <div className="w-full h-full flex p-20">
      <PostCard
        post={{
          postTitle: "this is a Title",
          postContent: "This is the content of this post",
          postAuthor: "Aboubakre Senouci",
        }}
      >
        <PostCard.Title />
        <PostCard.Content />
        <PostCard.Author />
        <PostCard.Buttons />
      </PostCard>
    </div>
  );
}

export default App;
