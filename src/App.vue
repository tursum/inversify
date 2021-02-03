<template>
  <div id="app">

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { injectable, inject } from "inversify";
  import {TYPES} from './ioc/types';
  import {IWeapon} from './interfaces/IWeapon'
  import "reflect-metadata";

  @Component
  export default class App extends Vue {
    @inject(TYPES.Weapon)
    private readonly weapon!: IWeapon;

    created() {
      this.weapon.fight();
    }
  }
</script>

<style lang="scss"></style>
