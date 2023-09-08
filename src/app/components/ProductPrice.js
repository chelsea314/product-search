import styles from '../page.module.css'

export default function ProductPrice({value}) {
    return (
        <p className={styles.productPrice}>${value.price}.00</p>
    )
}