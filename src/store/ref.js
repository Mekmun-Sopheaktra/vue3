import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

// export action name
export const useRefStore = defineStore('store-ref', () => {
  const mapRef = ref();
  const legendRef = ref();
  const offcanvasRef = ref();
  const modalRef = ref();
  const helperRef = ref();
  const settingRef = ref();
  const cookieoffcanvasRef = ref();

  return {
    mapRef: computed(() => mapRef),
    legendRef: computed(() => legendRef),
    offcanvasRef: computed(() => offcanvasRef),
    modalRef: computed(() => modalRef),
    helperRef: computed(() => helperRef),
    settingRef: computed(() => settingRef),
    cookieoffcanvasRef: computed(() => cookieoffcanvasRef),
  };
});
