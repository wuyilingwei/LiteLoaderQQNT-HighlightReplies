export function onLoad() {
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        const targetElements = document.querySelectorAll(
          "span.q-context-menu-item__text"
        );
        targetElements.forEach((element) => {
          if (element.textContent === "回复") {
            element.parentNode.style.color = "red";
          }
        });
      }
    }
  });

  const targetNode = document.body;
  const config = { childList: true, subtree: true };
  observer.observe(targetNode, config);

  LiteLoaderQQNT.rendererReady();
}
