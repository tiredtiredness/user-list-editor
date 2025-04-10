import { Input } from '@/components';
import { useAppDispatch, useAppSelector } from '@/stores';
import { updateUser as updateInUsers } from '@/stores/usersSlice';
import { setSelectUser as updateInEditor } from '@/stores/editorSlice';

import styles from './user-editor.module.css';

export const UserEditor = () => {
  const selectedUser = useAppSelector(state => state.editor.selectedUser);
  const dispatch = useAppDispatch();

  return selectedUser ? (
    <form className={styles.wrapper} onSubmit={e => e.preventDefault()}>
      <div className={styles.header}>
        <Input
          value={selectedUser.name}
          variant='big'
          setValue={name => dispatch(updateInEditor({ ...selectedUser, name }))}
        />
      </div>

      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src='default-profile-image.webp'
          alt='Default profile user image'
        />
      </div>

      <div className={styles.inputWrapper}>
        <Input
          value={selectedUser.email}
          label={'Должность'}
          setValue={email =>
            dispatch(updateInEditor({ ...selectedUser, email }))
          }
        />
        <Input
          value={selectedUser.jobTitle}
          label={'Должность'}
          setValue={jobTitle =>
            dispatch(updateInEditor({ ...selectedUser, jobTitle }))
          }
        />
        <Input
          value={selectedUser.department}
          label={'Отдел'}
          setValue={department =>
            dispatch(updateInEditor({ ...selectedUser, department }))
          }
        />
        <Input
          value={selectedUser.company}
          label={'Компания'}
          setValue={company =>
            dispatch(updateInEditor({ ...selectedUser, company }))
          }
        />
      </div>
      <button
        className={styles.button}
        onClick={() => dispatch(updateInUsers(selectedUser))}
      >
        Сохранить
      </button>
    </form>
  ) : null;
};
