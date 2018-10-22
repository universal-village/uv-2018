<template lang="html">

  <g>
    <polygon :points="points"></polygon>
    <circle cx="100" cy="100" r="80"></circle>
    <circle cx="100" cy="100" r="60"></circle>
    <circle cx="100" cy="100" r="40"></circle>
    <circle cx="100" cy="100" r="20"></circle>
  </g>

</template>

<script lang="js">
let valueToPoint = function (value, index, total) {
  var x = 0
  var y = -value * 0.8
  var angle = Math.PI * 2 / total * index
  var cos = Math.cos(angle)
  var sin = Math.sin(angle)
  var tx = x * cos - y * sin + 100
  var ty = x * sin + y * cos + 100
  return {
    x: tx,
    y: ty
  }
}
export default {
  name: 'polygraph',
  props: ['stats'],
  mounted () {

  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {
    points: function () {
      var total = this.stats.length
      return this.stats.map(function (stat, i) {
        var point = valueToPoint(stat.value, i, total)
        return point.x + ',' + point.y
      }).join(' ')
    }
  }
}
</script>

<style scoped lang="css">
  polygon {
    fill: #31F677;
    z-index: 1;
  }
  circle {
    fill: transparent;
    opacity: .5;
    stroke: #42b983;
  }
</style>
