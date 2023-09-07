import styles from '../page.module.css'

export default function ProductDescription({value}) {
    return (
        <h1 className={styles.productDescription}>{value.description}</h1>
    )
}