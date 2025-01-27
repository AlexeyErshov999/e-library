import { TBook } from './types';
import './style.css';

export function BookCard({ id, title, subtitle, image, url }: TBook) {
	return (
		<div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg book-card">
			<div className="relative">
				<img className="w-full" src={image} alt="Book image" />
				<div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
					BOOK
				</div>
			</div>
			<div className="p-4">
				<h3 className="text-lg font-medium mb-2">{title}</h3>
				<p className="text-gray-600 text-sm mb-4">{subtitle}</p>
				<div className="flex items-center justify-between">
					<span className="font-bold text-lg">$19.99</span>
					<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
						<a href={url}>Download</a>
					</button>
				</div>
			</div>
		</div>
	);
}
