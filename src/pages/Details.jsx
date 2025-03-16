import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedItem = useSelector((state) => state.items.list.find(item => item.id === parseInt(id)));

  if (!selectedItem) return <p>Item not found</p>;

  return (
    <div className="details">
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{selectedItem.title}</h2>
      <p>{selectedItem.body}</p>
    </div>
  );
};

export default Details;