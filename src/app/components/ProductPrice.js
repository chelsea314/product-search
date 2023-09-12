import styles from '../page.module.css'

export default function ProductPrice({value}) {
    return (
        <div className={styles.productPrice}>${value.price}.00</div>
    )
}