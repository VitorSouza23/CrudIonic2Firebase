import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
import {EditarCarroPage} from '../editar-carro/editar-carro';
/**
 * Generated class for the ListaCarroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

export class Carro {
    id: string;
    dono: string;
    modelo: string;
    multa: boolean;
}

@Component({
    selector: 'page-lista-carro',
    templateUrl: 'lista-carro.html',
})
export class ListaCarroPage {
    lista: FirebaseListObservable<any>;
    carro: Carro;
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public angularFire: AngularFireDatabase, public modalCtrl: ModalController) {
        this.lista = this.angularFire.list('/carros');
        this.carro = new Carro();
    }

    cadastrar(): void {
        this.lista.push(this.carro).then(() => {
            this.carro = new Carro();
        })
    }

    editar(id: string): void {
        this.modalCtrl.create(EditarCarroPage, {
            id: id
        }).present();
    }

}
