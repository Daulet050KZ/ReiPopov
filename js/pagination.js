const itemsPerPage = 9;
let currentPage = 1;

function displayItems(container, itemsPerPage, page) {
	const items = container.querySelectorAll('.item');
	const totalItems = items.length;
	const pageCount = Math.ceil(totalItems / itemsPerPage);
	page = page < 1 ? 1 : page > pageCount ? pageCount : page;

	const start = (page - 1) * itemsPerPage;
	const end = start + itemsPerPage;

	items.forEach((item, index) => {
		item.style.display = index >= start && index < end ? 'block' : 'none';
	});

	setupPagination(pageCount, page);
}

function setupPagination(pageCount, currentPage) {
	const paginationContainer = document.getElementById('pagination');
	paginationContainer.innerHTML = "";

	for (let i = 1; i <= pageCount; i++) {
		const pageLink = document.createElement('span');
		pageLink.classList.add('page-link');
		pageLink.textContent = i;
		pageLink.classList.toggle('active', i === currentPage);
		pageLink.addEventListener('click', () => {
			currentPage = i;
			displayItems(document.querySelector('.section__1'), itemsPerPage, currentPage);
		});

		paginationContainer.appendChild(pageLink);
	}
}
document.addEventListener('DOMContentLoaded', () => {
	displayItems(document.querySelector('.section__1'), itemsPerPage, currentPage);
});