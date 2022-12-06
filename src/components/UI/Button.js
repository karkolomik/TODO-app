import styles from './Button.module.css';

function Button({ onCLick, children, title, disabled = false }) {
  return (
    <button
      className={styles.button}
      onClick={onCLick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
