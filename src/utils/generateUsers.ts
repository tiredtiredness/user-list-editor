import { User } from '@/types';
import { faker } from '@faker-js/faker/locale/ru';

const generateUser = (): User => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  age: faker.number.int({ min: 18, max: 70 }),
  email: faker.internet.email(),
  department: faker.person.jobArea(),
  company: faker.company.name(),
  jobTitle: faker.person.jobTitle(),
});

export const generateUsers = (count: number): User[] => {
  if (count < 1) return [];
  const users: User[] = [];
  for (let i = 0; i < count; i++) {
    users.push(generateUser());
  }

  return users;
};
