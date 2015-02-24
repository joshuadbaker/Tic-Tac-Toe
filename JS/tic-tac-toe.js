$(function(){
	var game = [['', '', ''], ['', '', ''], ['', '', '']],
			zero = $('#0-0'),
			one = $('#0-1'),
			two = $('#0-2'),
			three = $('#1-0'),
			four = $('#1-1'),
			five = $('#1-2'),
			six = $('#2-0'),
			seven = $('#2-1'),
			eight = $('#2-2');

	$('#x-winner').hide();
	$('#o-winner').hide();
	var declareWinner = function () {
		if (game[0][0] === 'x' && game[0][1] === 'x' && game[0][2] === 'x') {
			//console.log('X Wins!');
			$('#x-winner').show();
		} else if (game[1][0] === 'x' && game[1][1] === 'x' && game[1][2] === 'x') {
			//console.log('X Wins!');
			$('#x-winner').show();
		} else if (game[2][0] === 'x' && game[2][1] === 'x' && game[2][2] === 'x') {
			//console.log('X Wins!');
			$('#x-winner').show();
		} else if (game[0][0] === 'x' && game[1][0] === 'x' && game[2][0] === 'x') {
			//console.log('X Wins!');
			$('#x-winner').show();
		} else if (game[0][1] === 'x' && game[1][1] === 'x' && game[2][1] === 'x') {
			//console.log('X Wins!');
			$('#x-winner').show();
		} else if (game[0][2] === 'x' && game[1][2] === 'x' && game[2][2] === 'x') {
			//console.log('X Wins!');
			$('#x-winner').show();
		} else if (game[0][0] === 'x' && game[1][1] === 'x' && game[2][2] === 'x') {
			//console.log('X Wins!');
			$('#x-winner').show();
		} else if (game[2][0] === 'x' && game[1][1] === 'x' && game[0][2] === 'x') {
			//console.log('X Wins!');
			$('#x-winner').show();
		} else if (game[0][0] === 'o' && game[0][1] === 'o' && game[0][2] === 'o') {
			//console.log('O Wins!');
			$('#o-winner').show();
		} else if (game[1][0] === 'o' && game[1][1] === 'o' && game[1][2] === 'o') {
			//console.log('O Wins!');
			$('#o-winner').show();
		} else if (game[2][0] === 'o' && game[2][1] === 'o' && game[2][2] === 'o') {
			//console.log('O Wins!');
			$('#o-winner').show();
		} else if (game[0][0] === 'o' && game[1][0] === 'o' && game[2][0] === 'o') {
			//console.log('O Wins!');
			$('#o-winner').show();
		} else if (game[0][1] === 'o' && game[1][1] === 'o' && game[2][1] === 'o') {
			//console.log('O Wins!');
			$('#o-winner').show();
		} else if (game[0][2] === 'o' && game[1][2] === 'o' && game[2][2] === 'o') {
			//console.log('O Wins!');
			$('#o-winner').show();
		} else if (game[0][0] === 'o' && game[1][1] === 'o' && game[2][2] === 'o') {
			//console.log('O Wins!');
			$('#o-winner').show();
		} else if (game[2][0] === 'o' && game[1][1] === 'o' && game[0][2] === 'o') {
			//console.log('O Wins!');
			$('#o-winner').show();
		}
	};	
	$('button').click(function(event) {
		game[0].splice(0, 1, zero.val().toLowerCase());
		declareWinner();
		event.preventDefault();
	});

	$('button').click(function(event) {
		game[0].splice(1, 1, one.val().toLowerCase());
		declareWinner();
		event.preventDefault();
	});

	$('button').click(function(event) {
		game[0].splice(2, 1, two.val().toLowerCase());
		declareWinner();
		event.preventDefault();
	});
	$('button').click(function(event) {
		game[1].splice(0, 1, three.val().toLowerCase());
		declareWinner();
		event.preventDefault();
	});

	$('button').click(function(event) {
		game[1].splice(1, 1, four.val().toLowerCase());
		declareWinner();
		event.preventDefault();
	});

	$('button').click(function(event) {
		game[1].splice(2, 1, five.val().toLowerCase());
		declareWinner();
		event.preventDefault();
	});
		$('button').click(function(event) {
		game[2].splice(0, 1, six.val().toLowerCase());
		declareWinner();
		event.preventDefault();
	});

	$('button').click(function(event) {
		game[2].splice(1, 1, seven.val().toLowerCase());
		declareWinner();
		event.preventDefault();
	});

	$('button').click(function(event) {
		game[2].splice(2, 1, eight.val().toLowerCase());
		declareWinner();
		event.preventDefault();
	});
		
});

