import Mail from "../lib/mail";

export default {

    async store(req, res) {
        const { name, email, password} = req.body;

        const user = {
            name,
            email,
            password
        };

        Mail.sendMail({
            from: 'Queue test <queue@gmail.com>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de Usuário',
            html: `Olá, ${name}, Bem-vindo ao sistema! :)`
        });

        return res.json(user);
    }
}