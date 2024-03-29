import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return (
    // prettier-ignore
    Promise.all([uploadPhoto(), createUser()])
      .then((values) => {
        // console.log(values);
        const pic = values[0].body;
        const first = values[1].firstName;
        const last = values[1].lastName;
        console.log(`${pic} ${first} ${last}`);
      })
      .catch(() => console.log('Signup system offline'))
  );
}
