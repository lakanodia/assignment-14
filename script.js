// დავალება:

// 1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: ;

//  მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//  მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//  გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//  წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//  დაბეჭდეთ მასივის ახალი ელემენტები.

let array1 = [5, 15, 30, 2];

array1.push('javascript' , 'python');
array1.unshift('html' , 'css');
console.log(array1.length);

array1.shift();
array1.pop();

// let newArray1 = array1[0].concat(' ' + array1[array1.length-1]);
let newArray2 = array1[0].concat(' ' + array1.slice(-1));
console.log(newArray2);

// 2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let array2 = ['ფორთოხალი' , 'ბანანი' , 'მსხალი'];
console.log(array2.length);
array2.push('ვაშლი' , 'ანანასი');
array2.unshift('საზამთრო');
console.log(array2.length);
array2.splice(3, 0, 'მანგო');
array2.shift();
array2.pop();
console.log(array2.length);

// 3. მოცემულია მასივი:
// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;
// 5, 25, 89, 120, 36

let array3 = [12, 25, 3, 6, 8, 14, 7, 23];
let divided = array3.map(x => x / 3);
console.log(divided);

// 4.  მოცემულია მასივი:
// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 

let array4 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let newArray4 = array4.filter(y => typeof y == 'number');
console.log(newArray4);

// 5.მოცემულია მასივი:
// let languages = ['html', 'css', 'javascript', 'python, 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

let languages = ['html', 'css', 'javascript', 'python', 'php'];
let newLanguages = languages.filter(z => z.length > 3);
console.log(newLanguages);

// // 6.მოცემულია მასივი:
// let array= ['academy', 'of', 'digital', 'industries']
// Reduce-ის საშუალებით მიიღეთ ერთი კომბინირებული სტრინგი (academy of digital industries);

let array6= ['academy', 'of', 'digital', 'industries'].reduce(function(p,t){
    return p.concat(t +' ');
},
    ''
)
console.log(array6);

// 7. მოცემულია მასივი:
// let item = [12, ‘google’, 32, null, ‘yahoo’, 25];
//შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით: 
//თუ ელემენტი არის რიცხვი ახალ მასივში უნდა იყოს ამ რიცხვის კვადრატი. 
//თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტები 
//უნდა დაემატოს უცვლელად;

let items = [12, 'google', 32, null, 'yahoo', 25];
let newItems = items.map (r => (typeof r == 'number') ? r * r : 
(typeof r == 'string') ? r.toUpperCase() : r );
console.log(newItems);

// 8. Მოცემულია მასივი:
// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან
// რომელიც შეიცავს ასო m-ს ან M-ს;

let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let newWords = words.filter(k => k.includes('m') || k.includes('M'));
console.log(newWords);