import styles from "../styling/framecard.module.css"

function FrameCard({ src, caption }) {

    return (
        <div className={styles.card}>
            <img className={styles.image} src={src} loading="lazy"/>
            <hr />
            <p className={styles.caption}>{caption}</p>
        </div>
    )
}

export default FrameCard;