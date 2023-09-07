import styles from '../page.module.css'

export default function ProductBrand({value}) {
    return (
        <h2 className={styles.productBrand}>{value.brand}</h2>
    )
}