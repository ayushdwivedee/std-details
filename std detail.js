function StdDetails(name,roll_no,Class,section,marks_of_5_subjects){
this.name=name;
this.roll_no=roll_no;
this.Class=Class;
this.section=section;
this.marks_of_5_subjects=marks_of_5_subjects;
}

let obj={
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
}
let aman=new StdDetails("Aman",14,"X","B",obj)
console.log(aman);

// print top 3 subjects
StdDetails.prototype.printTop3Subjects=function(){
    let arr=[];
    arr.push(obj.science,obj.maths,obj.social_science,obj.english,obj.hindi)
    arr.sort()
    for(let i=2;i<arr.length;i++){
        console.log(arr[i]);
    }
}


aman.printTop3Subjects()

//print report card
StdDetails.prototype.printReportCard=function(){
    let total=this.marks_of_5_subjects.science+this.marks_of_5_subjects.social_science+this.marks_of_5_subjects.maths+this.marks_of_5_subjects.english+this.marks_of_5_subjects.hindi;
    let percent=total/5;
    console.log(`
                 +-------------------------+
                 |       REPORT  CARD      |
                 +-------------------------+
                 | Name       -${this.name}        |
                 | Roll no.   -${this.roll_no}          |
                 | Class      -${this.Class}           |
                 | Section    -${this.section}           |
                 | Science    -${this.marks_of_5_subjects.science}          |
                 | S.Sc       -${this.marks_of_5_subjects.social_science}          |
                 | Maths      -${this.marks_of_5_subjects.maths}          |
                 | English    -${this.marks_of_5_subjects.english}          |
                 | Hindi      -${this.marks_of_5_subjects.hindi}          |
                 | Percentage -${percent}        |
                 +-------------------------+`); 
} 


aman.printReportCard()
 