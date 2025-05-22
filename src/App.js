import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import Navbar from './components/Navbar';
import PostPage from './Pages/Postpage';
import PostDetailPage from './Pages/PostDetailpage';
import CreatePostPage from './Pages/CreatePostpage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground dark">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostPage />} />
            <Route path="/posts/:id" element={<PostDetailPage />} />
            <Route path="/create" element={<CreatePostPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
