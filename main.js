// מערכים גלובלים שישמשו אותנו בכל העמודים

// Check if each visitor object has the inUse property; if not, initialize it to false

// Save the updated visitors array back to local storage
let onlineVisitors = JSON.parse(localStorage.getItem("onlineVisitors")) || [];
console.log(onlineVisitors);
let visitors = [
  {
    name: "John Smith",
    coins: 50,
  },
  {
    name: "Emily Johnson",
    coins: 50,
  },
  {
    name: "Michael Williams",
    coins: 50,
  },
  {
    name: "Jessica Brown",
    coins: 50,
  },
  {
    name: "Christopher Jones",
    coins: 50,
  },
  {
    name: "Ashley Davis",
    coins: 50,
  },
  {
    name: "Matthew Miller",
    coins: 50,
  },
  {
    name: "Amanda Wilson",
    coins: 50,
  },
  {
    name: "David Moore",
    coins: 50,
  },
  {
    name: "Sarah Taylor",
    coins: 50,
  },
  {
    name: "James Anderson",
    coins: 50,
  },
  {
    name: "Jennifer Thomas",
    coins: 50,
  },
  {
    name: "Robert Jackson",
    coins: 50,
  },
  {
    name: "Elizabeth White",
    coins: 50,
  },
  {
    name: "Daniel Harris",
    coins: 50,
  },
  {
    name: "Melissa Martin",
    coins: 50,
  },
  {
    name: "William Thompson",
    coins: 50,
  },
  {
    name: "Linda Garcia",
    coins: 50,
  },
  {
    name: "Joseph Martinez",
    coins: 50,
  },
  {
    name: "Karen Robinson",
    coins: 50,
  },
];

let animals = [
  {
    name: "Lion",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    Image:"images/lion.jpg"
  },
  {
    name: "Elephant",
    isPredator: false,
    weight: 1200,
    height: 200,
    color: "grey",
    habitat: "land",
    Image:"images/elephant.avif"
  },
  {
    name: "Giraffe",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    Image:"images/giraffe.png"
  },
  {
    name: "Tiger",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    Image:"images/tiger.webp"
  },
  {
    name: "Monkey",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    Image:"images/monkey.jpg"
  },
  {
    name: "Kangaroo",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    Image:"images/kangaroo.avif"
  },
  {
    name: "Penguin",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "sea",
    Image:"images/penguin.jpg"
  },
  {
    name: "Zebra",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    Image:"images/zebra.webp"
  },
  {
    name: "Cheetah",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    Image: "images/cheetah.jpg"
  },
];

// פונקציה זו טוענת עבורכם את המידע ההתחלתי של האפליקציה, במידה וקיים מידע בלוקל סטורג׳, היא תקח אותו משם
// אל תשנו את הקוד בפונקציה הזו כדי לשמור על תקינות הטמפלייט
function generateDataset() {
  if (localStorage.getItem("visitors")) {
    visitors = JSON.parse(localStorage.getItem("visitors"));
  } else {
    localStorage.setItem("visitors", JSON.stringify(visitors));
  }
  if (localStorage.getItem("animals")) {
    animals = JSON.parse(localStorage.getItem("animals"));
  } else {
    localStorage.setItem("animals", JSON.stringify(animals));
  }

  console.log(visitors);
  console.log(animals);
}
generateDataset();

//********************** */
function logout() {
  //ממשו את הלוגיקה שמתנתקת מאורח מחובר
  // שימו לב לנקות את השדה המתאים בלוקל סטורג'
  let onlineVisitors = JSON.parse(localStorage.getItem("onlineVisitors")) || [];

  if (onlineVisitors.length === 0) {
    console.log("No visitor is logged in.");
  } else {
    let visitorName = onlineVisitors[onlineVisitors.length - 1].visitorName; // Get the name of the last visitor in the array

    let confirmLogout = confirm(
      visitorName + " is already login, please log out first "
    );
    if (confirmLogout) {
      onlineVisitors.pop(); // Remove existing visitor
      localStorage.setItem("onlineVisitors", JSON.stringify(onlineVisitors));
      console.log("Logged out successfully.");
      console.log(onlineVisitors);
    } else {
      console.log("Logout canceled.");
    }
  }
}
