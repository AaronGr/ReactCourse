import styles from './CheckoutForm.module.css';

const CheckoutForm = (props) => { 
    return (
        <form className={styles['checkout-form']}>
            <div className={styles.names}>
                <label htmlFor="first-name">First Name</label>
                <input id="first-name" type="text" />
                <label htmlFor="last-name">Last Name</label>
                <input id="last-name" type="text" />
            </div>
            <div className={styles.address} >
                <label htmlFor="address">Address</label>
                <input id="address" type="text" />
            </div>
        </form>
    )
};

export default CheckoutForm;