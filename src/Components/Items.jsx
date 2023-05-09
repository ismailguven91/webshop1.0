// Items.jsx
import Item from './Item';

const Items = ({ items, onAdd }) => {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default Items;
