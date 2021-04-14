import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Book from '../components/Book';
import books from '../data/books';
import { saveAuthToken } from '../utils/local-storage';

export default function DashboardPage() {
  const [acessToken, setAccessToken] = useState();
  const { getAccessTokenSilently } = useAuth0();
  const { getAllBooks } = useBooksApi();
  const [books, setBooks] = useState();

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const retrievedAccessToken = await getAccessTokenSilently({
          audience: 'https://booklist/api',
          scope: 'read:current_user',
        });
        setAccessToken(retrievedAccessToken);
        saveAuthToken(acessToken);
      } catch (e) {
        console.log(e.message);
      }
    };
    const getAllBooksEffect = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getAccessToken();
  }, [acessToken]);

  return (
    <section className="bg-gray-100 p-10">
      <div>
        <h2 className="text-gray-900 text-3xl font-bold">Books</h2>
      </div>

      <div className="grid gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-6">
        {books.map((book, i) => (
          <Book book={book} key={`book${i}`} />
        ))}
      </div>
    </section>
  );
}
