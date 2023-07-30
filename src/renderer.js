export function onLoad() {
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        const targetElements = document.querySelectorAll(
          "span.q-context-menu-item__text"
        );
        targetElements.forEach((element) => {
          if (element.textContent === "回复") {
            element.parentNode.style.color = "green";
          }
          if (element.textContent === "撤回") {
            element.parentNode.style.color = "red";
          }
          if (element.textContent === "删除") {
            element.parentNode.style.color = "red";
          }
        });
      }
    }
  });

  const targetNode = document.body;
  const config = { childList: true， subtree: true };
  observer.observe(targetNode, config);

  HighlightReplies.rendererReady();
}
