<template>
    <div>
        <v-col class="col-md-12 skills-heading">
            <h3 class="text-uppercase text-center font-weight-bold ">My Skills</h3>
        </v-col>
        <v-col class="col-md-12 skill-bar">
        <v-col class="col-md-3 text-center" v-for="skill in skills" :key="skill.id">
            <v-progress-circular :value="skill.value" size="150" color="secondary" width="10" > {{skill.value}}% </v-progress-circular>
            <h4 class="mt-4">{{skill.skill}}</h4>
        </v-col>
        </v-col>
    </div>
</template>

<script>
export default {
    name: 'AboutSkills',
    data(){
        return {
            skills: [
                {id: 0, skill: 'HTML', value: '86' },
                {id: 2, skill: 'JavaScript', value: '84' },
                {id: 4, skill: 'Vue', value: '61' },
                {id: 3, skill: 'React', value: '93' },
                {id: 5, skill: 'Angular', value: '49' },
                {id: 6, skill: 'Node Js', value: '74' },
                {id: 7, skill: 'WordPress', value: '87' },
                {id: 1, skill: 'CSS', value: '73' },
            ]
        }
    }
}
</script>

<style>
    .skills-heading h3{
        font-size: 26px;
        font-family: Poppins, serif
    }
    .skill-bar{
        display: flex;
        flex-wrap: wrap;
    }
</style>