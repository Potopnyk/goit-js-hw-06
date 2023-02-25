const navLinkEl = document.querySelectorAll('.item');
console.log('Number of categories:', navLinkEl.length);

navLinkEl.forEach(el => {
    const titleEl = el.firstElementChild;
    const innerLiEl = el.lastElementChild.children;
    console.log('Category:', titleEl.textContent);
    console.log('Elements:', innerLiEl.length);
});






