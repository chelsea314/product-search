import Image from 'next/image'

export default function ProductThumbnail({value}) {
    console.log(value)
    return (
        <Image
            src={value.thumbnail}
            alt={value.title}
            width={286}
            height={151}
            flex-shrink={0}
        />
    )
}
