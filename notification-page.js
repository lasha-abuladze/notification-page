`use strict`;


const markAsRead = document.querySelector(`.mark-all`);



const notifications = Array.from(document.getElementsByClassName(`notification`));
const unreadNotificationSign = Array.from(document.getElementsByClassName(`unread__notification__sign`))
const UnreadNorificationsNumber = document.querySelector(`.header__unread-sms-number`);





let unreadNotifications = [];
let unreadNotificationsFiltered =[];



markAsRead.addEventListener(`click`, () => {
    notifications.forEach((e,i) => {
        if(e.classList.contains(`unread`)) {
            e.classList.remove(`unread`)
        }
    })

    unreadNotificationSign.forEach(el => {
        el.classList.add(`display-none`)
    })
    
    UnreadNorificationsNumber.textContent = `0`
});



notifications.forEach( (el, i) => {

    el.addEventListener(`click`, () => {

        unreadNotifications = [];
        unreadNotificationsFiltered = []

        el.classList.toggle(`unread`)

        unreadNotificationSign[i].classList.toggle(`display-none`)



        unreadNotifications = notifications.map(mov => mov.classList.contains(`unread`))
        unreadNotificationsFiltered = unreadNotifications.filter(mov => mov === true)

        UnreadNorificationsNumber.textContent = `${unreadNotificationsFiltered.length}`
    })

    // unreadNotifications = notifications.map(mov => mov.classList.contains(`unread`))



})
