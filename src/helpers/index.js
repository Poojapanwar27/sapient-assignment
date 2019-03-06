export const hideItemStorage = 'articlesHideState',
            upvotesStorage = 'upVotes';

/**
 * * formatURL
 * return domain name from the URL
 * */
export const formatURL = (url) => {
    if (url) {
      let formattedURL = url.split('://')[1].split('/')[0];
  
      return formattedURL;
    }
}

/**
 * * setLocalStorage
 * set local storage value
 * */

export const setLocalStorage = (storagename, id, action) => {
    let items,
        itemAlreadyExist,
        articleId = parseInt(id);

    if (typeof localStorage !== 'undefined') {
        if (localStorage.getItem(storagename)) {
            items = JSON.parse(localStorage.getItem(storagename));
        } 
        if (items && items.length > 0) {
            itemAlreadyExist = items.some((el, idx) => {
                if (el === articleId) {
                    if (action === 'upvotes') {
                        items.splice(idx, 1);
                    }
                    return true;
                }
            });
        } else {
            items = [];
        }
        
        if (!itemAlreadyExist) {
            items.push(articleId);
        }
        localStorage.setItem(storagename, JSON.stringify(items));
    }
}