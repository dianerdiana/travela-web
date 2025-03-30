"use server";

import { faker } from "@faker-js/faker";

export async function getPaginationCategories(): Promise<any> {
  return {
    error: false,
    message: "success",
    data: Array.from({ length: 10 }, () => ({
      id: faker.number.int(),
      name: faker.commerce.department(),
      iconUrl: faker.image.urlLoremFlickr({ category: "business" }), // Simulasi icon
      slug: faker.lorem.slug(),
      status: faker.helpers.arrayElement(["active", "inactive"]),
    })),
  };
}
