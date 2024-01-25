import { reactive } from 'vue';

const cache: Record<string, Record<string, any>> = {};
export default function useCache(key: string) {
  if (!cache[key]) cache[key] = reactive({});
  return cache[key];
}
