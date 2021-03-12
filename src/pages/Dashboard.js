import React from "react";
import Books from "../data/books";
import Book from "../components/Book";

export default function DashboardPage() {
  return (
    <section className="bg-gray-100 p-10">
      <div>
        <h2 className="text-gray-900 text-3xl font-bold">Books</h2>
      </div>

      <div className="grid gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-6">
        {Books.map((book, i) => (
          <Book book={book} key={"book" + i} />
        ))}
      </div>
    </section>
  );
}
