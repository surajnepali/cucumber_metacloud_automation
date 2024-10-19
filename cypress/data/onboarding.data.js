import { faker } from "@faker-js/faker";

const generateRandomMobileNumber = () => {
  const randomDigits = faker.number.int({
    min: 10000000,
    max: 99999999,
  });
  // Create a phone number starting with '9'
  return `98${randomDigits}`;
};

const generateRandomLandlineNumber = () => {
  const randomDigits = faker.number.int({ min: 500000, max: 999999 });
  // Create a phone number starting with '061'
  return `061${randomDigits}`;
};

export const onboardingData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  companyName: faker.company.name(),
  companyMobileNumber: generateRandomMobileNumber(),
  companyLandlineNumber: generateRandomLandlineNumber(),
  companyRegistrationNumber: faker.number.int({
    min: 100000000,
    max: 999999999,
  }),
  city: faker.location.city(),
  address: faker.location.streetAddress(),
  companyURL: faker.internet.url(),
};
