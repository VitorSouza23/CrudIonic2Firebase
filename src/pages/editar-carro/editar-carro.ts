import {Component} from '@angular/core';
import {ViewController, NavParams} from 'ionic-angular';
import {FirebaseObjectObservable, AngularFireDatabase} from 'angularfire2/database';
import {Carro} from '../lista-carro/lista-carro';
/**
 * Generated class for the EditarCarroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-editar-carro',
    templateUrl: 'editar-carro.html',
})
export class EditarCarroPage {
    ref: FirebaseObjectObservable<any>;
    id: string;
    carro: Carro;
    
    constructor(public viewCtrl: ViewController, public navParams: NavParams,
        public agularFire: AngularFireDatabase) {
        this.id = this.navParams.get('id');
        this.ref = this.agularFire.object('/carros/' + this.id);
        this.carro = new Carro();
        this.ref.subscribe((carro) => {
            this.carro.dono = carro.dono;
            this.carro.modelo = carro.modelo;
            this.carro.multa = carro.multa;
        });
    }

    salvar() : void {
        this.ref.update(this.carro).then(() => {
            this.viewCtrl.dismiss();
        });
    }
    
    fechar() : void {
        this.viewCtrl.dismiss();
    }
    
    excluir() : void {
        this.ref.remove();
        this.viewCtrl.dismiss();
    }

}
