import styles from '../page.module.css'

export default function ProductBrand({value}) {
    return (
        <div className={styles.productBrand}>{value.brand}</div>
    )
}