# Compound Component Pattern in React

This repository demonstrates the implementation of the Compound Component Pattern in React.js. The pattern is ideal for building flexible and reusable components by allowing child components to communicate with a parent component through context.

## Project Structure

```plaintext
src/
├── components/
│   ├── card-post.tsx  # The main component and its subcomponents
├── context/
│   ├── usePostCardContext.tsx  # Context for the PostCard component
├── hooks/
│   ├── usePostCardContext.tsx  # Custom hook to use the PostCard context
├── types/
│   ├── index.tsx  # Type definitions for the PostCard component
├── App.tsx  # Entry point of the React application
├── index.css  # Tailwind CSS customizations
```
## How It Works

### PostCard Component

The `PostCard` component is the main parent component. It uses the Compound Component Pattern to pass down context to its children (`PostCard.Title`, `PostCard.Content`, `PostCard.Author`, `PostCard.Buttons`).

```tsx
export const PostCard = ({ children, post }: postCardProps) => {
    return (
        <postCardContext.Provider value={{ post }}>
            <div className="flex flex-col gap-10 w-2/6 rounded-lg shadow-xl bg-gray-100 p-4">
                {children}
            </div>
        </postCardContext.Provider>
    );
};
```

### Child Components

Each child component (`PostCard.Title`, `PostCard.Content`, `PostCard.Author`, `PostCard.Buttons`) consumes the context provided by the `PostCard` component using a custom hook `usePostCardContext`.

For example, the `PostCard.Title` component:

```tsx
PostCard.Title = function PostCardTitle({ className }: { className?: string }) {
    const { post } = usePostCardContext();
    return (
        <p className={twMerge("font-semibold text-blue-950", className)}>
            {post.postTitle}
        </p>
    );
};
```

### Usage

To use the `PostCard` component, you can import it into your application and pass the necessary `post` object and its children:

```tsx
import { PostCard } from "./components/card-post";

function App() {
    return (
        <div className="w-full h-full flex p-20">
            <PostCard
                post={{
                    postTitle: "This is a Title",
                    postContent: "This is the content of this post",
                    postAuthor: "Author Name",
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
```

### Instalation
1. Clone the repository:
```bash
git clone https://github.com/AboubakreSenouci/compound-component-design-pattern.git
```
2. Navigate to the project directory:
```bash
cd compound-component-design-pattern
```
3. Install the dependencies:
```bash
npm install
```
4. Start the development server:
```bash
   npm run dev
   ```
   
