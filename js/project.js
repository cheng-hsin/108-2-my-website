//class

class Project {
  constructor(id, title, image, desc, link) {
    //商品資料的建構子
    this.id = id;
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.link = link;
  }
}

class ProjectTitle {
  items = [];
  render() {
    const titleEl = document.createElement("div");
    titleEl.innerHTML = `
      <div class="col-md-12 heading-section text-center ftco-animate">
        <h2 class="mb-4">My Projects</h2>
      </div>
      `;
    titleEl.className = "row no-gutters justify-content-center pb-5";
    return titleEl;
  }
}

class ProjectItem {
  constructor(project) {
    this.project = project;
  }

  render() {
    const projEl = document.createElement("div"); //產生li標籤
    projEl.className = "col-md-4"; //增加li標籤的class
    projEl.innerHTML = `
    <div
    class="project img ftco-animate d-flex justify-content-center align-items-end"
    style="
      background-image: url(${this.project.imageUrl});
    "
  >
    <div class="overlay"></div>
    <div class="text p-4">
      <h3><a id="${this.project.id}" data-link="${this.project.link}">${this.project.title}</a></h3>
      <span>${this.project.description}</span>
    </div>
  </div>
        `;
    return projEl;
  }
}

class ProjectList {
  projects = [
    //商品清單
    new Project(
      "p1",
      "Video player",
      "../images/project/project-image01.png",
      "A video player!",
      "video-player/index.html"
    ),
    new Project(
      "p2",
      "Unconventional calculator",
      "../images/project/project-image02.png",
      "A unconventional calculator!",
      "Unconventional-Calculator-finished/index.html"
    ),
    new Project(
      "p3",
      "Music player",
      "../images/project/project-image03.png",
      "A music player!",
      "music-player/index.html"
    ),
    new Project(
      "p4",
      "Monster killer",
      "../images/project/project-image04.png",
      "A game which you might like - or not.",
      "Monster-Killer/index.html"
    ),
    new Project(
      "p5",
      "Food and Grocery Database",
      "../images/project/project-image05.png",
      "Check the nutrition facts of food",
      "API-project/index.html"
    ),
    new Project(
      "p6",
      "Class dom",
      "../images/project/project-image06.png",
      "Add a project to your database.",
      "project-database/index.html"
    ),
  ];

  //   constructor() {}

  render() {
    const projList = document.createElement("div"); //產生ul標籤
    projList.className = "row"; //增加ul標籤的class
    projList.id = "projects";
    for (const proj of this.projects) {
      //抓取單一商品資料
      const projectItem = new ProjectItem(proj); //宣告商品產生器
      const projEl = projectItem.render(); //呼叫商品資訊產生器
      projList.append(projEl); //呼叫li產生器prodEl
    }
    return projList; //回傳prodList
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    const title = new ProjectTitle();
    const titleEl = title.render();
    const projectList = new ProjectList();
    const projListEl = projectList.render();

    renderHook.append(titleEl);
    renderHook.append(projListEl);
  }
}

const shop = new Shop(); //new是產生物件，配一個記憶體給Shop
shop.render(); //有了記憶體後才能直接呼叫

// console.log(new Product());

const projectList = new ProjectList();
projectList.render(); //呼叫整個產生器

//class end

//遮罩
const addMovieModal = document.getElementById("add-modal");
//const startAddMovieButton = document.getElementById("show-btn");
const projects = document.getElementById("projects");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const display = document.getElementById("display");

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
  display.innerHTML = `<iframe
  src=""
  height="620"
  frameborder="0"
></iframe>`;
};

// const showMovieModal = (e) => {
//   // function() {}
//   addMovieModal.classList.add("visible");
//   toggleBackdrop();
//   display.innerHTML = `<iframe
//   src="${e.target.dataset.link}"
//   height="620"
//   frameborder="0"
// ></iframe>`;
//   console.log(e.target.dataset.link);
// };

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
};

const backdropClickHandler = () => {
  closeMovieModal();
  toggleBackdrop();
};

//startAddMovieButton.addEventListener("click", showMovieModal);
projects.addEventListener("click", (e) => {
  console.log(e.target);
  addMovieModal.classList.add("visible");
  toggleBackdrop();
  display.innerHTML = `<iframe
  src="${e.target.dataset.link}"
  height="620"
  frameborder="0"
></iframe>`;
});
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
//遮罩end
