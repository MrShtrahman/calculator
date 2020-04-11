import { repoConfig } from "./LoginDetails";

type UserType = {
  username: string;
  password: string;
  id: number;
  name: string;
};

const getUsers = async () => {
  let users = [];
  const result = await fetch(
    `https://my-json-server.typicode.com/${repoConfig.user}/${repoConfig.repo}/db`
  );
  try {
    users = await result.json();
  } catch (err) {
    console.error("A problem ocurred while fetching users data: ", err);
  }
  return users.users;
};

export const isValidLoggedUser = async (username: string, password: string) => {
  let loggedUser: UserType | undefined;
  await getUsers()
    .then((users: Array<UserType>) => {
      loggedUser = users.find(
        (user: any) => user.username === username && user.password === password
      );
    })
    .catch((err) =>
      console.error("A problem ocurred while validating the logged user: ", err)
    );
  return loggedUser;
};
