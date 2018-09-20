<template>
  <div>
    <h2>测试版本1</h2>
    <p>发表时间：{{ dur1.toString() }}</p>
    <p>发表于：{{ dur1 | calFilter }}</p>
    <p>发表时间：{{ dur2.toString() }}</p>
    <p>发表于：{{ dur2 | calFilter }}</p>
    <p>发表时间：{{ dur3.toString() }}</p>
    <p>发表于：{{ dur3 | calFilter }}</p>

    <h2>测试版本2</h2>
    <p>发表时间：{{ dur1.toString() }}</p>
    <p>发表于：{{ dur1 | calFilter2 }}</p>
    <p>发表时间：{{ dur2.toString() }}</p>
    <p>发表于：{{ dur2 | calFilter2 }}</p>
    <p>发表时间：{{ dur3.toString() }}</p>
    <p>发表于：{{ dur3 | calFilter2 }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      dur1: new Date(2018, 8, 20, 10, 24, 0),
      dur2: new Date(2018, 8, 10, 10, 24, 0),
      dur3: new Date(2018, 3, 5, 10, 24, 0)
    }
  },
  filters: {
    calFilter: function (preDate) {
      if (!preDate) {
        return '0 秒前'
      }
      let dur = Math.floor(((new Date()).getTime() - preDate.getTime()) / 1000)

      if (dur < 0) { // 时间超前
        return '0 秒前'
      } else if (dur < 31536000) { // 发表时间不超过1年,可调
        let day = Math.floor(dur / 86400) // 天显示
        if (day > 0) {
          return `${day} 天前`
        }

        let hour = Math.floor((dur % 86400) / 3600)
        if (hour > 0) { // 小时显示
          return `${hour} 小时前`
        }

        let minute = Math.floor((dur % 86400 % 3600) / 60)
        if (minute > 0) { // 分钟显示
          return `${minute} 分钟前`
        }

        let second = Math.floor(dur % 86400 % 3600 % 60) // 秒显示
        return `${second} 秒前`
      } else { // 时间超过一年，打印日期
        return `${preDate.getFullYear()}-${preDate.getMonth() + 1}-${preDate.getDate()}`
      }
    },

    calFilter2: function (preDate) {
      if (!preDate) {
        return '0 秒前'
      }
      let nowDate = new Date()
      let dur = Math.floor((nowDate.getTime() - preDate.getTime()) / 1000)

      if (dur < 0) { // 时间超前
        return '0 秒前'
      } else if (dur < 31536000) { // 发表时间不超过1年,可调
        let day = Math.floor(dur / 86400)
        if (day > 0) { // 天表示
          if (day >= 31) { // 天数大于31，用月表示
            if (nowDate.getFullYear() - preDate.getFullYear() > 0) {
              return `${nowDate.getMonth() + 12 - preDate.getMonth()} 个月前`
            } else {
              return `${nowDate.getMonth() - preDate.getMonth()} 个月前`
            }
          }
          if (day >= 7) { // 大于7小于31
            return `${Math.floor(day / 7)} 周前`
          } else return `${day} 天前`
        }

        let hour = Math.floor((dur % 86400) / 3600)
        if (hour > 0) { // 小时表示
          return `${hour} 小时前`
        }

        let minute = Math.floor((dur % 86400 % 3600) / 60)
        if (minute > 0) { // 分钟表示
          return `${minute} 分钟前`
        }

        let second = Math.floor(dur % 86400 % 3600 % 60) // 秒表示
        return `${second} 秒前`
      } else { // 时间超过一年，打印日期
        return `${preDate.getFullYear()}-${preDate.getMonth() + 1}-${preDate.getDate()}`
      }
    }
  }
}
</script>
