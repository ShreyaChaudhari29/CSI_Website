(function() {
  const pre = document.getElementById('csi-preloader');
  if (!pre) return;
  
  // 3.0s drawing animation + 0.4s settle before smooth forward-zoom exit
  setTimeout(() => {
    pre.classList.add('csi-preloader-hidden');
    setTimeout(() => {
      if (pre && pre.parentNode) {
        pre.parentNode.removeChild(pre);
      }
    }, 800);
  }, 3400);
})();
