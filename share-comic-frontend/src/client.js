import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export const useUser = () => {
  const createUser = async (userDoc) => {
    try {
      return await client.createIfNotExists(userDoc);
    } catch (error) {
      throw new Error("errorCreatingUser", error);
    }
  };
  const getUser = async (userId) => {
    try {
      const user = await client.fetch(
        `*[_type == "user" && _id =='${userId}']`
      );
      return user;
    } catch (error) {
      console.error("gettingUserError", error);
    }
  };
  return { createUser, getUser };
};
