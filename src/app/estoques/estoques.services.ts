import { Injectable } from '@angular/core';
import { Estoque } from './estoques.moduls';

@Injectable({
  providedIn: 'root'
})
export class ListService {

   public produtosBD: Estoque[]
   public produtos: Estoque[]

  constructor() {
    this.produtosBD = [
      new Estoque(1001,"Correia Dentada"," Corolla",150,"CarDrive",100),
      new Estoque(1002,"Pastilha de Freio","Hilux",450,"Deltas",100),
      new Estoque(1003,"Parafudo/eixo","Ford Ranger",50,"AutoPeças",15),
      new Estoque(1004,"Bandeja","Uno",18,"Autopeças",5),
      new Estoque(1005,"Parafuso/roda","Prisma",5,"CarDrive",30),
      new Estoque(1006,"Rodas/dianteiras","Honda-City",1000,"CarRodas",4),
      new Estoque(1007,"Rodas","Honda - HRV",1000,"CarRodas",4),
    ];
    this.produtos = this.produtosBD;
   }

   getEstoque(){
     return this.produtos;
   }

   addProduto(cod:number,descricao:string,tipo:string,preco:number,nome:string,qtde:number){
    this.produtosBD.push(new Estoque(cod,descricao,tipo,preco,nome,qtde))
   }
}
