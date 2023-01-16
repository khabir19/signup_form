const userData = async (creds: {
  username: string;
  password: string;
}): Promise<void> => {
  const storedUser = JSON.parse(localStorage.getItem("newUser") || "{}");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        creds.username === storedUser.email &&
        creds.password === storedUser.password
      ) {
        resolve(storedUser.fullname);

      }
      if (
        creds.username === storedUser.cpf &&
        creds.password === storedUser.password
      ) {
        resolve();
      }
      if (
        creds.username === storedUser.pis &&
        creds.password === storedUser.password
      ) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};

export default userData;
