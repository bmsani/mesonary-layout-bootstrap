var studentResult = {
    sani: 40,
    roni: 70,
    joni: 54,
    basar: 92,
    sornali: 89,
    nusrat: 82,
    samim: 65,
    miraz: 53
};

var studentName = Object.keys(studentResult);
var studentMark = Object.values(studentResult);

for(i = 0; i < studentName.length; i++){
    if(studentMark[i] >= 90){
        console.log(studentName[i], 'got A+');
    }
    else if(studentMark[i] >= 80){
        console.log(studentName[i], 'got A');
    }
    else if(studentMark[i] >= 70){
        console.log(studentName[i], 'got b');
    }
    else if(studentMark[i] >= 60){
        console.log(studentName[i], 'got c');
    }
    else if(studentMark[i] >= 50){
        console.log(studentName[i], 'got d');
    }
    else{
        console.log(studentName[i], 'you have failed');
    }
}
