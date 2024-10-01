const categories = document.querySelectorAll(`#categories .item`);

console.log(`Кількість категрій: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector(`h2`).textContent;
    const itemCount = category.querySelectorAll(`ul > li`).length;

    console.log(`Категорія:$(title),  Кількість елементів: ${itemCount}`);
    
});