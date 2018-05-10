import faker from 'faker';

export const generateID = () => {
    return faker.random.uuid();
}

export const getLatency = () => {
    return Math.random() * 500 + 500;
}