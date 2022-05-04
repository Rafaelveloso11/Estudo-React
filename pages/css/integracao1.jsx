import styles from "./integracao1.module.css";

export default function integracao1(){
    return (
        <div>
            <div className={styles.vermelha}>texto1</div>
            <div className={styles.azul}>Texto2</div>
            <div className={styles.branco}>Texto2</div>
        </div>
    )
}