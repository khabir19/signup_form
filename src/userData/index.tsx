const userData = async (creds: {
  username: string;
  password: string;
}): Promise<void> => {

  const storedUser = JSON.parse(localStorage.getItem("newUser") || "{}");
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((creds.username === storedUser.email || storedUser.cpf || storedUser.pis ) && creds.password === storedUser.password) 
      {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};

export default userData;