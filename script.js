function useinstadata(instas) {
  let pe = document.querySelector("#instas");
  instas.data.forEach(item => {
    let el;
    if (item.videos) {
      el = document.createElement("video");
      el.setAttribute("src", item.videos.standard_resolution.url);
      el.setAttribute("width", item.videos.standard_resolution.width);
      el.setAttribute("height", item.videos.standard_resolution.height);
      el.setAttribute("poster", item.images.standard_resolution.url);
      el.setAttribute("autoplay","autoplay");
      el.setAttribute("muted", "muted");
      el.setAttribute("loop", "loop");
      el.setAttribute("crossorigin", "anonymous");
    }
    else {
      el = document.createElement("img");
      el.setAttribute("src", item.images.standard_resolution.url);
      el.setAttribute("width", item.images.standard_resolution.width);
      el.setAttribute("height", item.images.standard_resolution.height);
      el.setAttribute("alt", item.caption && item.caption.text);
    }
    pe.append(el);
  });


}

window.addEventListener("load", function () {
  fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=11928456755.5f06755.01a481de03cf4ff98edf462b7aef617e")
    .then(res => res.json())
    .then(data => {
      document.querySelector("#butikken").remove();
      console.log(data);
      useinstadata(data);
    });
});
