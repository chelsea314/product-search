import styles from '../page.module.css'

export default function ProductCategory({value}) {
    return (
        <h1 className={styles.productCategory}>{value.category}</h1>
    )
}