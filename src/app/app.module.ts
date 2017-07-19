import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {ListaCarroPage} from '../pages/lista-carro/lista-carro';
import {EditarCarroPage} from '../pages/editar-carro/editar-carro';

export const firebaseConfig = {
    apiKey: "AIzaSyBBlveDOoqWZ5ntMWF4oQk4CyE75hb17BQ",
    authDomain: "crudionic2firebase.firebaseapp.com",
    databaseURL: "https://crudionic2firebase.firebaseio.com",
    projectId: "crudionic2firebase",
    storageBucket: "",
    messagingSenderId: "783450491122"
}

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListaCarroPage,
        EditarCarroPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListaCarroPage,
        EditarCarroPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AngularFireAuth
    ]
})
export class AppModule {}
