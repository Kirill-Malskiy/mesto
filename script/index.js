const open = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const close = popup.querySelector('.popup__close');

function togglePopup() {
    popup.classList.toggle('popup_active');
}

open.addEventListener('click', togglePopup);
close.addEventListener('click', togglePopup);

let formElement = document.querySelector('.popup__content');
let popupFieldName = popup.querySelector('.popup__name');
let popupFieldJob = popup.querySelector('.popup__job');
let profileName = document.querySelector('.profile__name');
let profileJob= document.querySelector('.profile__job');

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupFieldName.value;
    profileJob.textContent = popupFieldJob.value;
    togglePopup()
}
  
formElement.addEventListener('submit', formSubmitHandler);


