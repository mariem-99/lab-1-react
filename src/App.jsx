import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import StatusBadge from './components/StatusBadge'
import UserCard from './components/UserCard'
import Product from './components/Products'
import Card from './components/Card'
import BlogPost from './components/BlogPost'
import MovieList from './components/MovieList';
import ToggleButton from './components/ToggleButton'
function App() {
  const [count, setCount] = useState(0)
  const movies = [
    { id: 1, title: "The Matrix", director: "Wachowski", year: 1999, rating: 4 },
    { id: 2, title: "Inception", director: "Nolan", year: 2010, rating: 5 },
    { id: 3, title: "The Dark Knight", director: "Nolan", year: 2008, rating: 5 },
    { id: 4, title: "Interstellar", director: "Nolan", year: 2014, rating: 5 }
  ];
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Greeting />
      <StatusBadge/>
      <div className="main-container">
      <UserCard name="Alice" email="alice@example.com" role="Developer" />
      <UserCard name="Bob" email="bob@example.com" role="Designer" />
      <UserCard name="Charlie" email="charlie@example.com" role="Manager" /></div>
      <div className="App">
      <h1>My Tech Store</h1>
      <Product 
        title="Laptop" 
        price={999} 
        inStock={true} 
        rating={4.5} 
      />
      
      <Product 
        title="Phone" 
        price={499} 
        inStock={false} 
        rating={4} 
      />
      
      <Product 
        title="Headphones" 
        price={99} 
        inStock={true} 
        rating={5} 
      />
    </div>
    <div className="App">
      <Card title="User Info">
                <p>This is the content inside Card 1.</p>
            </Card>

            
            <Card title="Settings">
                <button onClick={() => alert('Saved!')}>Save Changes</button>
            </Card>

            
            <Card title="Featured Product">
                <ul>
                    <li>High Quality</li>
                    <li>Fast Shipping</li>
                    <li>Best Price</li>
                </ul>
            </Card>
    </div>
    <div>
      <BlogPost
      title="Learning React"
      content="This is the content of the first post..."
      date="Jan 15"
      authorName="Alice"
      authorEmail="alice@example.com"
      authorRole="Developer"
      />
      <BlogPost
        title="React Tips"
        content="This is the content of the second post..."
        date="Jan 20"
        authorName="Bob"
        authorEmail="bob@example.com"
        authorRole="Designer"  
      />

    </div>
    <div className="App">
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <h1>🎬 My Movie Collection</h1>
      </header>
      <MovieList movies={movies} />
    </div>
    <div className="toggle-section">
      <h1>3.3 State Preview</h1>
      <ToggleButton isVisible={true} />
      <ToggleButton isVisible={false} />
    </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
