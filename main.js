$(document).ready(function(){
    $(".btn").click(function(){
        let input = $(".grades").val().split(" ");
        const average = parseFloat($(".average").val());
        const grades = input;
        const ans = calculateGrades(grades, average);
        $(".res").html(ans);
      });
});

function calculateGrades(grades, average) {
    let sum = 0;
    grades.forEach(grade => {
        sum+=parseInt(grade);
    });
    let num = grades.length + 1;
    let temp = 0;
    while(1){
        temp = average*num - sum;
        if(temp/(num-grades.length)<=5) break;
        num++;
    }
    let ans = "";
    while(1){
        if(temp>5){
            ans+="5 ";
            temp-=5;
        }
        else{
            ans+=temp.toString();
            break;
        }
    }
    return ans;
}