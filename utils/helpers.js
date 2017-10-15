export const cleanTitleString = title => {
  let titleCleaned = '';
  if(title.length > 0){
    const splitTitle = title.split(' ');
    for(const titleText of splitTitle){
      titleCleaned = titleCleaned +
        titleText.substring(0,1).toUpperCase() +
        titleText.substring(1);
    }
  }
  return titleCleaned;
}

export const isEmpty = obj => {
  //Verifies if object is null
  if (obj === null) return true;
  //Verifies if object contain any keys inside.
  for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
  }

  return true;
}
