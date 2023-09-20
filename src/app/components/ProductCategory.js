import styles from '../page.module.css'

export default function ProductCategory({value}) {
    return (
        <>
            <div className={styles.categoryContainer}>
                <div className={styles.productCategory}>{value.category}</div>
            </div>
        </>
    )
}