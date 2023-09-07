export default function Option({ product }) {

  function handleSelection(e) {
    fetch('https://dummyjson.com/products/'+ e.target.value)
      .then(res => res.json())
      .then(console.log);
  }

  return (
    <option value={product.id} key={product.id} onClick={handleSelection}>
      {product.title}
    </option>
  );
}
