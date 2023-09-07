import styles from '../page.module.css'

export default function ProductCategory({value}) {
    return (
        <div className={styles.categoryContainer}>
            <h1 className={styles.productCategory}>{value.category}</h1>
        </div>
        
    )
}