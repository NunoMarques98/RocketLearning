webpackJsonp([9],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArraysPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArraysPage = /** @class */ (function () {
    function ArraysPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ArraysPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArraysPage');
        hljs.initHighlighting.called = false;
        hljs.initHighlighting();
    };
    ArraysPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-arrays',template:/*ion-inline-start:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\arrays\arrays.html"*/'<!--\n  Generated template for the ArraysPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n        <h1>7. Listas</h1>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <p>\n        Quando falámos em tipos de variáveis, mencionámos o tipo <strong>Array</strong>. No entanto a definição foi muito vaga. Vamos a uma \n        definição mais específica: uma lista ( array ) é uma variável que pode ter mais do que um valor ao mesmo tempo. Por exemplo, imagina que \n        queres fazer uma lista de compras, se não usares uma lista, tens de o fazer apenas com uma variável de cada vez.\n      </p>\n      <pre>\n        <code class="javascript hljs">\n            var a = \'ananás\';\n            var b = \'bananas\';\n            var c = \'carangueijo\';\n        </code>\n      </pre>\n      <p>Esta técnica até pode resultar para poucos elementos. E se for, digamos, para 1000 elementos? Agora começa a complicar.\n        É nestas alturas que as listas começam a brilhar. Vejamos o código anterior mas agora com listas.\n      </p>\n      <pre>\n          <code class="javascript hljs">\n              var compras = [\'ananás\', \'bananas\', \'carangueijo\'];\n          </code>\n      </pre>\n      <p>Surge uma questão. Como podemos aceder a um elemento de uma lista. Nada podia ser mais simples. Basta escrever o nome \n        da lista seguido de <strong>[]</strong> e entre eles a posição do elemento na lista. A posição do primeiro elemento é <strong>0</strong>.\n      </p>\n      <pre>\n          <code class="javascript hljs">\n              var compras = [\'ananás\', \'bananas\', \'carangueijo\'];\n\n              console.log(compras[0]); // \'ananás\';\n              console.log(compras[1]); // \'bananas\';\n              console.log(compras[2]); // \'carangueijo\';\n          </code>\n      </pre>\n      <p>\n        Para mudar o valor de um elemento de uma lista só precisamos de aceder a esse elemento e mudar o valor.\n      </p>\n      <pre>\n        <code>\n            var compras = [\'ananás\', \'bananas\', \'carangueijo\'];\n\n            console.log(compras[0]); // \'ananás\';\n            \n            compras[0] = \'iogurte\';\n\n            console.log(compras[0]); // \'iogurte\';\n        </code>\n      </pre>\n      <p>Podemos saber quantos elementos estão na lista através da propriedade <strong>.length</strong>.</p>\n      <pre>\n          <code>\n              var compras = [\'ananás\', \'bananas\', \'carangueijo\'];\n  \n              console.log(compras.length); // 3;\n          </code>\n        </pre>\n      <p>\n        Para aceder ao último elemento, e sabendo que as posições começam em 0:\n      </p>\n      <pre>\n        <code>\n            var compras = [\'ananás\', \'bananas\', \'carangueijo\'];\n\n            console.log(compras[compras.length - 1]); // \'carangueijo\';\n        </code>\n      </pre>\n      <p>\n        Podemos ainda adicionar elementos a ao final de uma lista usando o método <strong>.push(elemento)</strong>.\n      </p>\n      <pre>\n          <code>\n              var compras = [\'ananás\', \'bananas\', \'carangueijo\'];\n  \n              console.log(compras); // [\'ananás\', \'bananas\', \'carangueijo\'];\n\n              compras.push(\'morangos\');\n\n              console.log(compras); // [\'ananás\', \'bananas\', \'carangueijo\', \'morangos\'];\n          </code>\n        </pre>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\arrays\arrays.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ArraysPage);
    return ArraysPage;
}());

//# sourceMappingURL=arrays.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConditionalsPage = /** @class */ (function () {
    function ConditionalsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConditionalsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConditionalsPage');
        hljs.initHighlighting.called = false;
        hljs.initHighlighting();
    };
    ConditionalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conditionals',template:/*ion-inline-start:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\conditionals\conditionals.html"*/'<!--\n  Generated template for the ConditionalsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n        <h1>5. Condicionais</h1>\n    </ion-col>\n  </ion-row>\n  <ion-row justify-content-center align-items-center>\n    <ion-col col-12>\n      <p>\n        Estruturas condicionais são usadas para realizar diferentes ações com base num decisão. Imagina que vais a uma discoteca e te\n        perguntam a idade à entrada. Com base na tua idade podem ser tomadas duas decisões: se fores maior de idade, podes entrar; caso \n        contrário, não o podes fazer. Ou seja, com base num condição booleana ( uma condição que resulta em verdade ou falso ) é tomada \n        uma ação. Para isso temos a seguinte estrutura. Aqui vão dar jeito os conhecimentos de operadores lógicos e de comparação de que \n        falámos à pouco.\n      </p>\n      <pre>\n        <code class="javascript hljs">\n            var idade = 18;\n\n            if (idade >= 18) {{\'{\'}}\n\n              console.log("Podes entrar");\n            {{\'}\'}}\n\n            else {{\'{\'}}\n\n              console.log("Vai para casa puto!");\n            {{\'}\'}}\n        </code>\n      </pre>\n      <p>\n        <strong>idade >= 18</strong> é a condição que te vai permitir entrar ou não na discoteca. Lembra-te, a expressão que está entre <strong>()</strong> na cláusula <strong>if</strong> tem \n        de resultar sempre em <strong>true</strong> ou <strong>false</strong>. Se o que está entre <strong>()</strong> for verdade, o que está \n        dentro das chavetas do <strong>if</strong> executa. Caso contrário, o que está dentro das chavetas do <strong>else</strong> irá executar.\n      </p>\n      <p>E se quisermos ter mais condições de decisão? Bem basta a acrescentar um cláusula <strong>else if() {{\'{\'}}{{\'}\'}}</strong></p>\n      <pre>\n          <code class="javascript hljs">\n              var idade = 18;\n  \n              if (idade >= 18) {{\'{\'}}\n  \n                console.log("Podes entrar");\n              {{\'}\'}}\n\n              else if (idade > 15 && idade <= 17) {{\'{\'}}\n  \n                console.log("Podes entrar acompanhado por um adulto");\n              {{\'}\'}}\n  \n              else {{\'{\'}}\n  \n                console.log("Vai para casa puto!");\n              {{\'}\'}}\n          </code>\n        </pre>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\conditionals\conditionals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ConditionalsPage);
    return ConditionalsPage;
}());

//# sourceMappingURL=conditionals.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoopsPage = /** @class */ (function () {
    function LoopsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoopsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoopsPage');
        hljs.initHighlighting.called = false;
        hljs.initHighlighting();
    };
    LoopsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loops',template:/*ion-inline-start:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\loops\loops.html"*/'<!--\n  Generated template for the LoopsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n        <h1>8. Ciclos</h1>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <p>\n        Seguindo o exemplo anterior, queremos saber que elementos temos numa lista. Podemos fazê-lo da seguinte forma.\n      </p>\n      <pre>\n          <code class="javascript hljs">\n              var compras = [\'ananás\', \'bananas\', \'carangueijo\'];\n\n              console.log(compras[0]); // \'ananás\';\n              console.log(compras[1]); // \'bananas\';\n              console.log(compras[2]); // \'carangueijo\';\n          </code>\n      </pre>\n      <p>E se tivermos 100 elementos? Continuaremos a fazer desta forma? Para além disso, de linha para linha só muda a posição a \n        que queremos aceder. É nestes casos que os ciclos se tornam muito úteis.\n      </p>\n      <pre>\n          <code class="javascript hljs">\n              var compras = [\'ananás\', \'bananas\', \'carangueijo\'];\n\n              for (var i = 0; i < compras.length; i++) {{\'{\'}}\n\n                console.log(compras[i]);\n              {{\'}\'}}\n          </code>\n      </pre>\n      <p>Analisemos esta estrutura. <strong>for (inicialização; condição; modificação) {{\'{\'}} corpo do ciclo {{\'}\'}}</strong></p>\n      <ul>\n        <li>inicialização - é executado uma única vez antes do bloco de código ser executado;</li>\n        <li>condição - define a condição para o bloco de código ser executado ( a expressão da condição tem de ser um valor booleano );</li>\n        <li>modificação - é executado sempre depois do bloco de código ser executado.</li>\n      </ul>\n      <p>O que se está a dizer no ciclo acima é o seguinte: inicializa um variável i com o valor 0, executa o código enquanto i\n         for menor que o comprimento da lista e de cada vez que executares o código aumenta o valor de i por 1.\n      </p>\n      <p>Os ciclos <strong>for</strong> são muito úteis quando sabemos quantas vezes queremos executar uma determinada ação. E se não soubermos?\n        Bem, para isso temos os ciclos <strong>while</strong>. <strong>while (condição) {{\'{\'}} corpo do ciclo {{\'}\'}} </strong>. O cliclo executará\n        enquanto a condição for verdade, por isso, cuidado com ciclos infinitos em que a condição é sempre verdade!\n      </p>\n      <pre>\n          <code class="javascript hljs">\n            \n              while (true) {{\'{\'}} // Ciclo infinito!\n\n                console.log("Ciclo");\n                \n              {{\'}\'}}\n          </code>\n      </pre>\n      <p>\n          Podemos escrever um ciclo <strong>while</strong> como um ciclo <strong>for</strong>\n          da seguinte forma.\n      </p>\n      <pre>\n          <code class="javascript hljs">\n              var compras = [\'ananás\', \'bananas\', \'carangueijo\'];\n\n              var i = 0; // inicialização\n\n              while (i < compras.length) {{\'{\'}} // condição\n\n                console.log(compras[i]);\n                i++; // modifcação\n              {{\'}\'}}\n          </code>\n      </pre>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\loops\loops.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoopsPage);
    return LoopsPage;
}());

//# sourceMappingURL=loops.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObjectsPage = /** @class */ (function () {
    function ObjectsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ObjectsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ObjectsPage');
        hljs.initHighlighting.called = false;
        hljs.initHighlighting();
    };
    ObjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-objects',template:/*ion-inline-start:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\objects\objects.html"*/'<!--\n  Generated template for the ObjectsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n        <h1>9. Objetos</h1>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <p>\n        Tal como as listas, falámos de objetos em capitulos anteriores, porém vamos agora aprofundar o conceito e as capacidades de um\n        objeto.\n      </p>\n      <p>\n        Um objeto é essencialmente a representação de bem... um objeto que tem propriedades e ações que consegue fazer. Por exemplo, se descrevessemos\n        uma pessoa como um objeto, esta teria as propriedades: altura, peso, idade, género, etc... E tem ações que consegue fazer: comer, \n        dormir, andar, falar, etc. Como é claro, os valores destas propriedades variam de pessoas para pessoas e como tal, acontece o mesmo com os objetos \n        que os representam.\n      </p>\n      <p>Um objeto é declarado da seguinte forma <strong>var nome_objeto = {{\'{\'}} propriedade_1: valor, propriedade_2: valor, ..., propriedade_n: valor {{\'}\'}}</strong></p>\n      <p>A nossa definição de pessoa seria:</p>\n      <pre>\n          <code class="javascript hljs">\n              var pessoa = {{\'{\'}} altura: 1.70, peso: 65, idade: 23, genero: \'feminino\' {{\'}\'}}\n          </code>\n      </pre>\n      <p>Às ações que um objeto pode ter chamamos métodos. Formalizando, métodos são funções que um objeto tem.</p>\n      <pre>\n          <code class="javascript hljs">\n              var pessoa = {{\'{\'}}\n\n                altura: 1.70,\n                peso: 65,\n                idade: 23,\n                genero: \'feminino\',\n\n                falar: function () {{\'{\'}} console.log("Estou a falar!") {{\'}\'}}\n              {{\'}\'}}\n          </code>\n      </pre>\n      <p>Podemos aceder às propriedades de um objeto de duas formas: <strong>nome_objeto.nome_propriedade</strong> ou \n      <strong>nome_objeto["nome_propriedade"]</strong></p>\n      <pre>\n          <code class="javascript hljs">\n              var pessoa = {{\'{\'}}\n\n                altura: 1.70,\n                peso: 65,\n                idade: 23,\n                genero: \'feminino\',\n\n                falar: function () {{\'{\'}} console.log("Estou a falar!") {{\'}\'}}\n              {{\'}\'}}\n\n              console.log(pessoa.altura); // 1.70\n              console.log(pessoa["peso"]); // 65\n          </code>\n      </pre>\n      <p>\n        Para usar um método do objeto recorremos a <strong>nome_objeto.nome_metodo(argumento 1, ..., argumento n)</strong>. Como o método é uma\n        função também pode receber argumentos e estes são usados da mesma forma que uma função usa. Vamos modificar o método <strong>falar</strong>.\n      </p>\n      <pre>\n          <code class="javascript hljs">\n              var pessoa = {{\'{\'}}\n\n                altura: 1.70,\n                peso: 65,\n                idade: 23,\n                genero: \'feminino\',\n\n                falar: function (lingua) {{\'{\'}} console.log("Eu falo " + lingua) {{\'}\'}}\n              {{\'}\'}}\n\n              console.log(pessoa.falar("português")); // "Eu falo português" \n              \n          </code>\n      </pre>\n      <p>\n        Mais ainda, podemos alterar o valor das propriedades da seguinte forma:\n      </p>\n      <pre>\n          <code class="javascript hljs">\n              var pessoa = {{\'{\'}}\n\n                altura: 1.70,\n                peso: 65,\n                idade: 23,\n                genero: \'feminino\',\n\n                falar: function (lingua) {{\'{\'}} console.log("Eu falo " + lingua) {{\'}\'}}\n              {{\'}\'}}\n\n              console.log(pessoa.peso); // 65\n\n              pessoa.peso = 70;\n\n              console.log(pessoa.peso); // 70\n          </code>\n      </pre>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\objects\objects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ObjectsPage);
    return ObjectsPage;
}());

//# sourceMappingURL=objects.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FunctionsPage = /** @class */ (function () {
    function FunctionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FunctionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FunctionsPage');
        hljs.initHighlighting.called = false;
        hljs.initHighlighting();
    };
    FunctionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-functions',template:/*ion-inline-start:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\functions\functions.html"*/'<!--\n  Generated template for the FunctionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n        <h1>6. Funções</h1>\n    </ion-col>\n  </ion-row>\n  <ion-row justify-content-center align-items-center>\n    <ion-col col-12>\n      <p>\n        Primeiro, caso estejas a pensar na matemática, estas funções não têm esse signifcado. Em programação uma função é um \n        pedaço de código que executa quando é chamado/invocado. Uma função pode receber argumentos e pode devolver um valor, \n        seja ele de que tipo for.\n      </p>\n      <pre>\n        <code class="javascript hljs">\n            function mais_dois(x) {{\'{\'}}\n\n                return x + 2;\n\n            {{\'}\'}}\n\n            var x = 2;\n\n            console.log(mais_dois(x)); // 4\n        </code>\n      </pre>\n      <p>\n        Um função é declarada da seguinte forma <strong>function (argumento 1, argumento 2, ..., argumento n) {{\'{\'}} bloco de código {{\'}\'}}</strong>.\n        ATENÇÃO os argumentos passados numa chamada de função são copiados, ou seja, todas as operações feitas sobre esse argumento \n        não se aplicam fora do corpo da função. Essa cópia só existe dentro do corpo da função e todas as variáveis declaradas dentro do corpo \n        da função só existem aí, isto é, não são visíveis de fora da função. Chamam-se variáveis <strong>locais</strong>.\n      </p>\n      <pre>\n          <code class="javascript hljs">\n              function mais_dois(x) {{\'{\'}}\n\n                  var y = x + 2\n\n                  return y;\n              {{\'}\'}}\n\n              console.log(y); // Erro, y não está definido\n  \n              var x = 2;\n              console.log(x); // 2\n\n              mais_dois(x);\n  \n              console.log(x); // 2\n\n              x = mais_dois(x);\n              console.log(x); // 4\n\n          </code>\n        </pre>\n      <p>\n        Assim que o JavaScript encontra o <strong>return</strong> ele para a execução do código da função e retorna o resultado da expressão, ou o valor\n        que estiver à sua frente.\n      </p>\n      <pre>\n      <code class="javascript hljs">\n          function mais_dois(x) {{\'{\'}}\n\n              return x + 2; // Retorna o resulta de x + 2\n\n              var y = x + 4; // Não vai executar, está abaixo do return\n          {{\'}\'}}\n\n      </code>\n    </pre>\n      <p>\n        Só se dissermos que o valor de x passa a ser o valor de retorno da função é que, efetivamente, lhe mudamos o valor.\n        Para chamar uma função, basta escrever o nome dela seguido de <strong>()</strong> e dentro dos mesmos passar os argumentos \n        <strong>mais_dois(x)</strong>, por exemplo.\n      </p>\n      <p>\n        Porquê usar funções? Porque podemos reutilizar código. Basta definir uma vez para poder usar várias vezes e basta passar \n        argumentos diferentes para obter resultados diferentes.\n      </p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\functions\functions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FunctionsPage);
    return FunctionsPage;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypesPage = /** @class */ (function () {
    function TypesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TypesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TypesPage');
        hljs.initHighlighting.called = false;
        hljs.initHighlighting();
    };
    TypesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-types',template:/*ion-inline-start:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\types\types.html"*/'<!--\n  Generated template for the TypesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n        <h1>2. Tipos de Dados</h1>\n    </ion-col>\n  </ion-row>\n    <ion-row justify-content-center align-items-center>\n      <ion-col col-12>\n        \n          <p>\n            Antes de passarmos às operações que se podem fazer com as variáveis que aprendemos no capitulo anterior, precisamos \n            de esclarecer o conceito de tipos de variável. Os tipos permitem-nos distinguir variáveis e as operações que se podem \n            realizar sobre elas. Isto é, as operações que podemos fazer com</p>\n            <pre><code class="javascript hljs">var x = 1;</code></pre>\n            <p> que é um Number, são diferentes das operações que se fazem com</p>\n            <pre><code class="javascript hljs">var x = \'1\';</code></pre>\n            <p>que é uma String.</p>\n        \n          <p>\n            Posto isto, podemos distinguir os seguintes tipos de variáveis:</p>\n            <pre><code class="javascript hljs">\n              var x = 1;\n              var y = 1.2;\n              var z = -1;\n              var w = -1.2;\n\n              var t = 2e5; // Notação científica\n            </code></pre> \n            <p>Aqui as variáveis x, y, z e w são do tipo <strong>Number</strong>. O tipo <strong>Number</strong> engloda todos os tipos numéricos, ou seja, todos os números\n            inteiros e reais, positivos ou negativos. </p> \n          \n            <pre><code class="javascript hljs">\n                var x = \'Isto é uma string\';\n                var y = \'a\';\n                var z = \'\';\n            </code> </pre> \n\n           <p>As variáveis x, y e z são <strong>String</strong>, isto é, são aquilo a que chamamos texto. Uma <strong>String</strong> pode ser um conjunto de \n            vários caracteres, um único caracter ou até mesmo vazia. </p> \n            \n           <pre> <code class="javascript hljs">\n                var x = true;\n                var y = false;\n            </code> </pre>\n\n           <p> As variáveis x e y são do tipo <strong>Boolean</strong>, ou seja, têm um valor de verdade ( true ou false ) associado. Este tipo \n            de variáveis é principalmente em decisão condicional, como veremos mais à frente. </p>\n            \n\n           <pre> <code class="javascript hljs">\n              var x;\n            </code> </pre>\n\n           <p> Neste caso, a variável x tem tipo <strong>Undefined</strong>, trocando por miúdos, a variável x existe mas não tem valor associado.\n            Mais simples ainda, existe uma caixa com o nome x mas não tem nada guardado. </p>\n            \n           <pre> <code class="javascript hljs">\n              var x = "E-Learning javascript";\n              x = null;\n            </code> </pre>\n\n           <p> O tipo <strong>Null</strong> indica que a variável não existe, posto de outra forma, <strong>Null</strong> designa o vazio e não existência. Conforme \n            está escrito acima, podemos fazer com que uma variável deixe de existir atribuindo-lhe o valor null. </p>\n            \n           <pre> <code class="javascript hljs">\n                var lista = [\'ovos\', \'bananas\', \'fiambre\'];\n            </code> </pre>\n\n           <p> O tipo <strong>Array</strong> serve para guardar numa variável uma lista de elementos, desde que esses elementos\n            sejam todos do mesmo tipo, isto é, não podemos guardar elementos com o tipo <strong>Number</strong> e elementos com \n            o tipo <strong>String</strong> na mesma lista. </p>\n\n           <pre> <code class="javascript hljs">\n              var carro = {{\'{\'}} portas: 5, lugares: 5, velocidade_máxima: 200, matricula: \'AB-12-CD\' {{\'}\'}};\n            </code> </pre>\n\n            <p>Há ainda mais um tipo, o tipo <strong>Object</strong>, que server para representar, como o nome indica, objectos do mundo real.\n            Não te preocupes se não percebeste o que isto significa, os objectos terão um capitulo específico. Por agora fica \n            com esta definição.</p>\n\n           <p>Como podes ver, pelo exemplo do tipo <strong>Null</strong>, os tipos em JavaScript são dinâmicos, uma variável\n            num dado instante tem um tipo mas pode ser modificado. </p>\n\n           <pre><code class="javascript hljs">\n                var x = 10; // x é um Number\n                x = \'Tipo String\'; // x é uma String\n            </code> </pre> \n            \n           <p> Para verificarmos o tipo de uma variável, é aconselhável usar a função <strong>typeof</strong>() como segue. </p>\n\n           <pre> <code class="javascript hljs">\n                var x = 10; // x é um Number\n                console.log(typeof(x)); // Number\n\n                var y = \'Dezembro\';\n                console.log(typeof(y)); // String\n\n                var z = true;\n                console.log(typeof(z)); // Boolean\n            </code> </pre> \n      </ion-col>\n    </ion-row>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\types\types.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TypesPage);
    return TypesPage;
}());

//# sourceMappingURL=types.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VarsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VarsPage = /** @class */ (function () {
    function VarsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VarsPage.prototype.ionViewDidLoad = function () {
    };
    VarsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vars',template:/*ion-inline-start:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\vars\vars.html"*/'<!--\n  Generated template for the VarsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n          <h1>1. Variáveis</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center align-items-center>\n      <ion-col col-6>\n        <p>Uma variável em javascript pode ser comparada a uma caixa que guarda um valor e que tem um nome. Neste caso \n          estamos a dizer que a caixa com o nome num guarda o valor 100.\n        </p>\n        <p>Podemos até pensar na matemática em que associamos uma variável a um valor, ou seja, se dissermos que a caixa\n          com o nome x tem valor 120 e a caixa com o nome y tem valor 250, podemos realizar operações com elas como na \n          matemática, isto é, se as somarmos, por exemplo, e guardarmos esse valor numa caixa com o nome z, z guardará o \n          valor 370.\n        </p>\n        <p>Estas caixas têm ainda mais umas funcionalidades. Podemos mudar o conteúdo das caixas a qualquer momento. Portanto, se dissermos agora que a caixa x guarda o valor \n          300, ela passará a ter esse valor. Repara que já não precisamos da palavra var, basta usarmos o nome da variável ( Chega \n          de falar em caixas agora que já sabemos o que são :) ).\n        </p>\n      </ion-col>\n      <ion-col col-6>\n        <pre>\n            <code class="javascript hljs">\n                var num = 100;\n\n                var x = 120;\n                var y = 250;\n\n                var z = x + y;\n\n                console.log(z); // 370\n\n                x = 300;\n                console.log(x); // 300\n            </code>\n        </pre>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center align-items-center>\n        <ion-col col-6>\n          <pre>\n              <code class="javascript hljs">\n                  const m = 5;\n\n                  m = 10; // Gera um erro, o valor de m é imutável\n              </code>\n          </pre>\n        </ion-col>\n        <ion-col col-6>\n            <p>Tal como na matemática podemos ter valores constantes, variáveis que independentemente do que aconteça \n              são fieis ao seu valor e nunca o largam. Por exemplo, a variável m que tem o valor 5, não aceitará outro \n              valor, se tentarmos fazer isso o javascript vai gerar um erro.\n            </p>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\vars\vars.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], VarsPage);
    return VarsPage;
}());

//# sourceMappingURL=vars.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OperatorsPage = /** @class */ (function () {
    function OperatorsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OperatorsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OperatorsPage');
        hljs.initHighlighting.called = false;
        hljs.initHighlighting();
    };
    OperatorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-operators',template:/*ion-inline-start:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\operators\operators.html"*/'<!--\n  Generated template for the OperatorsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n\n  \n  <ion-row class="grid-header">\n    <ion-col col-12>\n        <h1>4. Operadores</h1>\n    </ion-col>\n  </ion-row>\n  <ion-row class="grid-header" justify-content-center align-items-center>\n    <ion-col col-12>\n        <p>Lembras-te do resto das operações que falámos na página anterior? Aqui estão elas. Dá uma vista de olhos, principalmente \n          nos operadores de comparação e lógicos, vão ser precisos no capitulo seguinte.\n        </p>\n    </ion-col>\n  </ion-row>\n  <h2>Operadores de Afetação</h2>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>Operador</ion-col>\n      <ion-col col-4>Exemplo</ion-col>\n      <ion-col col-4>Equivalente a</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>=</ion-col>\n      <ion-col col-4>a = b</ion-col>\n      <ion-col col-4>a = b</ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-4>+=</ion-col>\n        <ion-col col-4>a += b</ion-col>\n        <ion-col col-4>a = a + b</ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-4>-=</ion-col>\n        <ion-col col-4>a -= b</ion-col>\n        <ion-col col-4>a = a - b</ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-4>*=</ion-col>\n        <ion-col col-4>a *= b</ion-col>\n        <ion-col col-4>a = a * b</ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-4>/=</ion-col>\n        <ion-col col-4>a /= b</ion-col>\n        <ion-col col-4>a = a / b</ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-4>%=</ion-col>\n        <ion-col col-4>a %= b</ion-col>\n        <ion-col col-4>a = a % b</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h2>Operadores para Strings</h2>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>Operador</ion-col>\n      <ion-col col-4>Exemplo</ion-col>\n      <ion-col col-4>Resultado</ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-4>+</ion-col>\n        <ion-col col-4>\'John\' + \' Doe\'</ion-col>\n        <ion-col col-4>\'John Doe\'</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h2>Operadores de Comparação</h2>\n\n  <ion-grid>\n    <ion-row>\n        <ion-col col-6>Operador</ion-col>\n        <ion-col col-6>Descrição</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>==</ion-col>\n      <ion-col col-6>Igual a</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>===</ion-col>\n      <ion-col col-6>Igual em valor e em tipo</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>!=</ion-col>\n      <ion-col col-6>Diferente</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>!==</ion-col>\n      <ion-col col-6>Diferente em valor e em tipo</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>></ion-col>\n      <ion-col col-6>Maior que</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6><</ion-col>\n      <ion-col col-6>Menor que</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>>=</ion-col>\n      <ion-col col-6>Maior ou igual que</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6><=</ion-col>\n      <ion-col col-6>Menor ou igual que</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>?</ion-col>\n      <ion-col col-6>Operador ternário</ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n      <ion-row class="grid-header">\n        <ion-col col-12>\n          <h2>Exemplos</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row class="grid-header grid-code">\n        <ion-col col-12>\n          <pre>\n            <code class="javascript hljs">\n              var x = 10;\n              var y = \'10\';\n              var z = 20;\n\n              console.log(x == y); // true\n              console.log(x === y); // false, Apesar dos valores serem iguais, os tipos não o são. \n                                    // x é um Number e y é uma String\n\n              console.log(x != z); // true\n              console.log(x !== z); // true, x e z são diferentes apenas em valor, têm o mesmo tipo Number\n\n              console.log(x > z); // false\n              console.log(x < z); // true\n\n              console.log(z >= x) // true\n              console.log(z <= x) // false\n            </code>\n          </pre>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  <h2>Operadores Lógicos</h2>\n  <ion-grid>\n      <ion-row>\n        <ion-col col-6>Operador</ion-col>\n        <ion-col col-6>Descrição</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>&&</ion-col>\n        <ion-col col-6>AND Lógico</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>||</ion-col>\n        <ion-col col-6>OR Lógico</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>!</ion-col>\n        <ion-col col-6>NOT Lógico</ion-col>\n      </ion-row>\n  </ion-grid>\n  <ion-grid>\n      <ion-row class="grid-header">\n        <ion-col col-12>\n          <h2>Exemplos</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row class="grid-header grid-code">\n        <ion-col col-12>\n          <pre>\n            <code class="javascript hljs">\n              var x = true;\n              var y = false;\n\n              console.log(x && y); // false, no AND basta um ser falso para avaliar em falso\n              console.log(x || y); // true, no OR basta um ser verdade para avaliar em verdade\n\n              console.log(!x); // false, o NOT inverte o valor lógico da variável\n            </code>\n          </pre>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n        <ion-row class="grid-header">\n            <ion-col col-12>\n              <h2>Tabelas de Verdade</h2>\n            </ion-col>\n          </ion-row>\n        <ion-row class="grid-header">\n          <ion-col col-4>\n            <ion-grid>\n              <ion-row>\n                <ion-col col-12>\n                  Tabela de Verdade do && ( AND )\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-4>\n                  X\n                </ion-col>\n                <ion-col col-4>\n                  Y\n                </ion-col>\n                <ion-col col-4>\n                  Resultado\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col col-4>\n                    F\n                  </ion-col>\n                  <ion-col col-4>\n                    F\n                  </ion-col>\n                  <ion-col col-4>\n                    F\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col col-4>\n                    F\n                  </ion-col>\n                  <ion-col col-4>\n                    V\n                  </ion-col>\n                  <ion-col col-4>\n                    F\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col col-4>\n                    V\n                  </ion-col>\n                  <ion-col col-4>\n                    F\n                  </ion-col>\n                  <ion-col col-4>\n                    F\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col col-4>\n                    V\n                  </ion-col>\n                  <ion-col col-4>\n                    V\n                  </ion-col>\n                  <ion-col col-4>\n                    V\n                  </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n          <ion-col col-4>\n              <ion-grid>\n                <ion-row>\n                  <ion-col col-12>\n                    Tabela de Verdade do || ( OR )\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-4>\n                    X\n                  </ion-col>\n                  <ion-col col-4>\n                    Y\n                  </ion-col>\n                  <ion-col col-4>\n                    Resultado\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-4>\n                      F\n                    </ion-col>\n                    <ion-col col-4>\n                      F\n                    </ion-col>\n                    <ion-col col-4>\n                      F\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-4>\n                      F\n                    </ion-col>\n                    <ion-col col-4>\n                      V\n                    </ion-col>\n                    <ion-col col-4>\n                      V\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-4>\n                      V\n                    </ion-col>\n                    <ion-col col-4>\n                      F\n                    </ion-col>\n                    <ion-col col-4>\n                      V\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-4>\n                      V\n                    </ion-col>\n                    <ion-col col-4>\n                      V\n                    </ion-col>\n                    <ion-col col-4>\n                      V\n                    </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n            <ion-col col-4>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col col-12>\n                      Tabela de Verdade do ! ( NOT )\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-6>\n                      X\n                    </ion-col>\n                    <ion-col col-6>\n                      Resultado\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-6>\n                        F\n                      </ion-col>\n                      <ion-col col-6>\n                        V\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-6>\n                        V\n                      </ion-col>\n                      <ion-col col-6>\n                        F\n                      </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\operators\operators.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], OperatorsPage);
    return OperatorsPage;
}());

//# sourceMappingURL=operators.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/arith/arith.module": [
		277,
		8
	],
	"../pages/arrays/arrays.module": [
		278,
		7
	],
	"../pages/conditionals/conditionals.module": [
		279,
		6
	],
	"../pages/functions/functions.module": [
		282,
		5
	],
	"../pages/loops/loops.module": [
		280,
		4
	],
	"../pages/objects/objects.module": [
		281,
		3
	],
	"../pages/operators/operators.module": [
		285,
		2
	],
	"../pages/types/types.module": [
		283,
		1
	],
	"../pages/vars/vars.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vars_vars__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__arith_arith__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__arrays_arrays__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__conditionals_conditionals__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__functions_functions__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loops_loops__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__objects_objects__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__operators_operators__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__types_types__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.arith = __WEBPACK_IMPORTED_MODULE_3__arith_arith__["a" /* ArithPage */];
        this.vars = __WEBPACK_IMPORTED_MODULE_2__vars_vars__["a" /* VarsPage */];
        this.arrays = __WEBPACK_IMPORTED_MODULE_4__arrays_arrays__["a" /* ArraysPage */];
        this.conditionals = __WEBPACK_IMPORTED_MODULE_5__conditionals_conditionals__["a" /* ConditionalsPage */];
        this.functions = __WEBPACK_IMPORTED_MODULE_6__functions_functions__["a" /* FunctionsPage */];
        this.loops = __WEBPACK_IMPORTED_MODULE_7__loops_loops__["a" /* LoopsPage */];
        this.objects = __WEBPACK_IMPORTED_MODULE_8__objects_objects__["a" /* ObjectsPage */];
        this.operators = __WEBPACK_IMPORTED_MODULE_9__operators_operators__["a" /* OperatorsPage */];
        this.types = __WEBPACK_IMPORTED_MODULE_10__types_types__["a" /* TypesPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\home\home.html"*/'<ion-tabs>\n  <ion-tab tabTitle="Variáveis" [root]="vars"></ion-tab>\n  <ion-tab tabTitle="Tipos" [root]="types"></ion-tab>\n  <ion-tab tabTitle="Operações Aritméticas" [root]="arith"></ion-tab>\n  <ion-tab tabTitle="Operadores" [root]="operators"></ion-tab>\n  <ion-tab tabTitle="Condicionais" [root]="conditionals"></ion-tab>\n  <ion-tab tabTitle="Funções" [root]="functions"></ion-tab>\n  <ion-tab tabTitle="Listas" [root]="arrays"></ion-tab>\n  <ion-tab tabTitle="Ciclos" [root]="loops"></ion-tab>\n  <ion-tab tabTitle="Objetos" [root]="objects"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_vars_vars__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_arith_arith__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_arrays_arrays__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_conditionals_conditionals__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_functions_functions__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_loops_loops__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_objects_objects__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_operators_operators__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_types_types__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_vars_vars__["a" /* VarsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_arith_arith__["a" /* ArithPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_arrays_arrays__["a" /* ArraysPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_conditionals_conditionals__["a" /* ConditionalsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_functions_functions__["a" /* FunctionsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_loops_loops__["a" /* LoopsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_objects_objects__["a" /* ObjectsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_operators_operators__["a" /* OperatorsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_types_types__["a" /* TypesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/arith/arith.module#ArithPageModule', name: 'ArithPage', segment: 'arith', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/arrays/arrays.module#ArraysPageModule', name: 'ArraysPage', segment: 'arrays', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conditionals/conditionals.module#ConditionalsPageModule', name: 'ConditionalsPage', segment: 'conditionals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loops/loops.module#LoopsPageModule', name: 'LoopsPage', segment: 'loops', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/objects/objects.module#ObjectsPageModule', name: 'ObjectsPage', segment: 'objects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/functions/functions.module#FunctionsPageModule', name: 'FunctionsPage', segment: 'functions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/types/types.module#TypesPageModule', name: 'TypesPage', segment: 'types', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vars/vars.module#VarsPageModule', name: 'VarsPage', segment: 'vars', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/operators/operators.module#OperatorsPageModule', name: 'OperatorsPage', segment: 'operators', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_vars_vars__["a" /* VarsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_arith_arith__["a" /* ArithPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_arrays_arrays__["a" /* ArraysPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_conditionals_conditionals__["a" /* ConditionalsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_functions_functions__["a" /* FunctionsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_loops_loops__["a" /* LoopsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_objects_objects__["a" /* ObjectsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_operators_operators__["a" /* OperatorsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_types_types__["a" /* TypesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArithPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArithPage = /** @class */ (function () {
    function ArithPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ArithPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArithPage');
        hljs.initHighlighting.called = false;
        hljs.initHighlighting();
    };
    ArithPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-arith',template:/*ion-inline-start:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\arith\arith.html"*/'<!--\n  Generated template for the ArithPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <ion-row class="grid-header">\n    <ion-col col-12>\n        <h1>3. Operações Aritméticas</h1>\n    </ion-col>\n  </ion-row>\n  <ion-row class="grid-header" justify-content-center align-items-center>\n    <ion-col col-12>\n      <p>\n        Guardar valores numa variável é fixe, mas mais fixe ainda é poder fazer operações usando-os e manipulando-os para \n        atingir os objetivos do nosso programa. O que podemos fazer com eles? Bem, uma parte da resposta está na tabela abaixo. \n        Para obter o resto das operações, passa para a página seguinte.\n      </p>\n    </ion-col>\n  </ion-row>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>Operador</ion-col>\n      <ion-col col-6>Descrição</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>+</ion-col>\n      <ion-col col-6>Soma</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>-</ion-col>\n      <ion-col col-6>Subtração</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>*</ion-col>\n      <ion-col col-6>Multiplicação</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>**</ion-col>\n      <ion-col col-6>Exponenciação</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>/</ion-col>\n      <ion-col col-6>Divisão</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>%</ion-col>\n      <ion-col col-6>Módulo ou resto de divisão</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>++</ion-col>\n      <ion-col col-6>Incremento (Somar 1)</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>--</ion-col>\n      <ion-col col-6>Decremento (Subtrair 1)</ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row class="grid-header">\n      <ion-col col-12>\n        <h2>Exemplos</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row class="grid-header grid-code" justify-content-center align-items-center>\n      <ion-col col-12>\n        <pre>\n          <code class="javascript hljs">\n            var x = 10;\n            var y = 5;\n\n            var z = x + y; // z = 15\n            var w = x - y; // w = 5\n\n            var t = x * y; // t = 50\n            var e = x ** y; // e = 100000\n\n            var d = x / y; // d = 2\n            var m = x % y; // m = 0\n\n            var n = x++; // n = 11\n            var i = y--; // i = 4\n\n          </code>\n        </pre>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\nuno1\OneDrive\Documentos\Estudar\3º ano\1º Semestre\PCM\trabalhos\rocket\src\pages\arith\arith.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ArithPage);
    return ArithPage;
}());

//# sourceMappingURL=arith.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map