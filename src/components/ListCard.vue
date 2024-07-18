<template>
    <div
        class="text-center border-2 border-stone-50 rounded-md p-4 font-medium m-auto w-96 hover:shadow-lg hover:shadow-cyan-500">
        <p class="text-3xl uppercase">{{ title }}</p>
        <div class="divide-y p-4 mb-4 md:max-w-96">
            <p class="p-2" v-for="goal in goals" :key="goal.id">
                <input type="checkbox" class="me-2" @click="goalStore.changeStatus(goal.id)" :checked="checked"/>{{ goal.text }}
            </p>
        </div>
    </div>
</template>
<script>
import { useGoalStore } from '../store/goalStore';
export default {
    props : {
        title : {
            default : '',
        },
        goals : {
            default : ''
        },
        checked : {
            default : null
        }
    },
    setup(){
        const goalStore = useGoalStore();
        return {
            goalStore,
        }
    }
}
</script>