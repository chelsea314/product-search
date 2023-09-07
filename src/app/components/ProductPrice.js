import styles from '../page.module.css'

export default function ProductPrice({value}) {
    console.log(value);
    return (
        <h1 className={styles.productPrice}>${value.price}.00</h1>
    )
}