<script setup lang="ts">
import { LOCALE } from './i18n';

const { t, setLocale } = useI18n();

const objArr = ref([
  {
    label: 'English',
    value: LOCALE.EN_US
  },
  {
    label: '繁體中文',
    value: LOCALE.ZH_TW
  }
])

const onChangeLocale = (e: Event) => {
  const _target = e.target as HTMLSelectElement;
  const _locale = _target.value as LOCALE;
  _locale && setLocale(_locale);
};
</script>

<template>
  <main class="flex justify-center items-center bg-zinc-200 h-screen">
    <div>
      <select @change="onChangeLocale" class="mb-2">
        <template v-for="item in objArr" :key="item.value">
          <option :value="item.value">{{ item.label }}</option>
        </template>
      </select>

      <div>
        <div>{{ t('message.goodbye') }}</div>
        <div>{{ t('message.welcome') }}</div>
        <div>{{ t('description') }}</div>
      </div>
    </div>

    <template v-if="false">
      <NuxtRouteAnnouncer />
      <NuxtWelcome />
    </template>
  </main>
</template>
