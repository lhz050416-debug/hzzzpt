// main.js - 适用于 blog.html（硬编码卡片）
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.blog-card');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const paginationContainer = document.getElementById('pagination');

    let currentCategory = 'all';
    let currentSearch = '';
    const postsPerPage = 3;
    let currentPage = 1;

    // 更新卡片显示状态
    function updateCards() {
        const filteredCards = [];

        cards.forEach(card => {
            const category = card.dataset.category;
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();

            const matchCategory = (currentCategory === 'all' || category === currentCategory);
            const matchSearch = title.includes(currentSearch) || desc.includes(currentSearch);

            if (matchCategory && matchSearch) {
                filteredCards.push(card);
            }
        });

        // 隐藏所有卡片
        cards.forEach(card => card.style.display = 'none');

        // 计算分页
        const totalPages = Math.ceil(filteredCards.length / postsPerPage) || 1;
        if (currentPage > totalPages) currentPage = 1;

        // 显示当前页的卡片
        const start = (currentPage - 1) * postsPerPage;
        const end = start + postsPerPage;
        for (let i = start; i < end && i < filteredCards.length; i++) {
            filteredCards[i].style.display = 'block';
        }

        // 渲染分页
        renderPagination(totalPages);
    }

    // 渲染分页按钮
    function renderPagination(totalPages) {
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.classList.add('pagination-btn');
            if (i === currentPage) btn.classList.add('active');
            btn.onclick = () => {
                currentPage = i;
                updateCards();
            };
            paginationContainer.appendChild(btn);
        }

        // 下一页按钮（可选）
        if (totalPages > 1) {
            const nextBtn = document.createElement('button');
            nextBtn.innerHTML = '下一页 <i class="fa fa-arrow-right"></i>';
            nextBtn.classList.add('pagination-btn');
            nextBtn.onclick = () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    updateCards();
                }
            };
            paginationContainer.appendChild(nextBtn);
        }
    }

    // 搜索事件
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            currentSearch = searchInput.value.trim().toLowerCase();
            currentPage = 1;
            updateCards();
        });
    }
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            currentSearch = searchInput.value.trim().toLowerCase();
            currentPage = 1;
            updateCards();
        });
    }

    // 分类筛选
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            currentPage = 1;
            updateCards();
        });
    });

    // 初始化
    updateCards();

    // 年份更新
    const yearEl = document.querySelector('footer span');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // 移动端菜单
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }
});