var turn = function (array, play) {
	array[i].splice(play).val();
};
$(function(){
	var game = [['', '', ''], ['', '', ''], ['', '', '']],
			zero = $('#0-0'),
			one = $('#0-1'),
			two = $('#0-2'),
			three = $('#0-3'),
			four = $('#1-1'),
			five = $('#1-2'),
			six = $('#1-3'),
			seven = $('#2-1'),
			eight = $('#2-2'),
			nine = $('#2-3');

	/*function validateWinnerX(box1) {
		if (box1 === "x")
			$(#winner).show();
	}
	function validateWinnerX(box1) {
		if (box1 === "o")
			$(#winner).show();
	}*/
	var declareWinner = function () {
		if (game[0][0] === 'x' && game[0][1] === 'x' && game[0][2] === 'x') {
			console.log('X Wins!');
		} else if (game[1][0] === 'x' && game[1][1] === 'x' && game[1][2] === 'x') {
			console.log('X Wins!');
		} else if (game[2][0] === 'x' && game[2][1] === 'x' && game[2][2] === 'x') {
			console.log('X Wins!');
		} else if (game[0][0] === 'x' && game[1][0] === 'x' && game[2][0] === 'x') {
			console.log('X Wins!');
		} else if (game[0][1] === 'x' && game[1][1] === 'x' && game[2][1] === 'x') {
			console.log('X Wins!');
		} else if (game[0][2] === 'x' && game[1][2] === 'x' && game[2][2] === 'x') {
			console.log('X Wins!');
		} else if (game[0][0] === 'x' && game[1][1] === 'x' && game[2][2] === 'x') {
			console.log('X Wins!');
		} else if (game[2][0] === 'x' && game[1][1] === 'x' && game[0][2] === 'x') {
			console.log('X Wins!');
		} else if (game[0][0] === 'o' && game[0][1] === 'o' && game[0][2] === 'o') {
			console.log('O Wins!');
		} else if (game[1][0] === 'o' && game[1][1] === 'o' && game[1][2] === 'o') {
			console.log('O Wins!');
		} else if (game[2][0] === 'o' && game[2][1] === 'o' && game[2][2] === 'o') {
			console.log('O Wins!');
		} else if (game[0][0] === 'o' && game[1][0] === 'o' && game[2][0] === 'o') {
			console.log('O Wins!');
		} else if (game[0][1] === 'o' && game[1][1] === 'o' && game[2][1] === 'o') {
			console.log('O Wins!');
		} else if (game[0][2] === 'o' && game[1][2] === 'o' && game[2][2] === 'o') {
			console.log('O Wins!');
		} else if (game[0][0] === 'o' && game[1][1] === 'o' && game[2][2] === 'o') {
			console.log('O Wins!');
		} else if (game[2][0] === 'o' && game[1][1] === 'o' && game[0][2] === 'o') {
			console.log('O Wins!');
		}
	};	
	$('button').click(function(event) {
		game[0].splice(0, 1, zero.val());
		declareWinner();
		event.preventDefault();
	});

	$('button').click(function(event) {
		game[0].splice(1, 1, one.val());
		declareWinner();
		event.preventDefault();
	});

	$('button').click(function(event) {
		game[0].splice(2, 1, two.val());
		declareWinner();
		event.preventDefault();
	});

		
});

