import {AsyncStorage} from 'react-native';
import {Notifications, Permissions} from 'expo';

const NOTIFICATION_KEY = 'UdaciCards:notifications';

/*
* @description Removes spaces from the string.
* @param {string} title - The title of the deck.
*/
export const cleanTitleString = title => {
  return "".concat(...title.split(' '));
}

/*
* @description Makes the first letter of each word in the string uppercase.
* Code obtained from https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
* @param {string} title - The string to be upper cased on the first letter of each word.
*/
export const upperTitleText = title => {
  return title.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

/*
* @description Formats a date in the right string format 'MM/DD/YYYY HH:mm'.
* @param {long} date - The millisecond value of the date.
*/
export const formattedDate = date => {
  const dateToFormat = new Date(date);
  return `${dateToFormat.getMonth()}/${dateToFormat.getDate()}/${dateToFormat.getFullYear()} ${`0${dateToFormat.getHours()}`.slice(-2)}:${`0${dateToFormat.getMinutes()}`.slice(-2)}`;
}

/*
* @description Validates if an object is empty or contains something.
* @param {object} obj - Object to verify if it is null.
*/
export const isEmpty = obj => {

  if(isValueEmpty(obj)){
    return true;
  }

  for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
  }

  return true;
}

/*
* @description Validates if the value passed is null or undefined.
* @param {object} obj - The object to be validated.
*/
export const isValueEmpty = obj => {
  if (obj === null) return true;

  if (obj === undefined) return true;
}

/*
* @description Verifies if the date sent is before the current time.
* @param {long} deckDate - The date/time value of the last time the deck was completed.
*/
export const findQuizDoneToday = deckDate => {
  const dateParsed = new Date(deckDate);
  const dateEvaluate = `${dateParsed.getMonth()}${dateParsed.getDate()}${dateParsed.getFullYear()}`;
  const currentDate = `${new Date().getMonth()}${new Date().getDate()}${new Date().getFullYear()}`;
  return (currentDate===dateEvaluate);
}

/*
* @description Clears the local notifications for the app.
*/
export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

/*
* @description Sets the local notifications of the app.
* Notification logic based on Udacity UdaciFitness app logic.
*/
export function setLocalNotification(){

  const contentNotification = {
    title: 'Quiz time',
    body: 'Remember to do your Quizes today!',
    ios: {
      sound:true,
    },
    android:{
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate:true,
    }
  };

  AsyncStorage.getItem(NOTIFICATION_KEY)
  .then(JSON.parse)
  .then((data)=>{
    if(data === null){
      Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({status}) =>{
        Notifications.cancelAllScheduledNotificationsAsync();

        let newSchedule = new Date();
        newSchedule.setDate(newSchedule.getDate());
        newSchedule.setHours(20);
        newSchedule.setMinutes(0);
        if(newSchedule.getTime() > Date.now()){
          Notifications.scheduleLocalNotificationAsync(
            contentNotification,
            {
              time:newSchedule,
              repeat:'day',
            }
          );
          AsyncStorage.setItem(NOTIFICATION_KEY,JSON.stringify(true));
        }
      })
    }
  })
}
