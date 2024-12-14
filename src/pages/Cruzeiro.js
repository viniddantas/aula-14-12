import styles from './Cruzeiro.module.css'


function Cruzeiro() {

    return (
        <>
            <div className={styles.reserva}>
                <label>Café da manhâ</label>
                <select>
                    <option value="">--Selecione um horário--</option>
                    <option value="1">Horário 1</option>
                    <option value="2">Horário 2</option>
                    <option value="3">Horário 3</option>
                </select>
                <label>Almoço</label>
                <select>
                    <option value="">--Selecione um horário--</option>
                    <option value="1">Horário 1</option>
                    <option value="2">Horário 2</option>
                    <option value="3">Horário 3</option>
                </select>
                <label>Janta</label>
                <select>
                    <option value="">--Selecione um horário--</option>
                    <option value="1">Horário 1</option>
                    <option value="2">Horário 2</option>
                    <option value="3">Horário 3</option>
                </select>
                <label>Entretenimento</label>
                <select>
                    <option value="">--Selecione um horário--</option>
                    <option value="1">Horário 1</option>
                    <option value="2">Horário 2</option>
                    <option value="3">Horário 3</option>
                </select>
                <label>Piscina</label>
                <select>
                    <option value="">--Selecione um horário--</option>
                    <option value="1">Horário 1</option>
                    <option value="2">Horário 2</option>
                    <option value="3">Horário 3</option>
                </select>
                <label>Academia</label>
                <select>
                    <option value="">--Selecione um horário--</option>
                    <option value="1">Horário 1</option>
                    <option value="2">Horário 2</option>
                    <option value="3">Horário 3</option>
                </select>


            </div>
            <ul className={styles.reservasConfirmadas}>
                <li className={styles.reservaItem}>
                    <h2>Café da manhâ</h2>
                    <p className={styles.horario}>Horário 1</p>
                    <p className={styles.horario}>Horário 2</p>
                    <p className={styles.horario}>Horário 3</p>
                </li>
                <li className={styles.reservaItem}>
                    <h2>Almoço</h2>
                    <p className={styles.horario}>Horário 1</p>
                    <p className={styles.horario}>Horário 2</p>
                    <p className={styles.horario}>Horário 3</p>
                </li>
                <li className={styles.reservaItem}>
                    <h2>Janta</h2>
                    <p className={styles.horario}>Horário 1</p>
                    <p className={styles.horario}>Horário 2</p>
                    <p className={styles.horario}>Horário 3</p>
                </li>
                <li className={styles.reservaItem}>
                    <h2>Entretenimento</h2>
                    <p className={styles.horario}>Horário 1</p>
                    <p className={styles.horario}>Horário 2</p>
                    <p className={styles.horario}>Horário 3</p>
                </li>
                <li className={styles.reservaItem}>
                    <h2>Almoço</h2>
                    <p className={styles.horario}>Horário 1</p>
                    <p className={styles.horario}>Horário 2</p>
                    <p className={styles.horario}>Horário 3</p>
                </li>
            </ul>
        </>
    )
}

export default Cruzeiro