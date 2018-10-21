<template>
  <div class="game">
    <!--this is a game-->
    <!--{{gameBroad}}-->
    <div class="broad" @click="test">
      <!--<div class="cell" v-for="(cell, index) in gameBroad" :index="index" :data-index="index">-->
      <!--{{cell}}-->
      <!--</div>-->
      <div class="row" v-for="(row, index) in gameBroad" :index="index" :data-row="index" :row="row">
        <div class="cell"
             :class="cell.status.color"
             v-for="(cell, index) in row"
             :index="index"
             :data-color="cell.status.color"
             @click="play">
          {{cell.status.color}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "game",
    data: function () {
      return {
        gameBroad: {}
      }
    },

    computed: {},

    created: function () {
      this.initGame()
    },

    methods: {
      test: function (event) {
        // console.warn('event', event.target.dataset.index)
      },
      play: function (event) {
        var color = event.target.dataset.color
        // this.gameBroad[2][3].status.color = 'blue'
        console.warn(color)
      },
      initGame: function () {
        console.warn('init')
        var broad = []
        var cell = {
          status: {
            color: 'aa'
          },
          position: {},

        }
        for (var i = 0; i < 15; i++) {
          var row = []
          for (var j = 0; j < 15; j++) {
            cell.position = {
              row: i,
              column: j
            }
            row.push(cell)
          }
          broad.push(row)
        }
        // console.warn(this.gameBroad)
        this.gameBroad = broad
      }
    }
  }
</script>

<style scoped>

  .row {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
  }

  .cell {
    background-color: red;
    width: 6.6%;
    height: 40px;
    border-bottom: 1px solid #47494e;
    border-right: 1px solid #47494e;
  }

  .blue {
    background-color: blue;
  }
</style>
