import styles from '../page.module.css'

export default function ProductPrice({value}) {
    return (
        <h1 className={styles.productPrice}>{value.price}</h1>
    )
}