import logo from './logo.svg';
import './App.css';

function App() {
  const books= [
    {title: <a href="https://www.goodreads.com/book/show/26032825-the-cruel-prince" target="_blank" rel="noopener noreferrer">The Cruel Prince</a>,author: "Holly Black"},
    {title: <a href="https://www.goodreads.com/book/show/128029.A_Thousand_Splendid_Suns?ref=nav_sb_ss_1_20" target="_blank" rel="noopener noreferrer">A Thousand Splendid Suns</a>, author: "Khaled Houssini"},
    {title: <a href="https://www.goodreads.com/book/show/28187.The_Lightning_Thief?from_search=true&from_srp=true&qid=mUu6KmK979&rank=1" target="_blank" rel="noopener noreferrer">The Lightning Thief</a>, author: "Rick Riordan"},
    {title: <a href="https://www.goodreads.com/book/show/1885.Pride_and_Prejudice?ref=nav_sb_ss_1_9" target="_blank" rel="noopener noreferrer">Pride and Prejudice</a>, author: "Jane Austen" },
    {title: <a href="https://www.goodreads.com/book/show/4671.The_Great_Gatsby?ref=nav_sb_ss_1_12" target="_blank" rel="noopener noreferrer">The Great Gatsby</a>, author: "F. Scott Fitzgerald" }
  ];

  const tvShows = [
    {title: "Breaking Bad"},
    {title: "Love Next Door"},
    {title: "The Office"},
    {title: "Peaky Blinders"},
    {title: "The Vampire Diaries"}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <section className="book-recommendations">
        <h2>My Favorite Book Recommendations</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      </section>

      <section className="tv-show-recommendations">
        <h2>My Favorite TV Show Recommendations</h2>
        <ul>
          {tvShows.map((show, index) => (
            <li key={index}>
              <strong>{show.title}</strong> {show.creator}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
