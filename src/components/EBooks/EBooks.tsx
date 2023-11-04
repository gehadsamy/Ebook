import React, { useEffect, useState } from "react";
import { findAll } from "../../core/api.crud";
import { useNavigate } from "react-router-dom";

const EBooks = () => {
  const [eBooks, setEBooks] = useState<Array<Record<string, any>>>([]);
  const navigate = useNavigate();

  const getEBooks = async () => {
    const res = await findAll(
      "products?filter[product_type]=digital&filter[sub_product_type]=book"
    );
    console.log(res.data);
    setEBooks(res?.data);
  };
  const handleViewClick = (id: string) => {
    navigate(`/book/${id}`);
  };
  useEffect(() => {
    getEBooks();
  }, []);
  return (
    <div className="p-4">
      <p className="my-8 text-3xl italic font-bold">E-books</p>
      <div className="flex flex-wrap gap-2">
        {eBooks?.map((book) => {
          return (
            <div
              key={book.id}
              className="w-1/2 p-2 my-4 text-white sm:w-1/3 md:w1/4"
            >
              <div className="w-full h-60">
                <img
                  className="object-contain w-full h-full"
                  src={book.attributes.image_url}
                  alt={book.attributes.name}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-bold">{book.attributes.name}</p>
                <p>
                  {book.attributes.currency +
                    " " +
                    book.attributes.compare_at_price}
                </p>
                <button
                  className="w-full font-bold bg-[#d35d31] text-black rounded-none"
                  onClick={() => handleViewClick(book.id)}
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EBooks;
