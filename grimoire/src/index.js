gr(() => {
  const main = gr("#main");
  setTimeout(() => {
    main("#green-mesh").setAttribute("position", "3,0,0");
  }, 1000);
});
