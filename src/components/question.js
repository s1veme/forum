import { cleanString } from "../utils/cleanStr";

class Question {
  constructor({ title, img, text, id, tags, owner, date }, parent) {
    this.title = title;
    this.img = img;
    this.text = text;
    this.id = id;
    this.tags = tags;
    this.owner = owner;
    this.date = date;
    this.parent = parent;
    this.render();
  }
  render() {
    const question = document.createElement("div");
    question.classList.add("question");
    const isPC = matchMedia("(max-width: 400px)").matches;
    question.innerHTML = `
    <div class="question__title_wrap">
    <a href = ${`/question/${this.id}`} >
    
      <div class="question__title">${cleanString(
        this.title,
        !isPC ? 20 : 5
      )}</div>
      
    </div>
    </a>
    <div class="question__text">${cleanString(
      this.text,
      !isPC ? 100 : 20
    )}...</div>
    <div class="question__button_wrap">
      <div class = "question__date">${this.date}</div>
      <div class="question__author">${this.owner}</div>
      
    </div>
  
    `;

    this.parent.append(question);
  }
}

const renderQuestion = (posts) =>
  posts.map((el) => new Question(el, document.querySelector(".questions")));

export { Question, renderQuestion};
