var currentQuestion = '';
var selectWarning= function() {$('#selectwarning').html('are you sure you want ');};
var initializePage = function() {
	
	var menuSelect = document.getElementById('menuSelect');
	var pageTransition = document.getElementById('pageTransition');
	var gameOver = document.getElementById('gameOver');
	 
	$('#pageTitle').html('MyTextAdventure');
	$('#pageTitle').css('color', 'black');	
	
	
	$('#adventureSelector').on('change', handleAdventureChange);
	$('#navAbout').on('click', showAbout);
	$('#navHome').on('click', showHome);
	$('#navContactMe').on('click', showContact);
	$('#navYouTube').on('click', showYoutube);
	$('#YesButton, .yesButton').on('click', yesButtonClicked);
	$('#NoButton, .noButton').on('click', noButtonClicked);
	
	
	$('.play-menuSelect').on('click', function(e){
		menuSelect.play();
	});
	$('.play-pageTransition').on('click', function(e){
		pageTransition.play();
	});
	$('.play-gameOver').on('click', function(e){
		gameOver.play();
	});
	
};

var handleAdventureChange= function(e) {
	var currentSelection = $('#adventureSelector').val();
	if(currentSelection != ''){
		$('.content-page').addClass('hidden');
		$('#' + currentSelection).removeClass('hidden');
		toggleYesNo(true);
		currentQuestion = currentSelection;
	}
};
var showHome= function(e) {
	$('.content-page').addClass('hidden');
	$('#navHomeContent').removeClass('hidden');
	$('#adventureSelector').val('');
	toggleYesNo(false);
};

var showAbout = function(e) {
	
	$('.content-page').addClass('hidden');
	$('#navAboutContent').removeClass('hidden');
	$('#adventureSelector').val('');
	toggleYesNo(false);
};

var showContact = function(e) {
	
	$('.content-page').addClass('hidden');
	$('#navContactMeContent').removeClass('hidden');
	$('#adventureSelector').val('');
	toggleYesNo(false);
};

var showYoutube = function(e) {
	
	$('.content-page').addClass('hidden');
	$('#navYouTubeContent').removeClass('hidden');
	$('#adventureSelector').val('');
	toggleYesNo(false);
};	
var toggleYesNo = function(show) {
	if (show == true) {
		$('#YesNoButtons').removeClass('hidden');
	}
	else {
		$('#YesNoButtons').addClass('hidden');
	}	
};

var yesButtonClicked = function(e) {
	var nextPage = $('#' + currentQuestion).data('yes');
	$('.content-page').addClass('hidden');
	$('#' + nextPage).removeClass('hidden');
	currentQuestion = nextPage;
	if($('#' + nextPage).data('yes') === undefined) {
		toggleYesNo(false);
	}
	checkAnimation();
};

var noButtonClicked = function(e) {
	var nextPage = $('#' + currentQuestion).data('no');
	$('.content-page').addClass('hidden');
	$('#' + nextPage).removeClass('hidden');
	currentQuestion = nextPage;
	if($('#' + nextPage).data('yes') === undefined) {
		toggleYesNo(false);
	}
	checkAnimation();
};

var checkAnimation = function() {
	
	if(currentQuestion == 'midevalAdventure2') {
		setTimeout(function(){
			
			$('#Gaurd1').addClass('stabbing');
			setTimeout(function(){
				$('#Gaurd1').removeClass('stabbing');
				$('#mainC').addClass('falling');
				document.getElementById('gameOver').play();
			}, 500);
			
			
		}, 2000);
		
	}
	else if (currentQuestion == 'midevalAdventure5A') {
		setTimeout(function(){
			$('#Arrow').addClass('shooting');
			document.getElementById('gameOver').play();
		}, 2000);
	}
	else if(currentQuestion == 'midevalAdventure8A') {
		setTimeout(function(){
			$('#DragonFire').addClass('burning');
			setTimeout(function(){
				$('#DragonFire').removeClass('burning');
				$('#StickmanFire').addClass('burning');	
				document.getElementById('gameOver').play();
			}, 1000);
		}, 2000);
	}	
	
};

// Jquery Function To Let Us Know Document Is Ready
$(initializePage);




