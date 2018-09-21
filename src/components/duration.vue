<template>
  <div>
    <h2>测试版本1</h2>
    <p>发表时间：{{ dur1 }}</p>
    <p>发表于：{{ dur1 | relative_date1 }}</p>
    <p>发表时间：{{ dur2 }}</p>
    <p>发表于：{{ dur2 | relative_date1 }}</p>
    <p>发表时间：{{ dur3 }}</p>
    <p>发表于：{{ dur3 | relative_date1 }}</p>

    <h2>测试版本2</h2>
    <p>发表时间：{{ dur1 }}</p>
    <p>发表于：{{ dur1 | relative_date2 }}</p>
    <p>发表时间：{{ dur2 }}</p>
    <p>发表于：{{ dur2 | relative_date2 }}</p>
    <p>发表时间：{{ dur3 }}</p>
    <p>发表于：{{ dur3 | relative_date2 }}</p>
  </div>
</template>

<script>
export default {
  name: 'Duration',
  data () {
    return {
      dur1: new Date(2018, 9, 10, 10, 24, 0),
      dur2: new Date(2018, 8, 21, 12, 24, 0),
      dur3: new Date(2018, 8, 21, 12, 34, 0)
    }
  },
  filters: {
    relative_date1 (date) {
      if (!date) return ''

      const duration = ~~(((new Date()).getTime() - date.getTime()) / 1000)
      if (duration < 0) return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

      if (duration < 31536000) { // 发表时间不超过1年,可调
        // 天显示
        const day = ~~(duration / 86400)
        if (day > 0) return `${day} 天前`
        // 小时显示
        const hour = ~~((duration % 86400) / 3600)
        if (hour > 0) return `${hour} 小时前`
        // 分钟显示
        const minute = ~~((duration % 86400 % 3600) / 60)
        if (minute > 0) return `${minute} 分钟前`
        // 秒显示
        const second = ~~(duration % 86400 % 3600 % 60)
        return `${second} 秒前`
      }
      // 时间超过一年，打印日期
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    },

    relative_date2 (date) {
      if (!date) return ''

      const now = new Date()
      const duration = ~~((now.getTime() - date.getTime()) / 1000)
      if (duration < 0) return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

      if (duration < 31536000) { // 发表时间不超过1年,可调
        const day = ~~(duration / 86400)
        if (day > 0) {
          // 天数大于31，用月表示
          if (day >= 31) {
            if (now.getFullYear() - date.getFullYear() > 0) return `${now.getMonth() + 12 - date.getMonth()} 个月前`
            else return `${now.getMonth() - date.getMonth()} 个月前`
          }
          // 大于7小于31
          if (day >= 7) return `${~~(day / 7)} 周前`
          // 7天以内
          return `${day} 天前`
        }
        // 小时显示
        const hour = ~~((duration % 86400) / 3600)
        if (hour > 0) return `${hour} 小时前`
        // 分钟显示
        const minute = ~~((duration % 86400 % 3600) / 60)
        if (minute > 0) return `${minute} 分钟前`
        // 秒显示
        const second = ~~(duration % 86400 % 3600 % 60)
        return `${second} 秒前`
      }
      // 时间超过一年，打印日期
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
  }
}
</script>
