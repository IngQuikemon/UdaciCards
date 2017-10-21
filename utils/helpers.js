import {AsyncStorage} from 'react-native';
import {Notifications, Permissions} from 'expo';

const NOTIFICATION_KEY = 'UdaciCards:notifications';

export const cleanTitleString = title => {
  return "".concat(...title.split(' '));
}

export const upperTitleText = title => {
  return title.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

export const formattedDate = date => {
  const dateToFormat = new Date(date);
  return `${dateToFormat.getMonth()}/${dateToFormat.getDate()}/${dateToFormat.getFullYear()} ${`0${dateToFormat.getHours()}`.slice(-2)}:${`0${dateToFormat.getMinutes()}`.slice(-2)}`;
}

export const isEmpty = obj => {

  if(isValueEmpty(obj)){
    return true;
  }

  for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
  }

  return true;
}

export const isValueEmpty = obj => {
  if (obj === null) return true;

  if (obj === undefined) return true;
}


export const findQuizDoneToday = deckDate => {
  const dateParsed = new Date(deckDate);
  const dateEvaluate = `${dateParsed.getMonth()}${dateParsed.getDate()}${dateParsed.getFullYear()}`;
  const currentDate = `${new Date().getMonth()}${new Date().getDate()}${new Date().getFullYear()}`;
  return (currentDate===dateEvaluate);
}



export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

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
    if(data=== null){
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
