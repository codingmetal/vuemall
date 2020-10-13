<template>
  <div id="detailParams" v-if="Object.keys(itemParams).length != 0" class="detail-params border-bottom">

    <div class="size">
      <table>
        <tr v-for="list in filterSize(itemParams.rule.tables[0])">
          <td v-for="item in list">
            {{item}}
          </td>
        </tr>
      </table>
    </div>
<!--    {{itemParams}}-->
    <div class="params">
      <table>
        <tr v-for="item in itemParams.info.set">
          <td class="params-key">{{item.key}}</td>
          <td class="params-value">{{item.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: "DetailParams",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    filterSize(arr) {
      return arr.filter((sizes) => {
        return sizes[1] != "-"
      })
    }
  }
}
</script>

<style scoped>
  .detail-params {
    padding: 10px 15px
  }
  .size{border-bottom: 2px solid #cbcbcb;font-size: 14px}
  .size table{width: 100%;}
  .size table tr {border-bottom: 1px solid #cbcbcb;}
  .size table tr td {
    padding: 15px 10px;
    vertical-align: baseline;
  }
  .size table tr td:nth-child(1) {
    white-space: nowrap;
  }
  .size table tr td:nth-child(1) {padding-right: 50px}

  .params {font-size: 14px}
  .params table {width: 100%}
  .params table tr {border-bottom: 1px solid #cbcbcb}
  .params table tr td {
    padding: 15px 10px;
    vertical-align: middle  ;
  }
  .params table tr td.params-key {
    padding-right: 50px;
    white-space: nowrap;
  }

  .params table tr td.params-value {color: var(--color-tint)}

</style>
