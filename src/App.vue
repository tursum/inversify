<template>
  <div id="app">
    11
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import container from "./all/container";
  import TYPES from './all/types';
  import {Weapon} from './all/interfaces';
  import { inject, injectable } from 'inversify-props';
  
  @injectable()
  @Component
  export default class App extends Vue {
    @inject(TYPES.Weapon)
    private readonly katana!: Weapon;

    created() {
      this.katana.hit();
    }
  }
</script>

<style lang="scss"></style>
