export const redirect = (target: string) => {
  console.log("target", target);
};

export const updateName = async (newName: string) => {
  console.log("newName");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newName);
    }, 2000);
  });
};
