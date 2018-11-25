

if (localStorage["title"])
{
    document.getElementById("heading").innerHTML = localStorage["title"];
} else {
    document.getElementById("heading").innerHTML = "Title";
}

if (localStorage["content"])
{
    document.getElementById("content").innerHTML = localStorage["content"];
} else {
    document.getElementById("content").innerHTML = "Note Body - Saved using localStorage";
}

function saveItems() {
  localStorage["title"] = document.getElementById("heading").innerHTML; //Sets heading div to localStorage['title'] 
  localStorage["content"] = document.getElementById("content").innerHTML; //Sets content div to localStorage['content']
  console.log("saving... ", localStorage['title'])
};