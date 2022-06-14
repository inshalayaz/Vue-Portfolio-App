<template>
    <div>
    <v-col class="col-md-12 experience-heading">
            <h3 class="text-uppercase text-center font-weight-bold ">EXPERIENCE & EDUCATION</h3>
    </v-col>
    <v-col class="col-md-12 experience-timeline">
        <v-col class="col-md-6" v-for="(experience, index) in experiences" :key="index">
            <v-timeline  align-top dense>
                <v-timeline-item color="secondary" fill-dot v-for="exp in experience" :key="exp.id" :icon="exp.icon">
                    <v-chip class="p-10">{{exp.start}}-{{exp.end}}</v-chip>
                    <h4 class="mt-4 exp-heading text-uppercase">{{exp.title}} - <span class="text--secondary">{{exp.place}}</span></h4>
                    <p class="mt-4">{{exp.text}}.</p>
                </v-timeline-item>
            </v-timeline>
        </v-col>
    </v-col>
    </div>
</template>


<script>

import { mdiBriefcase, mdiSchoolOutline } from '@mdi/js'

export default {
    name: 'AboutExperience',
    data(){
        return {
            officeIcon: mdiBriefcase,
            schoolIcon: mdiSchoolOutline,
            experiences: [
                [
                    {id: 0, start: '2019', end: 'Present', title: 'Web Developer', place: 'Freelance', text: 'Working as a Freelance Web Developer', icon: mdiBriefcase}, 
                    {id: 1, start: '2021', end: '2022', title: 'TechSoul PK', place: 'Full Stack Developer', text: 'Worked as a Full Stack Developer in TechSoul Pk working on Laravel', icon: mdiBriefcase}, 
                    {id: 2, start: '2022', end: 'Present', title: 'Securiti', place: 'Front-End Developer', text: 'Working as an Intern at Securiti.ai', icon: mdiBriefcase}, 
                ],
                [
                    {id: 0, start: '2004', end: '2017', title: 'School', place: 'Karachi Public School', text: 'Completed my O\'levels from KPS.', icon: mdiSchoolOutline}, 
                    {id: 1, start: '2019', end: '2020', title: 'College', place: 'Freelance', text: 'Completed Higher Education From NCR-CET College and achieved 6th Rank in Karachi', icon: mdiSchoolOutline}, 
                    {id: 2, start: '2020', end: 'Present', title: 'Bachelor Degree', place: 'University Of Karachi', text: 'Completing my Bachelors from The University of Karachi', icon: mdiSchoolOutline}, 
                ]
            ]
        }
    }
}
</script>

<style>
    .experience-heading h3{
        font-size: 26px;
        font-family: Poppins, serif
    }
    .experience-timeline{
        display: flex;
    }
    .exp-heading{
        font-size: 18px;
        font-family: Poppins, serif;
        font-weight: 500;
    }
</style>