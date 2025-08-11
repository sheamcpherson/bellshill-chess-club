import { Routes } from '@angular/router';
import { ClubComponent } from './shell/pages/competitions/club/club.component';
import { DumbartonshireComponent } from './shell/pages/competitions/dumbartonshire/dumbartonshire.component';
import { LanarkshireComponent } from './shell/pages/competitions/lanarkshire/lanarkshire.component';
import { AboutComponent } from './shell/pages/about/about.component';
import { CalendarComponent } from './shell/pages/calendar/calendar.component';
import { CupsComponent } from './shell/pages/competitions/cups/cups.component';
import { GlasgowComponent } from './shell/pages/competitions/glasgow/glasgow.component';
import { HomeComponent } from './shell/pages/home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'competitions/gcl', component: GlasgowComponent},
    {path: 'competitions/lcl', component: LanarkshireComponent},
    {path: 'competitions/ddca', component: DumbartonshireComponent},
    {path: 'competitions/cc', component: ClubComponent},
    {path: 'competitions/cups', component: CupsComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: '**', component: HomeComponent},
];
