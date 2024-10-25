import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((output) => (
      output.map((item) => ({
        status: item.status,
        value: output.status === 'fulfilled' ? output.value : String(output.reason),
      }))
    ));
}
