<template>
  <v-container>
    <v-row class="justify-center">
      <teamMember v-for="member in members" :key="member.id" :member="member"/>
    </v-row>
  </v-container>
</template>

<script>
import teamMember from '../components/TeamModel'
export default {
  components:{
    teamMember
  },
  data:()=>({
    members:[
      {id: 1, name: 'Joseph Jacky', image:'profile.jpg', position: 'Frontend Developer Prochito Its LTd.'},
      {id: 2, name: 'Musa Hasan', image:'musa.jpg', position: 'Frontend Developer(int.) Prochito Its LTd.'},
      {id: 3, name: 'Rony Debnath', image:'profile1.jpg', position: 'Project Manager Prochito Its LTd.'}
    ]
  })
}
</script>

<style>

</style>
