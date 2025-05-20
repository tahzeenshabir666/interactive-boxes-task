const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
  box.addEventListener('click', () => {
   
    boxes.forEach(b => {
      b.classList.remove('expanded');
      const opt = b.querySelector('.options');
      if (opt) opt.remove();
    });
    box.classList.add('expanded');

    const options = document.createElement('div');
    options.className = 'options';
    options.innerHTML = `
      <p><b>Select Color:</b></p>
      <button style="background:red; color:white;">Red</button>
      <button style="background:blue; color:white;">Blue</button>
      <button style="background:green; color:white;">Green</button>
      <p><b>Select Size:</b></p>
      <button>Small</button>
      <button>Medium</button>
      <button>Large</button>
    `;
    box.appendChild(options);
  });
});
