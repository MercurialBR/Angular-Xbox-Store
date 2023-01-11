import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './home/home.component';
import { BannerGameComponent } from './components/banner-game/banner-game.component';
import { IconsXboxComponent } from './components/icons-xbox/icons-xbox.component';
import { IconSectionComponent } from './components/icons-xbox/icon-section/icon-section.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { BigCardNameComponent } from './components/big-card/big-card-name/big-card-name.component';


@NgModule({
    declarations: [
        AppComponent,
        MenuBarComponent,
        HomeComponent,
        BannerGameComponent,
        IconsXboxComponent,
        IconSectionComponent,
        BigCardComponent,
        BigCardNameComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ]
})
export class AppModule { }
