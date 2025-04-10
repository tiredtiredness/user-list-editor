import styles from '../icon.module.css';

export const Loading = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={styles.spinner}
    >
      <path
        d='M12.0702 5.99995C10.8836 5.98607 9.71952 6.32436 8.72518 6.97206C7.73084 7.61976 6.95089 8.54777 6.48397 9.63874C6.01704 10.7297 5.88412 11.9346 6.10199 13.1011C6.31987 14.2677 6.87877 15.3434 7.70801 16.1922C8.53724 17.0411 9.59958 17.625 10.7607 17.8702C11.9218 18.1153 13.1295 18.0106 14.2311 17.5693C15.3327 17.128 16.2787 16.37 16.9495 15.3911C17.6203 14.4122 17.9857 13.2564 17.9996 12.0697'
        stroke='#000'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
