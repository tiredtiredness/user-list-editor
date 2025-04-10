import { UserEditor, UserList } from '@/components';

import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <UserList />
      <UserEditor />
    </div>
  );
};

export default App;
