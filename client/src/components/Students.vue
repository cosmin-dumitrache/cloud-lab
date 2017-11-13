<template>
  <div>
    <b-card title="Students">
      <b-table striped hover :items="students" :fields="fields"></b-table>
    </b-card>
  </div>
</template>

<script>
import StudentService from '@/services/StudentService'
export default {
  data () {
    return {
      fields: ['firstName', 'lastName', 'mark'],
      students: []
    }
  },
  created () {
    this.getStudents()
  },
  methods: {
    getStudents () {
      StudentService.fetchStudents().then((response) => {
        this.students = response.data.students
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
