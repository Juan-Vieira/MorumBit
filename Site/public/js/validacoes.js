function validCadastro(username, dtNascimento, email, senha, confirm_senha) {

    // Validação de campos vazios
    if (username == "" || dtNascimento == "" || email == "" || senha == "" || confirm_senha == "") {

        return "Preencha todos os campos!";

    }
    // Validação de username
    else if (username.length > 20) {

        return "Erro! O username deve ter no máximo 20 caracteres.";

    }
    // Validação de e-mail
    if (email.length < 10 || email.length > 30) {

        return "Erro! O e-mail deve ter no mínimo 10 e máximo 30 caracteres.";

    }
    else if (!email.includes('@')) {

        return "Erro! Email precisa ter @.";

    }
    else {

        var indiceArroba = email.indexOf('@');

        if (indiceArroba == 0) {

            return "Erro! Digite algo antes do @.";

        }
        else if (email != email.toLowerCase()) {

            return "Erro! Os caracteres do email devem estar em minúsculo.";

        }
        else if (indiceArroba == email.length - 1) {

            return "Erro! Seu email não possui domínio.";

        }
        else {

            var pontoCom = "";

            for (var i = email.length - 4; i < email.length; i++) {
                pontoCom += email[i];
            }

            if (pontoCom != '.com') {
                return "Erro! Seu domínio não tem '.com'.";
            }
        }
    }

    // Validação de senha
    if (senha.length < 4 || senha.length > 11) {
        return "Erro! Senha deve ter no mínimo 4 e no máximo 11 caracteres.";
    }
    else {

        existeNumero = false
        existeCaractereEspecial = false

        if (senha == senha.toLowerCase()) {

            return "Erro! Senha precisa de pelo menos 1 letra maiúscula."

        } else {

            for (var i = 0; i < senha.length; i++) {

                indiceSenha = senha[i]

                if (indiceSenha >= '0' && indiceSenha <= '9') {
                    existeNumero = true;
                }
                else if (!((indiceSenha >= 'a' && indiceSenha <= 'z') || (indiceSenha >= 'A' && indiceSenha <= 'Z') || (indiceSenha >= '0' && indiceSenha <= '9'))) {
                    existeCaractereEspecial = true;
                }

            }

            if (!existeNumero) {
                return "Erro! A senha deve ter pelo menos 1 número.";
            }
            else if (!existeCaractereEspecial) {
                return "Erro! A senha precisa ter pelo menos 1 caractere especial.";
            }
            else if (senha !== confirm_senha) {
                return "Erro! confirmação de senha inválida.";
            }

        }

    }

    return null;
}

function validUpdate(username, dtNascimento, email, senha) {

    // Validação de campos vazios
    if (username == "" || dtNascimento == "" || email == "" || senha == "") {

        return "Preencha todos os campos!";

    }
    // Validação de username
    else if (username.length > 20) {

        return "Erro! O username deve ter no máximo 20 caracteres.";

    }
    // Validação de e-mail
    if (email.length < 10 || email.length > 30) {

        return "Erro! O e-mail deve ter no mínimo 10 e máximo 30 caracteres.";

    }
    else if (!email.includes('@')) {

        return "Erro! Email precisa ter @.";

    }
    else {

        var indiceArroba = email.indexOf('@');

        if (indiceArroba == 0) {

            return "Erro! Digite algo antes do @.";

        }
        else if (email != email.toLowerCase()) {

            return "Erro! Os caracteres do email devem estar em minúsculo.";

        }
        else if (indiceArroba == email.length - 1) {

            return "Erro! Seu email não possui domínio.";

        }
        else {

            var pontoCom = "";

            for (var i = email.length - 4; i < email.length; i++) {
                pontoCom += email[i];
            }

            if (pontoCom != '.com') {
                return "Erro! Seu domínio não tem '.com'.";
            }
        }
    }

    // Validação de senha
    if (senha.length < 4 || senha.length > 11) {
        return "Erro! Senha deve ter no mínimo 4 e no máximo 11 caracteres.";
    }
    else {

        existeNumero = false
        existeCaractereEspecial = false

        if (senha == senha.toLowerCase()) {

            return "Erro! Senha precisa de pelo menos 1 letra maiúscula."

        } else {

            for (var i = 0; i < senha.length; i++) {

                indiceSenha = senha[i]

                if (indiceSenha >= '0' && indiceSenha <= '9') {
                    existeNumero = true;
                }
                else if (!((indiceSenha >= 'a' && indiceSenha <= 'z') || (indiceSenha >= 'A' && indiceSenha <= 'Z') || (indiceSenha >= '0' && indiceSenha <= '9'))) {
                    existeCaractereEspecial = true;
                }

            }

            if (!existeNumero) {
                return "Erro! A senha deve ter pelo menos 1 número.";
            }
            else if (!existeCaractereEspecial) {
                return "Erro! A senha precisa ter pelo menos 1 caractere especial.";
            }

        }

    }

    return null;
}


function validLogin(emailVar, senhaVar) {

    if (emailVar == "" || senhaVar == "") {

        return "Preencha todos os campos."

    }

}

function sumirErro() {

    setTimeout(() => {
        cardErro.style.display = "none";
    }, 5000);

}