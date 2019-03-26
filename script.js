function useinstadata(data) {
console.log(data);  
}


window.addEventListener("load", function () {
  fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=11928456755.5f06755.01a481de03cf4ff98edf462b7aef617e")
    .then(res => res.json())
    .then(useinstadata);
});
