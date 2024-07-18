<template>
    <div
        class="border-2 border-stone-50 rounded-md p-4 font-medium mt-10 m-auto w-96 hover:shadow-lg hover:shadow-cyan-500">
        <p class="text-3xl uppercase text-center">{{ title }}</p>
        <form @submit.prevent="handleSubmit">
        <div class="mt-2 text-center">
            <label for="">Goal : </label><br>
            <input type="text" name="goal" class="mt-2 text-gray-900" v-model="goal"><br>
            <label for="" class="">Type Of Goal : </label><br>
            <input type="radio" id="vehicle1" name="type_of_goal" value="short" v-model="typeOfGoal">
            <label for="vehicle1"> Short Term Goal</label><br>
            <input type="radio" id="vehicle2" name="type_of_goal" value="medium" v-model="typeOfGoal">
            <label for="vehicle2"> Medium Term Goal</label><br>
            <input type="radio" id="vehicle3" name="type_of_goal" value="long" v-model="typeOfGoal">
            <label for="vehicle3"> Long Term Goal</label><br>
            <button class="bg-slate-100 text-center text-gray-900 p-1 mt-2" type="submit">Add</button>
        </div>
    </form>
    </div>
</template>
<script>
import {ref} from 'vue'
import { useGoalStore } from '../store/goalStore';
export default {
    props : ['title'],
    setup(){
        const goalStore = useGoalStore();
        const goal = ref('');
        const typeOfGoal = ref('');
        const handleSubmit = () => {
            if(goal.value.length > 0 && typeOfGoal.value.length > 0){
                goalStore.addGoal({
                    id : Math.floor(Math.random() * 10000),
                    text : goal.value,
                    status : false,
                    type : typeOfGoal.value
                })
                goal.value = ''
            }
        }
        return {handleSubmit, goal, typeOfGoal};
    }
}
</script>