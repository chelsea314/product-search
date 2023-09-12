import styles from '../page.module.css'

export default function ProductDescription({value}) {
    return (
        <div className={styles.productDescription}>{value.description}</div>
    )
}