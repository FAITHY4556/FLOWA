const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const name = btn.getAttribute('data-name');
    window.location.href = name + '.html';
  });
});