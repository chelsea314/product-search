export default function Option({ product }) {
  return (
    <>
      <option
        value={product.id}
        key={product.id}
      >
        {product.title}
      </option>
    </>
  );
}
