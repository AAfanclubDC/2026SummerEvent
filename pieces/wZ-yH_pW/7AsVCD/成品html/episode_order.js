	const orderContainer = document.getElementById('episodeOrder');
	const getEpisodeUrl = (epIndex) => `episode${epIndex}.html`;
	const maxEpisode = 34;
	
	// 载入指定页
    function loadEpisode(ep) {
      window.location.href = getEpisodeUrl(ep);
    }
	
	// 返回主页
    function backIndex() {
      window.location.href = `index.html`;
    }
	
	// 初始化
    function initPagination() {
	  // 上一话
	  const preButtons = orderContainer.querySelectorAll('.aa.btn.pre');
	  preButtons.forEach(btn => {
		if (epSelf > 1) {
			if ([10, 17, 28].includes(epSelf)) {
			btn.addEventListener('click', () => loadEpisode(epSelf - 2));
		  } else {
		    btn.addEventListener('click', () => loadEpisode(epSelf - 1));
		  }
		}
	  });
	  // 回主页
	  const backButtons = orderContainer.querySelectorAll('.aa.btn.back');
	  backButtons.forEach(btn => {
		btn.addEventListener('click', () => backIndex());
	  });
	  // 下一话
	  const nextButtons = orderContainer.querySelectorAll('.aa.btn.next');
	  nextButtons.forEach(btn => {
		if (epSelf < maxEpisode) {
		  if ([8, 15, 26].includes(epSelf)) {
			btn.addEventListener('click', () => loadEpisode(epSelf + 2));
		  } else {
		    btn.addEventListener('click', () => loadEpisode(epSelf + 1));
		  }
		}
	  });
    }
	
	// 页面加载完成后初始化
    document.addEventListener('DOMContentLoaded', initPagination);