document.addEventListener('DOMContentLoaded', function() {
    const themeSelect = document.getElementById('theme-select');
    const listStyleSelect = document.getElementById('list-style-select');
    const dynamicList = document.getElementById('dynamic-list');
    const preferencesPanel = document.querySelector('.preferences-panel');

    const theme = localStorage.getItem('theme') || 'theme1';
    const listStyle = localStorage.getItem('listStyle') || 'list-style1';

    document.body.className = theme;
    dynamicList.className = listStyle;
    updatePreferencesPanelTheme(theme);

    themeSelect.value = theme;
    listStyleSelect.value = listStyle;

    themeSelect.addEventListener('change', function() {
        const selectedTheme = themeSelect.value;
        document.body.className = selectedTheme;
        updatePreferencesPanelTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    });

    listStyleSelect.addEventListener('change', function() {
        const selectedListStyle = listStyleSelect.value;
        dynamicList.className = selectedListStyle;
        localStorage.setItem('listStyle', selectedListStyle);
    });

    function updatePreferencesPanelTheme(theme) {
        preferencesPanel.className = 'preferences-panel';
        preferencesPanel.classList.add(theme + '-preferences');
    }

    function generateListItems() {
        dynamicList.innerHTML = '';
        const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            dynamicList.appendChild(li);
        });
    }

    generateListItems();
});
