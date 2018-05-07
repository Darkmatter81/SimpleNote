import faker from 'faker';

export const generateID = () => {
    return faker.random.uuid();
}