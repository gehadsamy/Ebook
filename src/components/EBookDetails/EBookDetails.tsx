import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { findOne } from "../../core/api.crud";

const EBookDetails = () => {
  const params = useParams();
  const id = params.id
  const [eBook, setEBook] = useState<Record<string, any>>([]);
  const getEBookDetails = async () => {
    const res = await findOne("products", id);
    console.log(res);
    setEBook(res.data);
  };

  useEffect(() => {
    getEBookDetails();
  }, []);
  return (
    <div>
      {eBook && (
        <div>
          <p>{eBook?.name}</p>
        </div>
      )}
    </div>
  );
};

export default EBookDetails;
