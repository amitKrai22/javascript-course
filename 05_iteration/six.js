const coding = ['js', 'py', 'ruby', 'java', 'cpp']

const values = coding.forEach((item) =>{
    // console.log(item);
    return item // forEach not return anything so we filter.
    
})
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newnums = myNums.filter( (num) => num > 4)
// console.log(newnums);

const newNums = []

myNums.forEach( num => {
    if (num > 4){
        newNums.push(num)
    }
})
// console.log(newNums);

const books = [
    {
        "isbn":"9781593279509",
        "title":"Eloquent JavaScript, Third Edition",
        "subtitle":"A Modern Introduction to Programming",
        "author":"Marijn Haverbeke",
        "published":"2018",
        "publisher":"No Starch Press",
        "pages":472,
        "website":"http://eloquentjavascript.net/"
    },
    {
        "isbn":"9781491943533",
        "title":"Practical Modern JavaScript",
        "subtitle":"Dive into ES6 and the Future of JavaScript",
        "author":"Nicolás Bevacqua",
        "published":"2017",
        "publisher":"O'Reilly Media",
        "pages":334,
        "website":"https://github.com/mjavascript/practical-modern-javascript"
    },
    {
        "isbn":"9781593277574",
        "title":"Understanding ECMAScript 6",
        "subtitle":"The Definitive Guide for JavaScript Developers",
        "author":"Nicholas C. Zakas",
        "published":"2016",
        "publisher":"No Starch Press",
        "pages":352,
        "website":"https://leanpub.com/understandinges6/read"
    },
    {
        "isbn":"9781449365035",
        "title":"Speaking JavaScript",
        "subtitle":"An In-Depth Guide for Programmers",
        "author":"Axel Rauschmayer",
        "published":"2014",
        "publisher":"O'Reilly Media",
        "pages":460,
        "website":"http://speakingjs.com/"
    },
    {
        "isbn":"9781449331818",
        "title":"Learning JavaScript Design Patterns",
        "subtitle":"A JavaScript and jQuery Developer's Guide",
        "author":"Addy Osmani",
        "published":"2012",
        "publisher":"O'Reilly Media",
        "pages":254,
        "website":"http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
    },
    {
        "isbn":"9798602477429",
        "title":"You Don't Know JS Yet",
        "subtitle":"Get Started",
        "author":"Kyle Simpson",
        "published":"2020",
        "publisher":"Independently published",
        "pages":143,
        "website":"https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started"
    },
    {
        "isbn":"9781484200766",
        "title":"Pro Git",
        "subtitle":"Everything you neeed to know about Git",
        "author":"Scott Chacon and Ben Straub",
        "published":"2014",
        "publisher":"Apress; 2nd edition",
        "pages":458,
        "website":"https://git-scm.com/book/en/v2"
    },
    {
        "isbn":"9781484242216",
        "title":"Rethinking Productivity in Software Engineering",
        "subtitle":"",
        "author":"Caitlin Sadowski, Thomas Zimmermann",
        "published":"2019",
        "publisher":"Apress",
        "pages":310,
        "website":"https://doi.org/10.1007/978-1-4842-4221-6"
    }
]

let userbooks = books.filter( (bk) => bk.publisher === "No Starch Press")

// console.log(userbooks);

userbooks = books.filter( (bk) => bk.published >= 2015)

console.log(userbooks);
