let heading:string = "Typescript Types !!!";
let hea:any = document.querySelector('h1');
hea.textContent = heading;

// using let type of string
let name1: string ="nimisha";
let sen: string =`my name  is ${name1} 
and learning TypeScript`;
let para:any=document.getElementById('p1');
para.textContent=sen;

//other types are
let ls1:number[]= [1,2,3,4]; // list of mubers
let ls2:Array<number> = [1,2,3,4];// array of numbers
let per1:[string,number,boolean]= ['nimi',22,true];//tuples are specified
let para1:any=document.getElementById('p2');
para1.textContent=per1;

//union array
let arr1=['nimisha',21,true];
arr1[0]=2;
console.log(arr1);

//Enum type
enum color {
    red="rose",
    green="leafs", 
    blue="blueberries"
};
let c:color =color.green;// enum will give sequence value
let para2:any=document.getElementById('p3');
para2.textContent=`green colour are in ${c}`;


//type inference
let a; // any type
a = 10;// we can assign boolean value next as well
a = true;

//functions
function add(num1:number,num2?:number):number// return type
{
    if(num2)
        return num1+num2;
    else
        return num1;
}
console.log(add(5,29)); //add(5,"10"); string not assign to number
let para3:any=document.getElementById('p4');
para3.textContent=add(20);

let para4:any=document.getElementById('p5');
//classs and acess modifiers
class employee{
    empname:string;
   constructor(name :string){
       this.empname = name;
   }
   greet(){
      para4.textContent=`good to see you ${this.empname}`;
   }
}

let em1= new employee('priya');
console.log(em1.empname);
em1.greet();


//inhertance of above class
class manager extends employee{
   constructor(mgname:string){
       super(mgname);
   }
   delgate(){
       console.log('manger taks');
   }
}
let m1 = new manager('anju');
m1.delgate();
m1.greet();
console.log(m1.empname);