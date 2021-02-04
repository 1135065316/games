const playerInfo = {
	x: 10,
	y: 10,
	width: 2,
	height: 2,
	speed: 5
}

function gameStart() {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	setInterval(() => {
		painting(ctx)
	}, 1000 / 60)
	
	document.onkeydown = setPlayerController
}

// 设置玩家按键
function setPlayerController(e) {
	switch (e.key) {
		case 'ArrowUp':
			// console.log('上')
			playerInfo.y -= playerInfo.speed
			break;
		case 'ArrowDown':
			// console.log('下')
			playerInfo.y += playerInfo.speed
			break;
		case 'ArrowLeft':
			// console.log('左')
			playerInfo.x -= playerInfo.speed
			break;
		case 'ArrowRight':
			// console.log('右')
			playerInfo.x += playerInfo.speed
			break;
	}
}
// 画布, 玩家信息
function painting(ctx) {
	// 清除画布
	// ctx.clearRect(0, 0, 1280, 720)
	ctx.clearRect(0, 0, 50, 50)

	// 1. 绘制背景
	

	// 2. 绘制玩家
	ctx.strokeStyle = 'green';
	// x, y, width, height
	ctx.strokeRect(playerInfo.x, playerInfo.y, playerInfo.width, playerInfo.height);
	
}