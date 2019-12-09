<template>
  <div class="data">
    <h1>This is an Data page </h1>
    <h1>
      {{ response.title }}
    </h1>
    <h2>
      {{ response.description }}
    </h2>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Data',
  metaInfo () {
    return {
      title: this.response.title,
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: this.response.description
        }
      ]
    }
  },
  data () {
    return {
      description: 'I am Data',
      result: this.$route.params.title,
      response: ''
    }
  },
  mounted () {
    console.log(this.result)
    if (this.result) {
      axios.get('http://localhost:3004/events?title=' + this.result).then(res => {
        console.log(res.data[0].description)
        this.response = res.data[0]
      })
    }
  }
}
</script>
