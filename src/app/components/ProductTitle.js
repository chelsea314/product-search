import styles from '../page.module.css'

export default function ProductTitle({value}) {
    return (
        <p className={styles.productTitle}>{value.title}</p>
    )
}