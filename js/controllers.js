angular.module('GreetingApp')
.controller('GreetingNewYearController', ['$scope', '$timeout', GreetingNewYearController]);

var greetingNewYearList = [
	{
		'lang': '한국어',
		'message': '새해 복 많이 받으세요!'
	},
	{
		'lang': '영어',
		'message': 'Happy New Year!'
	},
	{
		'lang': '일어',
		'message': '新年あけましておめでとう'
	},
	{
		'lang': '스웨덴어',
		'message': 'Gott Nytt År'
	},
	{
		'lang': '네덜란드어',
		'message': 'Gelukkig Nieuwjaar'
	},
	{
		'lang': '독일어',
		'message': 'Glückliches neues Jahr'
	},
	{
		'lang': '그리스어',
		'message': 'Ευτυχισμένο το Νέο Έτος'
	},
	{
		'lang': '라틴어',
		'message': 'Kalendis Ianuariis'
	},
	{
		'lang': '터키어',
		'message': 'Yeni Yılınız Kutlu Olsun'
	},
	{
		'lang': '태국어',
		'message': 'สวัสดีปีใหม่'
	},
	{
		'lang': '헝가리어',
		'message': 'Boldog Új Évet!'
	},
	{
		'lang': '이탈리아어',
		'message': 'Buon anno!'
	},
	{
		'lang': '우크라이나어',
		'message': 'З Новим роком!'
	},
	{
		'lang': '프랑스어',
		'message': 'Joyeux Nouvel An!'
	},
	{
		'lang': '핀란드어',
		'message': 'Hyvää Uutta Vuotta!'
	},
	{
		'lang': '히브리어',
		'message': 'שנה טובה'
	},
	{
		'lang': '아일랜드어',
		'message': 'Athbhliain Shona!'
	},
	{
		'lang': '포르투갈어',
		'message': 'Feliz Ano Novo!'
	},
	{
		'lang': '베트남어',
		'message': 'Chúc mừng năm mới!'
	},
	{
		'lang': '불가리아어',
		'message': 'Честита Нова Година!'
	}
];

function GreetingNewYearController($scope, $timeout) {

	// 초기 속성 설정
	$scope.message = 'Tab Card';
	$scope.lang     = '━';
	$scope.showing  = true;

	// 메소드 설정
	$scope.greeting = function () {
		$scope.showing  = false;
		$scope.message = 'Wait a Minute...';

		var random = Math.floor(Math.random()*greetingNewYearList.length);

		$timeout(function() {
			$scope.message = greetingNewYearList[random].message;
			$scope.lang = greetingNewYearList[random].lang;
			$scope.showing  = true;
		}, 1000);

	};

}
