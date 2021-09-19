const iframe = document.querySelector('iframe');

for (const link of document.querySelectorAll('a')) {
  link.onclick = (e) => {
    e.preventDefault();
    iframe.src = link.href;
  };
}
