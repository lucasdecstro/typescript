type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Lucas', password: '12345' };
const sentUser = { username: 'Lucas', password: '12345' };

const loggedIN = verifyUser(bdUser, sentUser);
console.log(loggedIN);
