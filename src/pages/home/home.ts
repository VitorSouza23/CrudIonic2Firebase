import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ListaCarroPage} from '../lista-carro/lista-carro';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    usuario: Observable<firebase.User>
    user: any;
    constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {
        this.usuario = this.afAuth.authState;
        this.usuario.subscribe((user) => {
            console.log(user);
            this.user = user;
        });
    }

    login() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((user) => {
            console.log(user);
            this.user = user;
        });
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    goToListaCarroPage(): void {
        this.navCtrl.push(ListaCarroPage);
    }

}
