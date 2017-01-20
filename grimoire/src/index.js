import gr from "grimoirejs";

gr(() => {
  const main = gr("#main");
  setTimeout(() => {
  alert(1);
    main.setAttribute("position", "3,0,0");
  }, 1000);
});
