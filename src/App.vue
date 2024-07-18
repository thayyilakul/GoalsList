<template>
  <main>
    <div class="my-8">
      <p class="text-center font-medium text-3xl" @click="d">GOAL LIST</p>
      <div class="md:flex justify-evenly mt-8">
        <ListCard title="Short-term goals" :goals="store.shortTermGoals" />
        <ListCard title="Medium-term goals" :goals="store.mediumTermGoals" />
        <ListCard title="Long-term goals" :goals="store.longTermGoals" />
      </div>
    </div>
    <div class="md:flex">
      <ListCard title="Completed Goals" :goals="store.goals.filter(n => n.status == true)" checked="true"/>
      <StatsCard title="Goal Stats" :completed="store.completed" :remaining="store.remaining" :allTime="store.allTime"/>
      <AddGoal title="Add New Goal"/>
    </div>
  </main>
</template>

<script>
import ListCard from './components/ListCard.vue'
import StatsCard from './components/StatsCard.vue'
import AddGoal from './components/AddGoal.vue'
import '../src/style.css'
import { useGoalStore } from './store/goalStore'

export default{
  components : {ListCard, StatsCard, AddGoal},
  setup(){
    const store = useGoalStore()
    return {store}
  }
}
</script>