import styles from './Button.module.css';

function Button(props) {
  const { onCLick, children, disabled = false } = props;
  return (
    <button
      {...props}
      className={styles.button}
      onClick={onCLick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
