import styles from '../page.module.css'

export default function ProductDescription({value}) {
    return (
        <p className={styles.productDescription}>{value.description}</p>
    )
}