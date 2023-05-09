import Button from '@mui/material/Button';

const Item = ({ item, onAdd }) => {
    return (
      <>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <Button
        variant='outlined' 
        onClick={() => onAdd(item)}>
          Add to cart
          </Button>
      </>
    );
  };
  
  export default Item;
  