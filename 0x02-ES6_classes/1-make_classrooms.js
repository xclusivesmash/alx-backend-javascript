import ClassRoom from './0-classroom';

/* initializes instances of a class */
export default function initializeRooms() {
  return [19, 20, 34].map((number) => new ClassRoom(number));
}
