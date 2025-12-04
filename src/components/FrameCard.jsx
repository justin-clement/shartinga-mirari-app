import styles from "../styling/framecard.module.css"

function FrameCard({ src, caption }) {

    return (
        <article className={styles.card} role="group" aria-label={caption || 'Frame card'}>
            <img className={styles.image} src={src} loading="lazy" alt={caption || ''} />
            {caption && <h3 className={styles.caption}>{caption}</h3>}
        </article>
    )
}

export default FrameCard;