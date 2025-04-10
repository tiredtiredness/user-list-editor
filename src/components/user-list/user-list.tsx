import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/stores';
import { USER_COUNT } from '@/constants';
import { appendUsers, setIsLoading } from '@/stores/usersSlice';
import { fetchUsers } from '@/api';
import { setSelectUser } from '@/stores/editorSlice';
import { UserItem, Loader } from '@/components';

import styles from './user-list.module.css';

const itemHeight = 35; // высота элемента списка
const overscan = 20; // кол-во элементов за границами списка
const numberOfItems = USER_COUNT; // кол-во элементов списка

export const UserList = () => {
  const users = useAppSelector(state => state.users.users);
  const isLoading = useAppSelector(state => state.users.isLoading);
  const dispatch = useAppDispatch();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight - 12); // subtract padding bottom
  const hasLoadedRef = useRef(false); // для устранения загрузки второй раз при стрикт моде
  const [hasFirstBatch, setHasFirstBatch] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight - 12);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (hasLoadedRef.current) return;
    hasLoadedRef.current = true;

    dispatch(setIsLoading(true));

    const loadUsers = async () => {
      await fetchUsers(
        batch => dispatch(appendUsers(batch)),
        () => {
          setHasFirstBatch(true); // Устанавливаем флаг после первого батча
          dispatch(setIsLoading(false));
        }
      );
    };

    loadUsers();
  }, [dispatch]);

  const showLoader = isLoading && !hasFirstBatch;

  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  let renderedNodesCount = Math.floor(windowHeight / itemHeight) + 2 * overscan;
  renderedNodesCount = Math.min(numberOfItems - startIndex, renderedNodesCount);

  const generateItems = () => {
    const items: React.JSX.Element[] = [];
    for (let i = startIndex; i < startIndex + renderedNodesCount; i++) {
      const user = users[i];
      if (!user) continue;
      items.push(
        <li
          style={{
            height: `${itemHeight}px`,
            width: '100%',
          }}
          key={user.id}
          onClick={() => dispatch(setSelectUser(user))}
        >
          <UserItem name={user.name} />
        </li>
      );
    }
    return items;
  };

  return (
    <div className={styles.wrapper}>
      {showLoader ? (
        <Loader />
      ) : (
        <ul
          className={styles.list}
          style={{ height: `${windowHeight}px` }}
          onScroll={e => {
            setScrollTop(e.currentTarget.scrollTop);
          }}
        >
          <div style={{ height: `${numberOfItems * itemHeight}px` }}>
            <div
              style={{ transform: `translateY(${startIndex * itemHeight}px)` }}
            >
              {generateItems()}
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};
