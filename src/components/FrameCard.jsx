import styles from "../styling/framecard.module.css"

function FrameCard({ src }) {

    return (
        <div className={styles.card}>
            <img className={styles.image} src={src} loading="lazy"/>
            <hr />
        </div>
    )
}

export default FrameCard;