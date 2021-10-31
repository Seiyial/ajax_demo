<template>
  <div>
    <div>
      <button @click="column -= 1">⬅️</button>
      <button @click="row -= 1">⬆️</button>
      <button @click="row += 1">⬇️</button>
      <button @click="column += 1">➡️</button>
      &nbsp;
      <b>{{ column }}, {{ row }}</b>
    </div>
    <table class="grid">
      <tbody>
        <tr
          v-for="(_, rowIndex) in [0, 1, 2, 3 ,4]"
          :key="rowIndex"
        >
          <td
            v-for="(_, colIndex) in [0, 1, 2, 3, 4]"
            :key="colIndex"
            class="cell"
          >
            <svg
              v-if="colIndex == column && rowIndex == row"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    row: 0,
    column: 0
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .grid {
    border-collapse: separate;
  }
  .grid .cell {
    background-color: lightgrey;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 2px;
    height: 30px;
    width: 30px;
  }
  button {
    background-color: lightsalmon;
    color: white;
    outline: 0;
    border: 0;
    margin: 5px;
  }
  b {
    color: darkcyan;
  }
</style>
