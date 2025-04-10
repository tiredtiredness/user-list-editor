import { User } from '@/types';
import { BATCH_SIZE, USER_COUNT } from '@/constants';
import { generateUsers } from '@/utils';

export const fetchUsers = async (
  onBatch: (batch: User[]) => void,
  onFirstBatch?: () => void
): Promise<void> => {
  let generated = 0;
  let isFirst = true;

  const generateBatch = () => {
    const remain = USER_COUNT - generated;
    const count = Math.min(BATCH_SIZE, remain);
    const batch = generateUsers(count);
    onBatch(batch);
    generated += count;

    if (isFirst && onFirstBatch) {
      isFirst = false;
      onFirstBatch();
    }

    if (generated >= USER_COUNT) {
      return;
    }

    setTimeout(generateBatch, 0);
  };

  setTimeout(generateBatch, 0);
};
