// 留言板功能实现
document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('message-form');
    const messagesList = document.getElementById('messages-list');
    
    // 加载留言
    const loadMessages = () => {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        
        messagesList.innerHTML = '';
        
        if (messages.length === 0) {
            messagesList.innerHTML = '<p class="no-messages">暂无留言，快来添加第一条留言吧！</p>';
            return;
        }
        
        messages.forEach(message => {
            const messageItem = document.createElement('div');
            messageItem.className = 'message-item';
            
            messageItem.innerHTML = `
                <div class="message-header">
                    <span class="message-author">${message.name}</span>
                    <span class="message-date">${formatDate(message.date)}</span>
                </div>
                <div class="message-content">${message.content}</div>
            `;
            
            messagesList.appendChild(messageItem);
        });
    };
    
    // 格式化日期
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('zh-CN');
    };
    
    // 提交留言
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const contentInput = document.getElementById('content');
        
        const name = nameInput.value.trim();
        const content = contentInput.value.trim();
        
        if (!name || !content) {
            alert('请填写完整信息！');
            return;
        }
        
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        
        messages.unshift({
            name,
            content,
            date: new Date().toISOString()
        });
        
        localStorage.setItem('messages', JSON.stringify(messages));
        
        nameInput.value = '';
        contentInput.value = '';
        
        loadMessages();
        
        alert('留言成功！');
    });
    
    // 初始化加载留言
    loadMessages();
});