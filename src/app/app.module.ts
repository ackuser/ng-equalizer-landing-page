import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnComponent } from './btn/btn.component';
import { IntroComponent } from './intro/intro.component';
import { MobileComponent } from './mobile/mobile.component';
import { FooterComponent } from './footer/footer.component';
import { PremiumComponent } from './premium/premium.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    IntroComponent,
    MobileComponent,
    FooterComponent,
    PremiumComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
