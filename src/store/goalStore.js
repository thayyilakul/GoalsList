import { defineStore } from 'pinia'

export const useGoalStore = defineStore('goalsStore', {
    state: () => ({
        goal: '',
        goals: [
            { id: 1, text: 'Do something nice for someone you care about', status: false, type: 'short' },
            { id: 2, text: 'Memorize a poem', status: false, type: 'short' },
            { id: 3, text: 'Watch a classic movie', status: false, type: 'short' },
            { id: 4, text: 'Watch a documentary', status: false, type: 'medium' },
            { id: 5, text: 'Invest in cryptocurrency', status: false, type: 'medium' },
            { id: 6, text: 'Contribute code or a monetary donation to an open-source software project', status: false, type: 'medium' },
            { id: 7, text: 'Solve a Rubiks cube', status: false, type: 'long' },
            { id: 8, text: 'Bake pastries for yourself and neighbor', status: false, type: 'long' },
            { id: 9, text: 'Go see a Broadway production', status: false, type: 'long' },
        ],
    }),
    getters: {
        completed() {
            return `${Math.round((100 * this.goals.filter(item => item.status == true).length) / this.goals.length)} %`;
        },
        remaining() {
            return `${Math.round((100 * this.goals.filter(item => item.status == false).length) / this.goals.length)} %`;
        },
        allTime() {
            return `${this.goals.filter(item => item.status == true).length} / ${this.goals.length}`;
        },
        shortTermGoals() {
            return this.goals.filter(n => n.status == false && n.type == 'short');
        },
        mediumTermGoals() {
            return this.goals.filter(n => n.status == false && n.type == 'medium');
        },
        longTermGoals() {
            return this.goals.filter(n => n.status == false && n.type == 'long');
        }
    },
    actions: {
        changeStatus(id) {
            let goal = this.goals.find(item => item.id == id);
            goal.status == true ? goal.status = false : goal.status = true;
        },
        addGoal(goal){
            this.goals.push(goal);
        }
    }
})