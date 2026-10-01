// Directive `v-reveal` : fait apparaître un élément en fondu + glissement
// quand il entre dans le viewport. `v-reveal="150"` décale l'animation de 150ms.
//
// Le plugin est universel (pas `.client`) : Vue a besoin de la directive au
// rendu serveur, sinon il plante sur `getSSRProps`. Côté serveur elle ne fait
// rien, donc le HTML reste visible sans JS.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("reveal", {
    getSSRProps: () => ({}),

    mounted(
      el: HTMLElement & { _reveal?: IntersectionObserver; _revealTimer?: number },
      binding
    ) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!("IntersectionObserver" in window)) return;

      el.classList.add("reveal");
      if (binding.value) el.style.transitionDelay = `${binding.value}ms`;

      const show = () => {
        el.classList.add("reveal-in");
        observer.disconnect();
        clearTimeout(el._revealTimer);
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) show();
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );

      observer.observe(el);
      el._reveal = observer;

      // Filet de sécurité : si l'observer ne se déclenche jamais (onglet en
      // arrière-plan, moteur exotique), on affiche quand même le contenu.
      el._revealTimer = window.setTimeout(show, 4000);
    },

    unmounted(el: HTMLElement & { _reveal?: IntersectionObserver; _revealTimer?: number }) {
      el._reveal?.disconnect();
      clearTimeout(el._revealTimer);
    },
  });
});
