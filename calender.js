var date= new Date();
var year = date.getFullYear();
var month =date.getMonth()+1;
var clickCount=0;

var lastDay= outDate(year,month);
var theDay=outDay();


function changeBack(){
var back = document.getElementById('body1');
var s;
if(month+clickCount>0)
s=(month+clickCount)%12+1;
else
s=((clickCount+month)*(-1))%12+1;
var url = "url('./image/"+s+".jpg')";
back.style.background= url;
}

$('.detail').css('display', 'none');
/*년 월을 넣으면 그달의 총 일수와 시작 요일을 글로벌변수에 저장하는 함수*/
	




/*년 월을 넣으면 그달의 총 일수와 시작 요일을 글로벌변수에 저장하는 함수*/
//년과 월을 입력하면 해당 달의 총일수를 리턴
function outDate(year,month){
		if (month == 4 || month == 6 || month == 9 || month == 11)
			return 30;
		else if (month == 2)
		{
			if (year % 4 == 0) 
				return 29;
			else 
				return 28;
		} else
			return 31;
}


//년과 월을 입력하면 해당월의 몇번째부터 시작하는지 알려줌
//시작 요일은 일요일, 일요일은 숫자0, 월요일은 숫자1
function outDay(year,month){
	var theDay = new Date(year,month-1,1);
	return theDay.getDay();
}


//달력에 일을 입력해주는 함수.
//인자로 시작 번째와 일수를 받아 html에 기입




function createCalender(th,lastday){
	var nb="";
	var tbody=$('#calTable');
	


	$('#today').html(year+"년 " +month+"월");
	var count=0;
	
	var tr= $('<tr>').appendTo(tbody).attr("class",'day');
	if(th!=0){
	for(var i=th-1;i>=0;i--){// day는 달력에 빈칸갯수를  저장하는 변수
		
		($('<td>').html(nb)).appendTo(tr).attr("class",'day');
	count++;
	}
}			for(i=0;i<lastday;i++){
		if(count%7==0){
			var tr= $('<tr>').appendTo(tbody).attr("class",'day').
			append($('<td>').attr("class",'sun').append($("<a>").html(i+1)));
			
		}else if(count%7==6){
			($('<td>').attr("class",'sat').append($("<a>").html(i+1))).appendTo(tr);
		}else{
		($('<td>').append($("<a>").html(i+1))).appendTo(tr);		}	
	count++;			
	}


	
}




function start(){
	if(13<=(month+clickCount)){
		year=year + 1;
		month=1;
		}else if(1>(month+clickCount)){
		year=year-1;
		month=12;
	}else{
		month=month+clickCount;
	}
	lastDay= outDate(year,month);
	theDay=outDay(year,month);
	
	
	createCalender(theDay,lastDay);
	lastDay=0;
	theDay=0;
}



start();
changeBack();
$('#yydd').html(year+"년"+month+'월');


$('#btnRight').click(function(){
	$('.day').remove();
	clickCount++;
	start();
	changeBack();
	clickCount=0;
});

$('#btnLeft').click(function(){
	

	$('.day').remove();
	clickCount--;
	start();
	changeBack();
	clickCount=0;
});


function Board(work) {
	this.date = new Date();
	this.work = work;
}
var boardList=[];

$('#btnAdd').click(function (event){
	
	$('.detail').css('display', '');
	var board= new Board($('#work').val());
	$('#work').val("");
	boardList.push(board);
	refreshBoardList();
	
});

function refreshBoardList() {
	var boardTable= $('#listTable');
	
	$('.dataRow').remove();

	for (var i in boardList) {
		$('<tr>')
			.appendTo(boardTable).attr('class','dataRow')
			.append($('<td>').html(i))
			.append($('<td>').html(boardList[i].work));
			
	}
}

