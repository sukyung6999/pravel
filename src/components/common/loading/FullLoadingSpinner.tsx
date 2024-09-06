import styles from './loading-spinner.module.css';

const FullLoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.85)] z-20 flex items-center justify-center">
      <span className={styles.loader}></span>
    </div>
  );
};

export default FullLoadingSpinner;
