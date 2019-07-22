document.querySelectorAll('.suggest').forEach(node => {
    const input = node.querySelector('.suggest__input');
    const list = node.querySelector('.suggest__list');

    list.addEventListener('click', onListClick);
    input.addEventListener('focus', onInputFocus);
    input.addEventListener('keyup', onInputChange);

    function onInputChange({target: {value}}) {
        if (value) {
            setListVisible(list);
        } else {
            setListInvisible(list);
        }
    }

    function onInputFocus() {
        setListVisible(list);
    }

    function onListClick({target}) {
        input.value = target.innerHTML;
        setListInvisible(list);
    }
});

function setListVisible(list) {
    list.classList.add('suggest__list_visible');
}

function setListInvisible(list) {
    list.classList.remove('suggest__list_visible');
}