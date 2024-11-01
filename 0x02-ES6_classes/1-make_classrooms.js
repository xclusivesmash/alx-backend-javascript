import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const myClasses = [];
  myClasses.push(new ClassRoom(19));
  myClasses.push(new ClassRoom(20));
  myClasses.push(new ClassRoom(64));
  return myClasses;
}
