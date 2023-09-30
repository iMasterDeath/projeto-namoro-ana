confirm("Are you sure you want to delete?")
$(document).ready(function(){

    $(".mudaTela").click(function(){
        mudaTela( $(this), $(this).attr("nova"), $(this).attr("animacao"), $(this).attr("tempoAnimacao") );
    });

    $("a.opcoes").click(function(e){
        e.preventDefault();
        $("div.opcoes").slideToggle(500);
    });

    $(".calendario .marcado").click(function(){
        mostraMsgMes($(this).attr("value"));
    });

    const mudaTela = ( atual, nova = null, animacao = "fade", tempoAnimacao = 900 ) => {

        // define a nova tela
        if(!nova){
            nova = parseInt(atual.parent().attr("id").split("tela")[1])+1;
        }

        if(animacao == "fade"){
            $("#tela"+(nova-1)).fadeOut(tempoAnimacao);
            setTimeout(() => {
                $("#tela"+nova).fadeIn(tempoAnimacao)
            }, tempoAnimacao);
        }else{
            $("#tela"+(nova-1)).hide(tempoAnimacao);
            $("#tela"+nova).show(tempoAnimacao);
        }

        if($("#tela"+nova).hasClass("temporizado")){
            $("#tela"+nova+" div").hide();
            telaTemporizada(nova, 0);
        }

        verificaFundo(nova);
        $("html, body").animate({ scrollTop: 0 }, "slow");
        if(nova == 5){
            var audio = new Audio('assets/musica.mp3');
            audio.volume = 0.1;
            audio.play();
        }
        
    }

    const telaTemporizada = ( nTela, contador ) =>{

        const tela = $("#tela"+nTela+" div:eq("+contador+")");
        const temporizador = 500;
        const temporizadorPrimeiraTela = (contador==0?$("#tela"+nTela).attr("tempo"):temporizador);

        setTimeout(() => {
            tela.fadeIn(temporizador);

            setTimeout(() => {
                tela.fadeOut(temporizador);
                if(tela.attr("final") == "true"){
                    mudaTela(null, nTela+1, "fade", 900);
                    verificaFundo(nTela+1);
                }else{
                    telaTemporizada(nTela, contador+1);
                }

            }, tela.attr("tempo") );

        }, temporizadorPrimeiraTela);
        
    }

    const verificaFundo = (nTela) =>{

        const fundo = $("#tela"+nTela).attr("fundo");
        const tempo = $("#tela"+nTela).attr("tempo");

        if(fundo){
            $("body").attr("class", fundo);            
        }
        
    }

    const mostraMsgMes = (texto) =>{

        let titulo;
        let mensagem;

        switch(texto){
            case "2/8": titulo = "02 de Agosto de 2023"; mensagem = "<p> Aqui foi a primeira vez que te chamei no whatsapp, um dia depois do meu aniversário, curioso né? rsrsrs, eu lembro que estava com maior medo e receio de você não querer conversar kkkkk, bom que você aceitou conversar 🤣.</p>";break;
            case "3/8": titulo = "03 de Agosto de 2023"; mensagem = "<p>Aqui eu mandei um pacotão de fotos minha e você falou que ia mandar pras suas amigas kkkkk, eu dei mt risada por que o andrezinho e a outra menina lá começaram a me seguir 🤣🤣.</p>";break;
            case "9/8": titulo = "09 de Agosto de 2023"; mensagem = "<p>Aqui foi a primeira vez que eu cogitei sair com você e comentei contigo e ai você falou que tinha que ver certinho por causa da sua vó que a sua mãe dormia com ela rsrsrs.</p>";break;
            case "10/8": titulo = "10 de Agosto de 2023"; mensagem = "<p>Foi o dia que tirei uma foto sua kkkkk e você ficou se perguntando onde eu estava kkkkkkkkkkkk eu ri demais esse dia 🤣🤣. </p>";break;
            case "16/8": titulo = "16 de Agosto de 2023"; mensagem = "<p>Aqui foi onde tava achando lá no cartórios os registros de nascimento, casamento e afins para te zoar kkkkkk ficamos um tempão zoando um com o outro kkkkkk 🤣.</p>";break;
            case "22/8": titulo = "22 de Agosto de 2023"; mensagem = "<p>Aqui foi o dia que conversamos um montão a respeito de religião e contamos várias coisas, me senti tão bem esse dia por poder ser eu mesmo e não fingir algo só para agradar os outros.</p>";break;
            case "26/8": titulo = "26 de Agosto de 2023"; mensagem = "<p>Bom nesse dia aqui estavamos para sair, quando do nada minha mãe passou mau, fiquei muito triste esse dia, queria sério que ela melhorasse pra ir te ver, mas não foi isso que aconteceu infelizmente, porém você foi muito compreensiva nesse dia...</p>";break;
            case "01/9": titulo = "01 de Setembro de 2023"; mensagem = "<p>Aqui foi o dia do nosso primeiro encontro lá no yellow stone, tá lembrada? muito bom esse dia, tirando que a senhorita estava Super Nervosa kkkkk, mas deu tudo certo kkk.</p>";break;
            case "07/9": titulo = "07 de Setembro de 2023"; mensagem = "<p>Aqui foi o nosso encontro lá no Gracco que você gostou muuito do lanche tambem, e eu fiquei muito feliz por que era do jeito que você tinha falado pra mim que gostava (de comida picante e tava bem apimentadinho rsrsrs).</p>";break;
            case "15/9": titulo = "15 de Setembro de 2023"; mensagem = "<p>Aqui fomos no Brunão Smash Burguer, lembro que fiz uma zoeira no whats com você, e você tinha ficado doida achando que eu tinha feito alguma inhaca kkkk, ai depois so mostrei que era uma msg e demos um Selinho, que lembro dele até hoje...</p>";break;
            case "16/9": titulo = "16 de Setembro de 2023"; mensagem = "<p>Neste dia fomos no yellow e conversamos muito depois sobre você ser você mesmo, e foi ai que começou a ser você mesma e se soltar, eu amei isso, e demos um selinho mais lento e beem melhor que o primeiro.</p>";break;
            case "22/9": titulo = "22 de Setembro de 2023"; mensagem = "<p>Bom oque falar do primeiro beijo né? neste dia demos o primeiro beijo e foi maravilhoso, por mais que eu tinha falado que seria ruim (para você por ser a primeira vez) olhar sua carinha e seu jeito fofo de dizer que gostou valeu demais a pena, fora o fato de que você deitou no meu colo e fiz carinho em você, tava tudo perfeito (tirando o calor 🔥🤣).</p>";break;
            case "24/9": titulo = "24 de Setembro de 2023"; mensagem = "<p>É oque está acontecendo agora...</p>";break;
            case "final": titulo = "24 de Setembro de 2023"; mensagem = "<p>O dia que começamos uma vida juntos ❤️ Início de Namoro ❤️.</p>";break;
        }

        mostraPopUp(true, titulo, mensagem);
        telaFinal = (texto=="final"?true:false);
    }

    

});

let telaFinal = false;

const mostraPopUp = (mostrar, titulo = "Título de testes", mensagem = "Mensagem de teste...") =>{

    if(mostrar){
        $("html, body").animate({ scrollTop: $(".pop-up")[0].offsetTop }, "smooth");
        $(".pop-up").fadeIn(500);
        $(".pop-up h1").html(titulo);
        $(".pop-up div").html(mensagem);
        $(".container").css("opacity", "0.5");
    }else{
        $(".pop-up").fadeOut(500);
        $(".container").css("opacity", "1");

        if(telaFinal){
            $("#tela19").fadeOut(4000);
            setTimeout(() => {
                $("#tela20").fadeIn(6500);
                $("body").attr("class", "fundo6");    
                $("html, body").animate({ scrollTop: 0 }, "slow");
            }, 4000);
        }

    }

}