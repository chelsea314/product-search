import styles from '../page.module.css'

export default function ProductTitle({value}) {
    return (
        <div className={styles.productTitle}>{value.title}</div>
    )
}