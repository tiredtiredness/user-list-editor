import { Icon } from '@/components';

import styles from './user-item.module.css';

export const UserItem = ({ name }: { name: string }) => {
  return (
    <button className={styles.wrapper}>
      <div className={styles.icon}>
        <Icon icon='user' />
      </div>

      <p className={styles.name}>{name}</p>
    </button>
  );
};
