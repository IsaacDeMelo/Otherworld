import express from "express";
import bodyParser from 'body-parser';
import session from 'express-session';

// Sincronização usando o método sync()

const data = [{
    nome: 'Luka Modric', 
    info: 'Um garoto que não costuma andar em grupo, entretanto, suas habilidades são formidaveis, como demonstrado na aula de educação fisica e na luta contra Hooper. Sua familia é desconhecida pelo mesmo, mas ele é descendente de monges muito poderosos. Em sua concepção, seu melhor amigo é Kruger.', 
    magias: "Magia natural", 
    aparencia: "https://i.pinimg.com/564x/59/54/74/595474878bd3101165077e8b82563690.jpg"}
    ,{
    nome: 'Gyumei Orokodaki',
    info: 'Gyumei não é descendente de família alguma, tendo sido abandonado na infância proximo da porta da cidade, desde então foi criado pelo povo da cidade. Sua habilidade favorita é a clonagem, e tem medo de insetos.',
    magias: "Magia natural",
    aparencia: "https://i.pinimg.com/736x/57/2c/05/572c050ffc37319d9458040c9c9b790f.jpg"
    }, {
    nome: 'Ezra',
    info: 'Atualmente professora do grau 1 da academia de magia da cidade, tendo sido uma grande heroína de guerra em seu tempo de juventude, tendo acabado com dezenas de soldados de alto nível com apenas 16 anos',
    magias: "Magia natural, Magia proibida, Magia especialista, Magia elemental",
    aparencia: "https://i.pinimg.com/564x/50/3b/98/503b98f0401c7272a7f9eb411d26a222.jpg"
    }, {
    nome: 'Arthur',
    info: 'Atualmente professor de educação física, porém, assim como a maioria dos professores, Arthur passou por momentos de guerra, e foi de grande ajuda para a vitória do reino. Seu maior medo é altura, apesar de ser massivamente forte. É dito que ele nunca perdeu no um contra um',
    magias: "Magia natural, Magia elemental, Magia proibida",
    aparencia: "https://i.pinimg.com/564x/b6/0f/db/b60fdb3ea0444786fb4064367603a891.jpg",
    }, {
    nome: "Kingsley Koman",
    info: "Atualmente vice diretora da academia de magia, tendo bloqueio de magia desde a infância. Desde pequena, Koman foi discriminada por essa falta de controle de aura, assim, levando-a para um caminho obscuro e vilanesco. Por sorte, Koman se deu conta do mal que estava fazendo, e decidiu se tornar uma boa pessoa, ajudando o reino em diversas ocasiões com suas invocações extremamente poderosas",
    magias: "Nenhuma",
    aparencia: "https://i.pinimg.com/564x/06/8a/e6/068ae606ee14ea71e6e92669cfe6d28d.jpg",
    }, {
    nome: "Diretor Richard",
    info: "Como o seu pseudonimo confirma, Richard é o diretor geral da academia, tendo controle sobre tudo. Richard se tornou diretor após se aposentar dos combates, pois, o tal já foi um general de guerra muito respeitado e poderoso, podendo fazer o chão tremer somente com sua presença. Richard está interessado em ter um discipulo em suas horas vagas, mas até agora não se achou ninguém digno.",
    magias: "Magia natural, Magia proibida",
    aparencia: "https://i.pinimg.com/564x/db/d6/9b/dbd69bc5f9bfd8a39f8e0039d0e32820.jpg"
    }, {
    nome: "Kaiser",
    info: "Atualmente é um mago de grau 3, tendo liderado a missão de busca dos alunos sub 17 do grau 2, com a ajuda de Zack Hundregor, Junior e Klaus Zoldyck. No momento, seu discipulo é Junior, apesar da preferência por Klaus. A preferência se dá somente pelo fato de que Zoldyck pode ter perdido seu irmão para sempre, por culpa indiretamente de Kaiser",
    magias: "Magia natural, Magia proibida, Magia elemental especial",
    aparencia: "https://i.pinimg.com/564x/34/07/de/3407deace72ac87584ca162ad0efea51.jpg"
    }, {
    nome: "Angelo",
    info: "Considerado pelos professores o mais forte dentre os alunos de grau 1, sendo gentil e pacifico, mas extremamente grosso e violento quando posto sob pressão. Sua comida favorita é sopa de rã",
    magias: "Magia natural, Magia especialista",
    aparencia: "https://i.pinimg.com/564x/58/aa/fd/58aafda11b4006a439a51317bf703d8c.jpg"
    }, {
    nome: "Canny",
    info: "Uma criminosa procurada em vários reinos, sempre sendo vista durante a noite, e descrita como tendo uma regeneração monstruosa",
    magias: "Magia proibida",
    aparencia: "https://i.pinimg.com/564x/fa/3d/08/fa3d08103b99e82e0549f509cc531133.jpg"
    }, {
    nome: "Rose",
    info: "Descendente da família de guerreiros D.O.O (Disciple Of Ogre), Rose é uma garota reservada, com um grande intelecto e potencial para se tornar uma grande maga. Seu maior sonho é se tornar rainha de algum reino.",
    magias: "Magia natural",
    aparencia: "https://i.pinimg.com/564x/be/1c/b8/be1cb8496a423077d6825d5ea116cecd.jpg",    
    }, {
    nome: "Kyuren",
    info: "Atualmente preso num rubi, tendo sido capturado por Kaiser e Zeldris, com o auxilio de Zack, Junior e Klaus. Sua força é avassaladora, sendo imune a dor e quaisquer ferimentos, sendo a unica forma de derrota-lo o selo. Foi responsável pelo isolamento de grande parte dos sub 17 da academia, estando todos presos até hoje no selamento.",
    magias: "Magia natural, Magia proibida, Magia elemental, Magia especialista",
    aparencia: "https://i.pinimg.com/564x/5e/e1/23/5ee1237d9a4a8aff0eec8091c96492fc.jpg"
    }, {
    nome: "O Corvo",
    info: "Criminoso procurado no reino, apesar de ser iniciante. Perdeu sua família a pouco tempo, tendo entrado no mundo do crime para sustentar sua filha. Seu grande poder veio de sua antiga carreira de mago, que abandonou após perceber que magos nunca podem fazer o que bem entendem. Sua maior fraqueza é coragem, pois, está acostumado a lutar com oponentes amedrontados, e não encorajados.",
    magias: "Magia elemental, Magia proibida",
    aparencia: "https://i.pinimg.com/564x/96/de/06/96de06a3f9ae38b7a77d8102b40e1019.jpg"
    }

]

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'dadasdad27go', // Chave secreta para assinar a sessão
    resave: false,
    saveUninitialized: true
}));
app.set('view engine', 'ejs');
app.set('views', "./views");
app.listen(port, () => {
    console.log(`The Isaac's app is listening on port ${port}`)
});

app.get('/', (req, res) => {
    res.redirect('/welcome');
});
app.get('/welcome', (req, res) => {
    res.render('app.ejs');
});
app.get('/app', (req, res) =>{
    res.render('app.ejs');
})
app.get('/pesquisa', (req, res) =>{
    const usuario = req.session.usuario
    res.render('pesquisa.ejs', { data:data });
})
app.post('/pesquisa', (req, res) => {
    const { key } = req.body;
    const resultados = pesquisarPorNome(data, key);
    if (key == "" || key == " "){
        res.render('pesquisa.ejs');
    } else {
        res.render('pesquisa.ejs', { resultados: resultados });
    }
}) 

function pesquisarPorNome(array, termoPesquisa) {
    termoPesquisa = termoPesquisa.toLowerCase();

    return array.filter(function(pessoa) {
      const nomeLowerCase = pessoa.nome.toLowerCase();
      return nomeLowerCase.includes(termoPesquisa);
    });
  }
  
export default app;