import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, selectItem } from '../features/items/itemsSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.items.list);
  const status = useSelector((state) => state.items.status);
  const [search, setSearch] = useState('');
console.log(items,'items')
  useEffect(() => {
    if (status === 'idle') dispatch(fetchItems());
  }, [dispatch, status]);

  const handleSelect = (item) => {
    dispatch(selectItem(item));
    navigate(`/details/${item.id}`);
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <h2>Posts List</h2>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id} onClick={() => handleSelect(item)}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;