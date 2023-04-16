const themeToggle = document.getElementById('theme-toggle');
let theme = localStorage.getItem('theme') ?? 'light';
themeToggle.getElementsByTagName('input')[0].checked = theme == 'dark';
document.documentElement.setAttribute('data-theme', theme);

function toggleTheme(e) {
  let theme = e.target.checked ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}
themeToggle.addEventListener('change', toggleTheme);
