// Change text content and style
document.getElementById('change-text-btn').addEventListener('click', () => {
    const para = document.getElementById('dynamic-paragraph');
    para.textContent = "The text has been changed dynamically!";
    para.style.color = 'crimson';
    para.style.fontWeight = 'bold';
  });
  
  // Add new element
  document.getElementById('add-element-btn').addEventListener('click', () => {
    const container = document.getElementById('container');
    if (!document.getElementById('new-element')) {
      const newElement = document.createElement('p');
      newElement.id = 'new-element';
      newElement.textContent = 'A new element was added!';
      container.appendChild(newElement);
    }
  });
  
  // Remove existing element
  document.getElementById('remove-element-btn').addEventListener('click', () => {
    const existing = document.getElementById('new-element');
    if (existing) {
      existing.remove();
    }
  });
  