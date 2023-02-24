import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-02-22",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

const createUser = async (userDoc) => {
  try {
    const result = await client.createIfNotExists(userDoc);
    console.log("User created successfully", result);
  } catch (error) {
    console.log("errorCreatingUser", error);
  }
};

export {urlFor, createUser}