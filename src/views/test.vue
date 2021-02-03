<template>
  <div>
    <a href="http://localhost:9528/api/chengpinyoudepot/excel/template" target="_blank">下载模板</a>
    <label class="file-select">
      <div class="select-button">
        <span>Select File</span>
      </div>
      <input type="file" @change="handleFileChange" ref="inputs"/>
    </label>

  </div>
</template>
<script>
import { chengpinDownLoad, chengpinUpload } from '@/api/fill'

export default {
  name: 'test',
  data() {
    return {
      href: ''
    }
  },
  created() {
    // this.chengpinDownLoad()
  },
  methods: {
    handleFileChange(e) {
         let formData = new FormData()
         formData.append('file', e.target.files[0].name)
         chengpinUpload(formData).then((res)=>{

         })
    },
    chengpinDownLoad() {
      chengpinDownLoad().then((res) => {
        this.href = res
        console.log(this.href)

      })
    }
  }
}
</script>

<style scoped>
.file-select > .select-button {
  padding: 1rem;

  color: white;
  background-color: #2EA169;

  border-radius: .3rem;

  text-align: center;
  font-weight: bold;
}

/* Don't forget to hide the original file input! */
.file-select > input[type="file"] {
  display: none;
}
</style>
