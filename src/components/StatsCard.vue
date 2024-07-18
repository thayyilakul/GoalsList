<template>
    <div class="text-center border-2 border-stone-50 rounded-md p-4 font-medium mt-10 m-auto w-96 hover:shadow-lg hover:shadow-cyan-500">
        <p class="text-3xl uppercase">Goal Stats</p>
        <div class="divide-y">
            <p class="p-2">Completed : {{ completed }}</p>
            <p class="p-2">Remaining : {{ remaining }}</p>
            <p class="p-2">All Time : {{ allTime }}</p>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['title','completed','remaining','allTime']
    }
</script>