import { createHash, generateKey } from "crypto";

const senhaOriginal = "minhaSenhaSegura123";

generateKey("hmac", { length: 256 }, (err, key) => {
    if (err) throw err;

    const salt = key.export().toString('hex');
    console.log(`Salt gerado: ${salt}`);

    // 2. Criamos o hash combinando a senha com o salt
    // Usamos o createHash para SHA-256
    const hash = createHash("sha256")
        .update(senhaOriginal + salt) // Combinamos a senha com o "tempero"
        .digest("hex");

    console.log(`Hash final para o banco: ${hash}`);

    // 3. Exemplo de como você validaria isso depois
    validarSenha("minhaSenhaSegura123", salt, hash);
});

function validarSenha(senhaDigitada, saltSalvo, hashNoBanco) {
    const novaTentativa = createHash("sha256")
        .update(senhaDigitada + saltSalvo)
        .digest("hex");

    if (novaTentativa === hashNoBanco) {
        console.log("Senha correta! Acesso liberado.");
    } else {
        console.log("Senha incorreta.");
    }
}