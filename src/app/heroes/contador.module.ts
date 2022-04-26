import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//import { ContadorComponent } from '../contador/contador/contador.component';
import { ContadorComponent } from "../contador/contador/contador.component";
import { NG_ASYNC_VALIDATORS } from "@angular/forms";

@NgModule({
   declarations:[
       ContadorComponent,       
   ],
   exports:[
       ContadorComponent
   ],
   imports:[
       CommonModule
   ]
})

export class ContadorComponent1{}