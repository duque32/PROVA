class Tabelas{
    // construtor de Tabela
    init(conexao){
        this.conexao = conexao

        this.criarJogadores()
        this.criarCalendario()
        this.criarLugar()
        this.criarOrganizador()
        this.criarTimes()
        this.criarPartida()
        this.criarResultado()        
        
    } 

    criarTimes(){
        let sql = 'CREATE TABLE IF NOT EXISTS Times'+
            '(nome varchar(50) not null,'+
            'id_Times int auto_increment not null primary key,'+
            'id_Jogadores_fk int not null,'+
            'id_Organizador_fk int not null,'+
            'foreign key(id_Jogadores_fk) references Jogadores(id),'+
            'foreign key(id_Organizador_fk) references Organizador(id_Organizador))'
        
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Time criada com sucesso!')
            }
        })
    }

    criarCalendario(){
        let sql = 'CREATE TABLE IF NOT EXISTS Calendario '+
        '(id_Calendario int auto_increment not null primary key,'+
        'DataPartida datetime)'
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Calendario criada com sucesso!')
            }
        })
    }

    criarOrganizador(){
        let sql = 'CREATE TABLE IF NOT EXISTS Organizador '+
        '(id_Organizador int auto_increment not null primary key,'+
        'id_Jogadores_fk int not null,'+
        'foreign key(id_Jogadores_fk) references Jogadores(id))'
        
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Organizador criada con sucesso!')
            }
        })
    }
    criarJogadores(){
        let sql = 'CREATE TABLE IF NOT EXISTS Jogadores '+
        '(id int auto_increment not null primary key,'+
        'nome varchar(30) not null,'+
        'posicao varchar(20) not null)'
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Jogadores criada com sucesso!')
            }
        })
    }
    criarPartida(){
        let sql = ' create table if not exists Partida '+
            '(id_Partida int auto_increment not null primary key,'+
            'id_Times_fk int not null,'+
            'foreign key(id_Times_fk) references Times(id_Times),'+
            'id_Organizador_fk int not null,'+
            'foreign key(id_Organizador_fk) references Organizador(id_Organizador),'+
            'id_Jogadores_fk int not null,'+
            'foreign key(id_Jogadores_fk) references Jogadores(id),'+
            'id_Lugar_fk int not null,'+
            'foreign key(id_Lugar_fk) references Lugar(id_Lugar),'+
            'id_Calendario_fk int not null,'+
            'foreign key(id_Calendario_fk) references Calendario(id_Calendario))'
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela CARTEIRA criada com sucesso!')
            }
        })
    }
    
    criarLugar(){
        let sql = 'CREATE TABLE IF NOT EXISTS Lugar '+
         '(id_Lugar int auto_increment not null primary key,'+
         'endereço varchar(50) not null,'+
         'nome varchar(50) not null,'+
         'capacidade int)'
        
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Lugar criada con sucesso!')
            }
        })
    }
    criarResultado(){
        let sql = 'CREATE TABLE IF NOT EXISTS Resultado '+
         '(id_Resultado int auto_increment not null primary key,'+
         'placar varchar (20),'+
         'id_Partida_fk int,'+
         'foreign key(id_Partida_fk) references Partida(id_Partida))'
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Resultado criada com sucesso!')
            }
        })
    }
}
module.exports = new Tabelas