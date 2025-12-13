import { Routes } from '@angular/router';
import { VisualizerComponent } from './pages/visualizer/visualizer.component';

export const routes: Routes = [
    {path:"visualizer",component:VisualizerComponent},
    {path:"",redirectTo:"visualizer",pathMatch:"full"}
];
