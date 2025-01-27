import './styles/App.css';
import { BookCard } from './components/BookCard/BookCard';
import { TBook } from './components/BookCard/types';

const books: TBook[] = [
	{
		id: '1491912057',
		title: 'Python Data Science Handbook',
		subtitle: 'Essential Tools for Working with Data',
		authors: 'Jake VanderPlas',
		image: 'https://www.dbooks.org/img/books/1491912057s.jpg',
		url: 'https://www.dbooks.org/python-data-science-handbook-1491912057/',
	},
	{
		id: '1503212300',
		title: 'Invent Your Own Computer Games with Python',
		subtitle: "A beginner's guide to computer programming in Python",
		authors: 'Al Sweigart',
		image: 'https://www.dbooks.org/img/books/1503212300s.jpg',
		url: 'https://www.dbooks.org/invent-your-own-computer-games-with-python-1503212300/',
	},
];

function App() {
	return (
		<div className="app">
			{books.map((book) => (
				<BookCard
					key={book.id}
					id={book.id}
					title={book.title}
					subtitle={book.subtitle}
					authors={book.authors}
					image={book.image}
					url={book.url}
				/>
			))}
		</div>
	);
}

export default App;
