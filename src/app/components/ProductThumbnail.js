import Image from 'next/image'
import styles from '../page.module.css'

export default function ProductThumbnail({value}) {
    return (
        <Image
            src={value.thumbnail}
            alt={value.title}
            width={286}
            height={151}
            flex-shrink={0}
            className={styles.productThumbnail}
        />
    )
}
