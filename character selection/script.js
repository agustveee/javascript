document.querySelectorAll('.armorpiece').forEach(item => {
    item.addEventListener('click', function () {
        const part = this.getAttribute('data-part');
        const selectedImage = this.getAttribute('src');

        document.getElementById(part).setAttribute('src', selectedImage);

        document
            .querySelectorAll(`.armorpiece[data-part="${part}"]`)
            .forEach(el => el.classList.remove('selected'));

        this.classList.add('selected');
    });
});
