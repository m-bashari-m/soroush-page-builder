import { templates } from "../data/data.js";

const templatesSection = document
  .getElementsByClassName("templates--wrapper")
  .item(0);

templates.forEach((template) => {
  const templateBtn = createTemplateButton(template);
  templatesSection.appendChild(templateBtn);
});

function createTemplateButton(template) {
  const templateBtn = document.createElement("button");
  templateBtn.className = "btn-solid btn-full whitespace-nowrap";

  const p = document.createElement("p");
  p.innerText = template.title;

  templateBtn.appendChild(p);

  return templateBtn;
}
