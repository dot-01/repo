document.write("<h1>aaa</h1>");
document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.border = "5px solid blue";
//window.alert("submitted");
console.log("yes every thing is okay");
console.table(["a", "b", "c"]);
var aa = [1, 2, 83, 4];
var aaa = { name: "yousef", age: 20 };
var a = typeof aa;
document.write("<h1>" + a + "</h1>");
//bool undefind null string obj(array,obj like aaa) number string nan
//hello.innerHTML += aa;//direct call the id(it will be like a variable) from html to change content
//let var const... var : dont show any error otherwise showen
//const same mean i know and let it is the perfect one i can use
//scape operator \ backward slash used for any symbols and break line to continue in string
// scape \n to new line
const r = 180;
document.write(`<h1>${r}</h1>`); //operator backtik without (+) in double qoutations we need to use (+)
let p =
  "any \
a \
\
\
a \
yes";
console.log(p.repeat(3), r); //or p + r
let t = `
<div>
<h1>${aa}</h1>
<p>${r}</p>
</div>
`;
document.write(t.repeat(2));
//unary operator like - , + always return number console or used to convert and variable have a number string to be number
console.log(+"uu");
var z = "10";
let o = `
<div>
<h1>${aa}</h1>
<p>${+z}</p>
</div>
`;
document.write(o);
//note the NaN type is number
let v = "10",
  b = 20,
  n = true;
console.log(b + n + +(++v)); //or number(v); be carefull in number wrote inside quote will return a string
b.toString();
b.toFixed(2);
parseInt(v);
parseFloat(v);
Number.isInteger(v);
Number.isNaN(v / 2);
Math.min(aa); //deal with array
let g = "yousef samer aalmwajdeh";
console.log(g.indexOf("a"), 4);
console.log(g.lastIndexOf("a"), 5);
console.log(g.slice(0, 6)); //the end is not included accept the negative value and thats mean start from the end
console.log(g.substring(0, 6)); //dont accept any negative value and convert it to zero
console.log(g.substr(2, 3) + "#");
console.log(g.split(" ")); //cut and convert the string to array and you can determine the number of cutting as you like
console.log(g.includes("samer"));
console.log(g.startsWith("samer"));
console.log(g.endsWith("deh"));
let arr = ["yousef", "saif", "abood", ["omar", "ayham"]];
console.log(`hello ${arr[3][1][0]}`);
console.log(Array.isArray(arr));
console.log(arr.length); //2 [3]
arr[arr.length] = "any name";
console.log(arr);
//arr.length = 9;
console.log(arr);
arr.unshift("koala", "aseel");
console.log(arr);
arr.push("anas", "majed");
console.log(arr);
arr.shift(); //i car store the value of the first location in array in variable before the remove from start
console.log(arr);
arr.pop(); //i car store the value of the first location in array in variable before the remove from last
console.log(arr);
console.log(arr.indexOf("saif"));
console.log(arr.lastIndexOf("aseel"));
console.log(arr.includes("anas"));
console.log(arr.sort());
console.log(arr.reverse());
console.log(arr.slice(1, -3));
let arr1 = arr.slice(1, 2);
console.log(arr1);
arr.splice(arr.length, 1, "soso", "sasa"); //add and delete element
console.log(arr);
let newarr = arr.concat(arr);
console.log(newarr);
let str = newarr.join(" || ");
console.log(str);
let ar = str.split(" || ");
console.log(ar);

function restarray(...na) {
  //this arguments mean i have unknown number of argument and i will handle with this argument like array and must be a last argument
  let n, ag, hi;
  for (i = 0; i < 3; i++) {
    if (typeof na[i] === "boolean") {
      if (na[i] === true) {
        hi = "available";
      } else {
        hi = " not available";
      }
    } else if (typeof na[i] === "string") {
      n = na[i];
    } else if (typeof na[i] === "number") {
      ag = na[i];
    }
  }
  let result = `<div>
<p>
hello ${n} , your age is ${ag} , you are ${hi} for hiring.
</p>
</div>
`;
  return result;
}

document.write(restarray(22, "osama", false));

let calc5 = function (a, b) {
  // i can add name for this function but i cant call by name function but i can call by name variable
  return a + b;
};
document.write("this is anoynomouse function" + calc5(1, 2));

// setTimeout(function(){
//     let xx = restarray(22,"osama",false);
//     let note ="<div>set time out after 5 sec.</div>";
//     document.write(note + xx.repeat(3));
// },5000);
let ac = 1;
// document.getElementById("bz").onclick = function() {

//     if(ac&1)
// {
//     document.getElementById("a").style.backgroundColor = "green";
//     document.getElementById("bz").innerHTML = "change color to orange";
// }
// else{
//     document.getElementById("a").style.backgroundColor = "orange";
//     document.getElementById("bz").innerHTML = "change color to green";
// }
// ac++
// };
document.getElementById("bz").onclick = () => {
  if (ac & 1) {
    document.getElementById("a").style.backgroundColor = "green";
    document.getElementById("bz").innerHTML = "change color to orange";
  } else {
    document.getElementById("a").style.backgroundColor = "orange";
    document.getElementById("bz").innerHTML = "change color to green";
  }
  ac++;
};
function aw(fn, ls) {
  //nested funtion and return
  let maess = "say hi";
  function b() {
    function c() {
      return console.log(maess + fn + ls);
    }
    return c();
  }
  return b();
}
aw(" saif ", "samer");

aa1 = aa.map((element) => {
  //important function map for arrays index array ... parameter for map
  return element * 2;
});
aa1 = aa.map((element) => {
  //important function map for arrays
  return element * 2;
});
console.log(aa1);
let arr11 = [1, -20, -60, 89, 12, -56, 9];
let bb = arr11.filter((ele) => {
  return ele >= 0;
});
console.log(bb);
let bb1 = arr11
  .filter((ele) => {
    return ele >= 0;
  })
  .map((ele) => {
    return ele * 2;
  });
console.log(bb1);

let bb2 = arr11
  .filter((ele) => {
    return ele >= 0;
  })
  .map((ele) => {
    return ele * 2;
  })
  .reduce(function (sum, curr, index, arr) {
    //reduce it is high order function return just one element
    return sum + curr;
  }, 0);
console.log(bb2);
let arr3 = ["a", "@", "h", "@", "m", "@", "a", "@", "d"];
let final = arr3
  .filter((ele) => {
    return ele != "@";
  })
  .reduce((sum, curr) => {
    return sum + curr;
  });
console.log(final);
let myst = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let rr = myst
  .substr(0, myst.length - 1)
  .split(",")
  .filter((ele) => isNaN(parseInt(ele)))
  .map((ele) => {
    return ele == "_" && ele.length <= 1 ? " " : ele.length > 1 ? ele[0] : ele;
  })
  .reduce((sum, cur) => {
    return sum + cur;
  });
console.log(rr);

let user = {
  email: "any@any.any",
  Password: "asedfjkl",
  age: 22,
  phoneNumber: "+9621895486888",
  country: {
    first: "jordan",
    second: "USA",
    third: "suadi arabia",
  },
  skills: ["c++", "oop", "data structure"],
  print: function () {
    console.log(user.email);
    console.log(user.Password);
    console.log(user.phoneNumber);
    console.log(user["skills"]);
    console.log(user.country.second);
  },
};
// console.log(user.email)
// console.log(user.Password)
// console.log(user.phoneNumber)
// console.log(user["skills"]);
// console.log(user.country.second);
user.print();
let user1 = new Object();
user1.gender = "female";
user1["salary"] = "220$";
user1.print = () => {
  console.log(user1.gender);
  console.log(user1.salary);
};
user1.print();

console.log(document.getElementById("a1"));
console.log(document.getElementsByClassName("cl"));
console.log(document.getElementsByTagName("p"));
console.log(document.querySelector("p"));
console.log(document.querySelectorAll(".cl"));

let ae = document.getElementById("a1");
ae.setAttribute("class", "cl");
ae.title = "30";
console.log(ae.getAttribute("id"));
console.log(ae.getAttribute("class"));

let ae1 = document.querySelector("div");
if (ae1.hasAttribute("id")) {
  if (ae1.getAttribute("id") === "") ae1.setAttribute("id", "ll");
  else {
    ae1.setAttribute("id", "newValue");
  }
} else {
  ae1.setAttribute("id", "ll112");
}
let newe = document.createElement("h1");
let attr = document.createAttribute("data-yousef");
let content = document.createTextNode("h1 made by javascript");
let comment = document.createComment("comment by javascript");
newe.className = "clh1";
newe.setAttributeNode(attr);
newe.setAttribute("id", "idbyjs");
newe.appendChild(content);
newe.appendChild(comment);
document.body.appendChild(newe);

let aer = document.querySelector("div");
console.log(aer.children);
console.log(aer.children);
console.log(aer.childNodes);
console.log(aer.firstElementChild);
console.log(aer.lastElementChild);

// that is validation ---------------------------------------------------------------------------------------------------------------------------------------------

let email = document.querySelector("[name='email']");
let tooltip = document.getElementById("too");
let countN = 0;
document.forms[0].onsubmit = (sub) => {
  let e = false;
  let em = email.value;
  let capi = email.value
    .split("")
    .filter(function (ele) {
      if (ele == ele.toUpperCase() && isNaN(parseInt(ele))) return ele;
    })
    .join("");
  let numbers = email.value.split("").map(function (ele) {
    if (!isNaN(parseInt(ele))) {
      countN++;
    }
  });
  let small = email.value
    .split("")
    .filter(function (ele) {
      if (ele == ele.toLowerCase() && isNaN(parseInt(ele))) return ele;
    })
    .join("");

  if (em.length >= 8) {
    if (countN >= 1) {
      if (capi.length >= 1) {
        if (small.length >= 1) {
          e = true;
          window.alert("submitted !!!");
        } else {
          tooltip.innerHTML = "Must insert a lowercase character !!";
          tooltip.style.padding = "5px";
          tooltip.style.display = "block";
        }
      } else {
        tooltip.innerHTML = "Must insert a uppercase character !!";
        tooltip.style.padding = "5px";
        tooltip.style.display = "block";
      }
    } else {
      tooltip.innerHTML = "Must insert a numbers !!";
      tooltip.style.padding = "5px";
      tooltip.style.display = "block";
    }
  } else {
    tooltip.innerHTML = "Must length more than or equal 8 !!";
    tooltip.style.padding = "5px";
    tooltip.style.display = "block";
  }
  if (e === false) {
    sub.preventDefault();
  }
};
document.getElementById("txt").onkeydown = () => {
  tooltip.innerHTML = "";
  tooltip.style.padding = "0";
  tooltip.style.display = "none";
};
document.getElementById("txt").onfocus = () => {
  tooltip.innerHTML = "";
  tooltip.style.padding = "0";
  tooltip.style.display = "none";
};
// that is validation ---------------------------------------------------------------------------------------------------------------------------------------------
//we have three event i can make 1 click 2 focus 3 blur uesd on anything like buuton or link
let g4 = document.getElementById("y");
g4.classList.add("notdone");
let rt = g4.classList.contains("done"); //check if the class is here or not
g4.classList.remove("done");
let vb = g4.classList.item("4"); //return the class as string
g4.onclick = () => {
  g4.classList.toggle("done"); //if the class added will remove else will add the class
};
//-----------------------------------------------
g4.style.color = "blue";
g4.style.cssText = "padding:10px;font-weight:bold;text-align:center;";
g4.style.setProperty("text-align", "center", "!important");
document.styleSheets[0].cssRules[0].style.setProperty("display", "inline");
document.styleSheets[0].cssRules[0].style.removeProperty("display", "inline");

g4.after("lllllllll"); //add out side the element
g4.before("lllllllll"); //add out side the element
let kl = document.createElement("span");
let kl1 = document.createElement("h1");
g4.append(kl1); //add inside element in the last
g4.prepend(kl); //add inside element in the start
let travers = document.getElementById("tra"); //.cloneNode(true);//clone node that is mean wil take a copy of element and the para f || t responsable about take copy with content or not
travers.nextElementSibling.remove();
travers.nextElementSibling.remove();
travers.nextSibling.remove();
travers.parentElement.remove();
//---------------------------------------------------addeventlistener---------------------------------------------------
let pq = document.createElement("p");
let txt = document.createTextNode("event");
pq.appendChild(txt);
document.body.appendChild(pq);

pq.onclick = function () {
  let c = pq.cloneNode(true);

  c.setAttribute("class", "clo");
  c.className = "cloned";
  document.body.appendChild(c);
};

document.body.addEventListener("click", function (theEvent) {
  if (theEvent.target.className === "cloned") {
    console.log("i am cloned");
  }
});
//------------------------------------timeout------------------ interval
let stop;

stop = setTimeout(function () {
  let p = document.createElement("p");
  let txt = document.createTextNode("event");
  p.appendChild(txt);
  document.body.append(p);
  console.log(stop);
}, 3000);

let bc = document.createElement("button");
let txt1 = document.createTextNode("stop");
bc.appendChild(txt1);
document.body.appendChild(bc);
bc.onclick = function () {
  clearTimeout(stop);
};
//----
let stop1;
let ps = document.createElement("p");
let txts = document.createTextNode("10");
ps.appendChild(txts);
document.body.appendChild(ps);

let bs = document.createElement("button");
let txt1s = document.createTextNode("stop");
bs.appendChild(txt1s);
document.body.appendChild(bs);
let aau = 0;
bs.onclick = function () {
  if (aau & 1) clearTimeout(stop1);
  else {
    stop1 = setInterval(function () {
      ps.innerHTML -= 1;
      if (ps.innerHTML === "0") clearTimeout(stop1);
    }, 1000);
  }
  aau++;
};
// -------------------------------------------------------------------------------------------------------
// console.log(location.href);
// location.href = "https://google.com";
// console.log(location.host); //return the host without port
// console.log(location.hostname); //with port
// console.log(location.protocol); //protocol like http or https ...etc
// console.log(location.hash); //used if you add a bookmark ..return the id
// console.log(location.reload());
// console.log(location.replace()); //change the location href url but not save the history
// console.log(location.assign()); //change the location href url but save the history
// console.log(history.back());
// console.log(history.forward());
// console.log(history.length); //number of page opened in history
// console.log(history.go()); //accept numbers negative value and positive if negative will go back else will go forward
// window.open("https://google.com", "", "width=400,height=400, top= 300px ");
// //window.close();
// window.scrollTo({
//   top: 200,
//   left: 200,
//   behavior: "smooth",
// });
// window.scrollBy(30, 70);
// let btn = document.getElementById("a");
// window.onscroll = function () {
//   if (window.scrollY >= 11000) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// };
window.localStorage.setItem("color", "red");
window.localStorage.setItem("font-size", "30px");
window.localStorage.setItem("border", "2px solid black");
console.log(window.localStorage.getItem("color"));
window.localStorage.removeItem("color"); //just remove one item
console.log(window.localStorage.key(0)); //return the key in obj
//window.localStorage.clear();//delete all items in localstorage
window.sessionStorage.setItem("color", "red"); //^
window.sessionStorage.setItem("font-size", "30px"); //^
window.sessionStorage.setItem("border", "2px solid black"); //^ session storage save your information but if close the tab or window will erase all information ...used in form
//add to html to work  //<!-- <button id="a">UP</button> -->
let myFrinds = ["ahemd", "sayed", "ali", ["shady", "amr", ["kareem", "gamal"]]];
let [, , , [a1, , [, b1]]] = myFrinds;
console.log(a1);
console.log(b1);
let book = "video";
let video = "book";
console.log(book);
console.log(video);
[book, video] = [video, book]; //swap
console.log(book);
console.log(video);
var user1z = {
  name: "yousef",
  age: 24,
  title: "developer",
  salary: "3000$",
  country: {
    k: "ksa",
    e: "egypt",
    s: "syria",
    bro: {
      j: "jordan",
      p: "palstine",
    },
  },
};

let { name, age, title, salary } = user1z; //destaructuring the obj you have to redeclare(name,age,title,salary) the variable with the same name property in obj
console.log(name);
console.log(age);
console.log(title);
console.log(salary);
let { name: nz, age: ag, title: tz, salary: s, color: co = "black" } = user1z; //destaructuring the obj you have to redeclare(name,age,title,salary) the variable with the same name property in obj
console.log(nz); //if you wanna rename the vaiable in destructuring in obj use the (:) after that add new name like in this exapmle
console.log(ag);
console.log(tz);
console.log(s);
let { j: jo, p: psS } = user1z.country.bro; //remember you have to call by the same name in the obj and if you want rename it
console.log(jo);
console.log(psS);

let chosen = 1;
let myFriend = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
let {
  title: tt,
  age: gg,
  available: ava,
  skills: [, last],
} = myFriend[chosen - 1];
console.log(tt);
console.log(gg);
if (ava) console.log("available");
else console.log("not available");
console.log(last);

let arrd = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
let set = new Set(arrd);
console.log(set.size);
console.log(set.add(15));
if (set.delete(1)) console.log("deleted");
if (set.has(8)) console.log("found it");
console.log(set);

let iterator = set.keys();

while (!iterator.next(0).done) {
  console.log(iterator);
}
//-------------------------------------------------------------map-----------------------------------------------------------------
let map1 = new Map([
  ["name", "yousef"],
  ["agr", 22],
  [false, "boolean"],
]);
map1.set("hello", function () {
  console.log("hello world");
});
console.log(map1.get("name"));
console.log(map1.get("agr"));
console.log(map1.get(false));
console.log(map1.get("hello"));
console.log(map1.size);
console.log(map1.delete("name"));
console.log(map1.has("agr"));
let itr = map1.keys();
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
map1.clear();
//-------------------------------------------------------------map-----------------------------------------------------------------
let arru = [6, 1, 2, 2, 4, 5, 6, 5, 5, 9, 11, 17];
console.log(...Array.from(new Set(arru))); //note about (...) this i can concat two of array or obj in one var
// or i can extract any thing to array or i can copy array or obj and used in math obj cuz i need to extract the values
// to let the function turn on

console.log(Array.from("hiiamjoe")); //this method make a new array from any argumeants;

function af() {
  return Array.from(arguments);
}
console.log(af(6, 1, 2, 2, 4, 5, 6, 5, 5, 9, 10));

let copywithin = [10, 20, 30, 40, 50, "A", "B"];
//console.log(copywithin.copyWithin(-6, -2)); //the target argu.. mean the destination then start then end and accept negative value
console.log(copywithin.copyWithin(1, -2, -1));

let xs = arru.some((e) => e > 4);
let ncheck = 20;
let So = arru.some((e) => {
  return e >= ncheck;
});
let onj = {
  avg: 15,
  min: 10,
  max: 20,
};
let som = arru.some(function (e) {
  //just one element have to avoid the condition to return true
  return e >= this.avg;
}, onj /*this refrance on onj object*/);
console.log(xs);
console.log(So);
console.log(som);

let eve = arru.every(function (e) {
  //must all elements avoid the condition to return true
  return e < this;
}, ncheck);
console.log(eve);
//---------------------------------------------------------RegExp-----------------------------------------
let stro1 = "com online org jo shop net";
let Regex = new RegExp("com", "ig");
console.log(stro1.match(Regex));
let stro =
  ".com .online\
 .org\
  .jo\
  .shop .net";
//let Regex = new RegExp("Com", "ig");
let reex = /.(com)/gim;
console.log(stro.match(reex));

let srt = "yo12 yo1212yo 12yo 1yo2 34yo 45yo 76yo";
let rex = /[0-9][0-9]yo/gim;
console.log(srt.match(rex));

let sti = "djfJKskljd@JGF@#$kdvDKNDSG356lkid%&678*(gfdbgJ))KFNkfjds45lkKNDS";
let rx = /[^a-z]/gim; // ^ thats mean (not)
console.log(...sti.match(rx));
let letteres = /[^a-z | ^A-Z]/gm;
console.log(sti.match(letteres));
letteres = /[^a-zA-Z0-9]/gm;
console.log(sti.match(letteres));
document.write(`😄`);
