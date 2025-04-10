import { Icon } from '@/components';

import styles from './loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <Icon icon='loading' />
    </div>
  );
};
