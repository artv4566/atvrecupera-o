import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage {

  registerForm: FormGroup;

  constructor(
    public formbuilder: FormBuilder
  ) {
      this.registerForm = this.formbuilder.group({
        nome: [null, [Validators.required, Validators.minLength(5)]],
        email: [null, [Validators.required, Validators.email]],
        senha: [null, [Validators.required, Validators.minLength(5)]],
        telefone: [null, [Validators.required, Validators.minLength(5)]],
        loja: [null, [Validators.required, Validators.minLength(5)]],
        cnpj: [null, [Validators.required, Validators.minLength(5)]],
        endereco: [null, [Validators.required, Validators.minLength(5)]],
        localizacao: [null, [Validators.required, Validators.minLength(5)]],
      }) 
  }

  
  submitForm() {
    console.log(this.registerForm.value);
  }

}
