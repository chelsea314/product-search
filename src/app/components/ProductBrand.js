import styles from '../page.module.css'

export default function ProductBrand({value}) {
    return (
        <p className={styles.productBrand}>{value.brand}</p>
    )
}