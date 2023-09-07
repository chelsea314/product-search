import styles from '../page.module.css'

export default function ProductTitle({value}) {
    return (
        <h1 className={styles.productTitle}>{value.title}</h1>
    )
}