import styles from "../page.module.css";

export default function Option({
  product,
  selectedProduct,
  setSelectedProduct,
}) {
  

  return (
    <>
      <option
        className={styles.brightFont}
        value={product.title}
        key={product.id}
      >
        {product.title}
      </option>
    </>
  );
}
