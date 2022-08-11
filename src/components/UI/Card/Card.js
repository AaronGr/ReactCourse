import styles from './Card.module.css'

const Card = (props) => {
    const classes = 'card ' + props.className;

    return <div className={styles.card + ' ' + classes}>{props.children}</div>
}

export default Card;