<script setup lang="ts">
import type { Member, BadgeKind } from "~/data/equipe";

// Pastilles façon "type" Pokémon : libellé court, couleur pleine, liseré foncé.
const badges: Record<BadgeKind, { label: string; color: string }> = {
  ca: { label: "CA", color: "#8215c5" },
  be: { label: "BE", color: "#2c15c5" },
  pole: { label: "Pôle", color: "#15c584" },
  respo: { label: "Respo", color: "#0d8fa8" },
  membre: { label: "Membre", color: "#6b7280" },
  projet: { label: "Projet", color: "#e08a00" },
};

const props = defineProps<{ member: Member | null }>();
const emit = defineEmits<{ close: [] }>();

const panel = ref<HTMLElement | null>(null);
const closeButton = ref<HTMLButtonElement | null>(null);
let lastFocused: HTMLElement | null = null;

const primary = computed(() => props.member?.pseudo ?? props.member?.name ?? "");
const secondary = computed(() =>
  props.member?.pseudo && props.member?.name ? props.member.name : undefined
);

const initials = computed(() =>
  primary.value
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
);

const files = import.meta.glob<string>("~/assets/equipe/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const photo = computed(() => {
  const name = props.member?.photo;
  if (!name) return undefined;
  const match = Object.keys(files).find((path) => path.endsWith(`/${name}`));
  return match ? files[match] : undefined;
});

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") emit("close");
}

// Le panneau se ferme à l'Escape, et la page derrière ne doit pas défiler.
watch(
  () => props.member,
  async (member) => {
    if (member) {
      lastFocused = document.activeElement as HTMLElement | null;
      document.addEventListener("keydown", onKeydown);
      document.body.style.overflow = "hidden";
      await nextTick();
      closeButton.value?.focus();
    } else {
      document.removeEventListener("keydown", onKeydown);
      document.body.style.overflow = "";
      lastFocused?.focus();
      lastFocused = null;
    }
  }
);

// Un démontage pendant que le panneau est ouvert laisserait le scroll bloqué.
onBeforeUnmount(() => {
  document.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <!-- Pas de <Transition> ici : sa sortie dépend de requestAnimationFrame et
           de transitionend. Si le navigateur les gèle (onglet en arrière-plan),
           l'overlay reste coincé à opacity 0 et bloque tous les clics de la
           page. L'ouverture est animée en CSS, la fermeture est immédiate. -->
      <div
          v-if="member"
          class="overlay fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
          role="dialog"
          aria-modal="true"
          :aria-label="`Parcours de ${primary}`"
        >
          <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="emit('close')"></div>

          <div
            ref="panel"
            class="detail-panel relative max-h-[88vh] w-full sm:max-w-[620px] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-white/10 bg-[#131529] p-6 sm:p-8 shadow-2xl shadow-black/60"
          >
            <button
              ref="closeButton"
              type="button"
              class="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Fermer"
              @click="emit('close')"
            >
              <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!-- En-tête -->
            <div class="flex items-center gap-4 pr-10">
              <img
                v-if="photo"
                :src="photo"
                :alt="primary"
                class="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-white/10"
              />
              <div
                v-else
                class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2c15c5] via-[#8215c5] to-[#15c584] text-lg font-semibold ring-2 ring-white/10"
                aria-hidden="true"
              >
                {{ initials }}
              </div>
              <div>
                <h2 class="text-xl sm:text-2xl font-semibold leading-tight">{{ primary }}</h2>
                <p v-if="secondary" class="text-xs text-white/45">{{ secondary }}</p>
                <p class="mt-1 text-sm font-semibold text-[#15c584]">{{ member.role }}</p>
              </div>
            </div>

            <p
              v-if="member.description"
              class="mt-5 text-sm sm:text-base leading-relaxed text-white/75"
            >
              {{ member.description }}
            </p>

            <!-- Parcours -->
            <section v-if="member.parcours?.length" class="mt-7">
              <h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Parcours
              </h3>
              <ol class="relative mt-4 border-l border-white/10 pl-6">
                <li
                  v-for="(step, i) in member.parcours"
                  :key="i"
                  class="relative pb-5 last:pb-0"
                >
                  <span
                    class="absolute left-[-25px] top-[5px] h-[11px] w-[11px] rounded-full border-2"
                    :class="
                      step.highlight
                        ? 'border-[#15c584] bg-[#15c584]'
                        : 'border-white/30 bg-[#131529]'
                    "
                    aria-hidden="true"
                  ></span>
                  <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <p
                      class="text-xs font-semibold uppercase tracking-wider"
                      :class="step.highlight ? 'text-[#15c584]' : 'text-white/40'"
                    >
                      {{ step.period }}
                    </p>
                    <span
                      v-if="step.badge"
                      class="type-badge"
                      :style="{ '--badge': badges[step.badge].color }"
                    >
                      {{ badges[step.badge].label }}
                    </span>
                  </div>
                  <p class="text-sm sm:text-base text-white/80">{{ step.label }}</p>
                </li>
              </ol>
            </section>

            <!-- Projets -->
            <section v-if="member.projets?.length" class="mt-7">
              <h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Ce dont {{ primary }} est fier
              </h3>
              <div class="mt-4 space-y-3">
                <div
                  v-for="projet in member.projets"
                  :key="projet.name"
                  class="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <p class="font-semibold text-[#15c584] text-sm sm:text-base">
                    {{ projet.name }}
                  </p>
                  <p class="mt-1 text-xs sm:text-sm leading-relaxed text-white/70">
                    {{ projet.text }}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
/* Pastille de type : liseré foncé, reflet en haut et ombre portée du texte
   pour l'aspect "badge" un peu bombé des types Pokémon. */
.type-badge {
  display: inline-block;
  padding: 1px 7px 2px;
  border: 2px solid color-mix(in srgb, var(--badge) 55%, #000);
  border-radius: 4px;
  background: var(--badge);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.3), 0 1px 2px rgb(0 0 0 / 0.4);
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  line-height: 1.35;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgb(0 0 0 / 0.45);
  white-space: nowrap;
}

/* Animations d'ouverture uniquement. Une animation CSS se joue toute seule et
   ne conditionne pas le retrait de l'élément du DOM, contrairement à une
   transition Vue : même si le navigateur gèle les frames, rien ne reste bloqué. */
.overlay {
  animation: overlay-in 0.22s ease both;
}

.detail-panel {
  animation: panel-in 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes overlay-in {
  from {
    opacity: 0;
  }
}

@keyframes panel-in {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
  }
}

@media (prefers-reduced-motion: reduce) {

  .overlay,
  .detail-panel {
    animation: none;
  }
}
</style>
