import Api from '@/services/Api'

export default {
  fetchStudents () {
    return Api().get('students')
  }
}
